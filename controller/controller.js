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
// POST tambahkan data mahasiswa
// PUT mengubah data mahasiswa berdasarkan [id]
// DELETE menghapus data mahasiswa berdasarkan [id]