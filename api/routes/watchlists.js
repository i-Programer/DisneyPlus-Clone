const router = require("express").Router();
const Watchlist = require("../models/Watchlist");
const verify = require("../verifyToken");

// Create Watchlist
router.post("/", verify, async (req, res) => {
    const newWatchlist = new Watchlist(req.body);
    try {
        const savedWatchlist = await newWatchlist.save();
        res.status(201).json(savedWatchlist);
    } catch(err) {
        res.status(500).json(err);
    }
})

// Get All Watchlist
router.get("/:userId", verify, async (req, res) => {
    try {
        const watchlists = await Watchlist.find({
            "userId": req.params.userId
        });
        res.status(200).json(watchlists);
    } catch(err) {
        res.status(500).json(err);
    }
})

// Delete Watchlist
router.delete("/:id", verify, async (req, res) => {
    try {
        await Watchlist.findByIdAndDelete(req.params.id);
        res.status(200).json("The watchlist has been deleted...");
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;