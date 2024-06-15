const express = require("express");

const {
  deleteArticle,
  getArticle,
  postArticle,
  putArticle,
  deleteVideos,
  patchVideos,
  postVideos,
  getVideos,
} = require("../controller/mental.controller");

const router = express.Router();

router.get("/article", getArticle);
router.post("/article", postArticle);
router.patch("/article/:id", putArticle);
router.delete("/article/:id", deleteArticle);

router.get("/video", getVideos);
router.post("/video", postVideos);
router.patch("/video/:id", patchVideos);
router.delete("/video/:id", deleteVideos);

module.exports = router;
