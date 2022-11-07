const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken");

// Create List
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body);
        try {
            const savedList = await newList.save();
            res.status(201).json(savedList);
        } catch (err) {
            res.status(500).json(err);
        }
    }
})

// Get All List
router.get("/", verify, async (req, res) => {
    try {
        const lists = await List.find().sort({
            createdAt: 'desc'
        });
        res.status(200).json(lists.reverse());
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get Spesific List
router.get("/find/:id", verify, async (req, res) => {
    try {
        const list = await List.findById(req.params.id);
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get Count List
router.get("/count", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const count = await List.countDocuments();
            res.status(200).json(count);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed to do this!");
    }
})

// Delete List
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await List.findByIdAndDelete(req.params.id);
            res.status(200).json("The list has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
})

// Update Lists
router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedList = await List.findByIdAndUpdate(
                req.params.id, {
                    $set: req.body,
                }, {
                    new: true
                }
            );
            res.status(200).json(updatedList);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
});

module.exports = router;