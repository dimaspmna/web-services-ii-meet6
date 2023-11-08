// import module mysql
var mysql = require('mysql')

// konfigurasi username dan password database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_mahasiswa'
});
 
// respon jika berhasil terkoneksi
conn.connect((err)=>{
    if(err) throw err;
    console.log('MySQL sudah terkoneksi!')
});


module.exports = conn;