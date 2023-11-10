'use strict';

const {json} = require('body-parser');

module.exports = function(app){
    var jsonku = require('../controller/controller')

    //endpoint root
    app.route('/')
        .get(jsonku.index);

    //endpoint tampil semua mhs
    app.route('/tampil')
        .get(jsonku.tampilsemuamahasiswa);
    
    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/tambah')
        .post(jsonku.tambahMahasiswa);

    app.route('/ubah')
        .put(jsonku.ubahmahasiswa);
    
    app.route('/delete')
        .delete(jsonku.hapusMahasiswa);
}