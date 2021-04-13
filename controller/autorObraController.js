const mysql = require('../mysql');

exports.getAutoresObra = async (req, res, next) => {
    try {
        const query = 'select * from autor'
        const result = await mysql.execute(query);
        const response = {
            autor: result.map(autor => {
                return {
                    idAutor: autor.idAutor,
                    nome: autor.nome
                }
            })
        }
        return res.status(200).send({ response })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.getAutorObra = async (req, res, next) => {
    try {
        const query = 'select * from autor inner join autorObra on autor.idAutor = autorObra.idAutor where idObra = ?'
        const result = await mysql.execute(query, [req.params.idObra]);
        const response = {
            autores: result.map(autor => {
                return {
                    idAutor: autor.idAutor,
                    idObra: autor.idObra,
                    nome: autor.nome
                }
            })
        }
        return res.status(200).send({ response })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.postAutorObra = async (req, res, next) => {
    try {
        
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.putAutorObra = async (req, res, next) => {
    try {
        
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.delAutorObra = async (req, res, next) => {
    try {
        
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}