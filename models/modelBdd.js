let connection = require('../bin/bdd')
let moment = require('../bin/moment');

class Model {
    static index(cb) {
        connection.query('select * from groupe', (err, rowG) => {
            if (err) throw err
            connection.query('select * from contenu', (err, rowC) => {
                if (err) throw err
                cb(rowG, rowC)
            })
        })
    }

    static add(name, comment, cb) {
        connection.query('insert into contenu value (default,?,?,default)', [name, comment], (err) => {
            if (err) throw err
            cb("Ajout réussi")
        })
    }

    static remove(id, cb) {
        connection.query('delete from contenu where id = ?', [id], (err) => {
            if (err) throw err
            cb("Suppression réussi")
        })
    }

    static modify(id, groupe, cb) {
        connection.query('select * from groupe where titre = ?', [groupe], (err, rowG) => {
            if (err) throw err
            if (rowG.length == 0) {
                cb("erreur de groupe")
            } else {
                console.log(rowG[0].id)
                connection.query('update contenu set id_groupe=? where id = ?', [rowG[0].id, id], (err) => {
                    if (err) throw err
                    cb('Modification réussi')
                })
            }
        })
    }
}

module.exports = Model;
