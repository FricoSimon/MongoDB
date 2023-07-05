const postCreate = async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Post created!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const postGetById = async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Post fetch successfully!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const postDelete = async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Post deleted!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const postUpdate = async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Put Updated!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
}

module.exports = { postCreate, postGetById, postDelete, postUpdate }