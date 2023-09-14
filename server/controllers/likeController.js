const Entry = require('../controllers/libraryController');



const incrementLikes = async (req, res) => {
    const { entryId } = req.body;
    

    try {
        await Entry.updateOne({ _id: entryId }, { $inc: { likes: 1 } });

        res.json({ message: 'Likes incremented' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    incrementLikes
};
