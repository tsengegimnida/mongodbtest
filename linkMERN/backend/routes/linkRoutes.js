const router = require("express").Router();

const linkModel = require("../models/linkModel");

router.post("/api/link", async (req, res) => {
  try {
    const newLink = new linkModel({
      link: req.body.link,
    });
    const saveLink = await newLink.save(res.status(200).json("Link added!"));
  } catch (error) {
    next(error);
  }
});

router.get("/api/link", async (req, res) => {
  try {
    const allLinks = await linkModel.find({});
    res.status(200).json(allLinks);
  } catch (error) {
    next(error);
  }
});

router.put("/api/link/:id", async (req, res) => {
  try {
    const updateLink = await linkModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Link updated!");
  } catch (error) {
    next(error);
  }
});

router.delete("/api/link/:id", async (req, res) => {
  try {
    const deleteLink = await linkModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Link deleted!");
  } catch (error) {
    next(error);
  }
});
module.exports = router;
