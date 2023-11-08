'use strict';
//check apakah request berhasil diberikan atau tidak, lalu kirim messege ini.
exports.ok = function(values, res){
    var data = {
        'status': 200,
        'values': values
    };
    res.json(data)
    res.end();
}