// category functions
const categoryCreate = async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Category created!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const categoryGetById = async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Category fetch successfully!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const categoryDelete = async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Category deleted!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const categoryUpdate = async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Category Updated!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
}

module.exports = { categoryCreate, categoryGetById, categoryDelete, categoryUpdate }