const mysql = require('../mysql');

exports.getAutores = async (req, res, next) => {
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

exports.getAutor = async (req, res, next) => {
    try {
        const query = 'select * from autor inner join autorObra on autor.idAutor = autorObra.idAutor where idObra = ?'
        const result = await mysql.execute(query, [req.params.idObra]);
        if(result.length == 0) {
            return res.status(404).send({
                mensagem: 'Não foi encontrado nenhum autor'
            })
        }
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

exports.postAutor = async (req, res, next) => {
    try {
        const query = 'insert into autor (nome) values (?)'
        const result = await mysql.execute(query, 
            [
                req.body.nome,
            ]);
            const response = {
                mensagem: 'Autor inserido com sucesso',
                autorCriado: {
                    idAutor: result.idAutor,
                    nome: req.body.nome,
                }
            }

            return res.status(200).send({ response })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.putAutor = async (req, res, next) => {
    try {
        const query = 'UPDATE autor set nome = ? WHERE idAutor = ?'
        const result = await mysql.execute(query,
            [
                req.body.nome,
                req.params.idAutor
            ]);
        const response = {
            mensagem: 'Obra alterada com sucesso',
            obraAlterada: {
                idObra: result.idObra,
                nome: req.body.nome
            }
        }
        return res.status(200).send({ response })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.delAutor = async (req, res, next) => {
    try {
        const query = 'DELETE FROM autor WHERE idAutor = ?'
        const result = await mysql.execute(query, [req.params.idAutor]);
        const response = {
            mensagem: 'Autor removido com sucesso',
        }
        return res.status(200).send({ response })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}