const express = require("express");
const router = express.Router();

const postsConrtoller = require("../controllers/posts_controller");

router.get("/posts", postsConrtoller.posts);

module.exports = router;
