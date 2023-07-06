// comment functions
const commentCreate = async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Comment added!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const commentDelete = async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Comment deleted!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const commentUpdate = async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Comment Updated!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
}

module.exports = { commentCreate, commentDelete, commentUpdate }