'use strict';

var response = require('../rest')
var connection = require('../koneksi')

exports.index = function(req, res){
    response.ok("Aplikasi REST API berjalan!", res)
}

// GET tampil data mahasiswa
exports.tampilsemuamahasiswa = function(req, res){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    })
}

// TODO
// GET tampilkan data mahasiswa berdasarkan [id]
exports.tampilberdasarkanid = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?", [id],
        function(error, rows, fields){
            if(error){
                console.log(error)
            }else{
                response.ok(rows, res)
            }
        }
    )
}

// POST tambahkan data mahasiswa
exports.tambahMahasiswa = function(req, res){
    //body data yang akan kita POST
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) VALUES(?,?,?)',
        [nim, nama, jurusan],
        function(error, rows, fields){
            if(error){
                console.log(error)
            }else{
                response.ok("Berhasil Menambahkan Data!", res)
            }
        }
    );
}

// PUT mengubah data mahasiswa berdasarkan [id]
exports.ubahmahasiswa = function(req, res){
    //body data yang akan kita POST
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim = ?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim, nama, jurusan, id],
        function(error, rows, fields){
            if(error){
                console.log(error)
            }else{
                response.ok("Berhasil Ubah Data!", res)
            }
        }
    )
}

// DELETE menghapus data mahasiswa berdasarkan [id]
exports.hapusMahasiswa = function(req, res){
    var id = req.body.id_mahasiswa;
    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?', [id],
    function(error, rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("Berhasil Hapus Data!", res)
        }
    }
)}