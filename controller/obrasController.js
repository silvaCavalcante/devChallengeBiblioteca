exports.getObras = (req, res, next) => {
    try {
        const response = { 
            id: 1, 
            titulo: 'Harry Potter', 
            editora: 'Rocco', 
            foto: 'https://i.imgur.com/UH3IPXw.jpg', 
            autores: 
            [
                "JK Rowling", 
                "OutroAutor"
            ] 
            }
            return res.status(200).send({response}) 
    } catch (error) {
        return res.status(500).send({ error: error })
    }
};