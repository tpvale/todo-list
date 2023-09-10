const getAll = (req, res) => {
    return res.status(200).json({message: 'Controller running'})
};

module.exports = {
    getAll
};