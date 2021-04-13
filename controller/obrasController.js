const mysql = require('../mysql');


// exports.getObras = async (req, res, next) => {
//     try {
      
//         const query1 = 'select * from obras;'
//         const query2 = 'select nome from autor inner join autorObra on autor.idAutor = autorObra.idAutor where idObra = ?'
//         const result = await mysql.execute(query1);


//         //const autor = await mysql.execute(query2,result[1].idObra)
       
//             for (let index = 0; index < result.length; index++) {
//                 const idObr = result[index].idObra;
//                 var autores = await mysql.execute(query2,idObr)
//                 console.log(autores)
                
//             }
//            // var autores = await mysql.execute(query2,idObra)
         
       
//         // result.forEach(obra => {
//         //     console.log(obra.idObra)
//         //     //var nome = autores.nome
            
//         // });
            
//             const response = {
//                 quantidade: result.length,
//                 obras: result.map(obra => {
//                     return {
//                         id: obra.idObra,
//                         titulo: obra.titulo,
//                         editora: obra.editora,
//                         foto: obra.foto,
//                         autores: {
//                             nome: autores
                            
//                             // autor: autor.map(aut => {
//                             //     return{
//                             //         nome: aut.nome
//                             //     }
//                             // })
//                         }
//                     }
                   
//                 }),
                
//             } 
            
        
//         return res.status(200).send({ response })  
//     } catch (error) {
//         return res.status(500).send({ error: error })
//     }
// };

exports.getObras = async (req, res ,next) => {
    try {
        const query = 'select * from obras;'
        const result = await mysql.execute(query);
        const response = {
            quantidade: result.length,
            obras: result.map(obra => {
                return {
                    id: obra.idObra,
                    titulo: obra.titulo,
                    editora: obra.editora,
                    foto: obra.foto,
                }

            }),
        }
        return res.status(200).send({ response })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.getObra = async (req, res, next) => {
    try {
        const query = 'select * from obras where idObra = ?'
        const result = await mysql.execute(query, [req.params.idObra]);
        if (result.length == 0) {
            mensagem: 'Não foi encontrado nenhuma obra'
        }

        const response = {
            obra: {
                idObra: result[0].idObra,
                titulo: result[0].titulo,
                editora: result[0].editora,
                foto: result[0].foto,
            }
        }
        return res.status(200).send({ response })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.postObras = async (req, res, next) => {
    try {
        const query = 'insert into obras (titulo, editora, foto) values (?,?,?)'
        const result = await mysql.execute(query, 
            [
                req.body.titulo,
                req.body.editora,
                req.body.foto
            ]);

            const response = {
                mensagem: 'Obra inserido com sucesso',
                obraCriada: {
                    idObra: result.idObra,
                    titulo: req.body.titulo,
                    editora: req.body.editora,
                    foto: req.body.foto
                }
            }

            return res.status(200).send({ response })

    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.putObra = async (req, res, next) => {
    try {
        const query = 'UPDATE obras set titulo = ?, editora = ?, foto = ? WHERE idObra = ?'
        const result = await mysql.execute(query, 
            [
                req.body.titulo,
                req.body.editora,
                req.body.foto,
                req.params.idObra
            ]);

            const response = {
                mensagem: 'Obra alterada com sucesso',
                obraAlterada: {
                    idObra: result.idObra,
                    titulo: req.body.titulo,
                    editora: req.body.editora,
                    foto: req.body.foto
                }
            }

            return res.status(200).send({ response })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.delObra = async(res,req,next) => {
    try {
        const query = 'DELETE FROM obras WHERE idObra = ?'
        const result = await mysql.execute(query, [req.params.idObra]);
        const response = {
            mensagem: 'Obra removida com sucesso',
        }
        return res.status(200).send({ response })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}


    // const response = { 
        //     id: 1, 
        //     titulo: 'Harry Potter', 
        //     editora: 'Rocco', 
        //     foto: 'https://i.imgur.com/UH3IPXw.jpg', 
        //     autores: 
        //     [
        //         "JK Rowling", 
        //         "OutroAutor"
        //     ] 
        //     }