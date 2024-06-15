const express = require("express");

const router = express.Router();

const {
  deleteArticle,
  deleteVideos,
  getArticle,
  getVideos,
  patchVideos,
  putArticle,
  postArticle,
  postVideos,
} = require("../controller/health.controller");

router.get("/article", getArticle);
router.post("/article", postArticle);
router.patch("/article/:id", putArticle);
router.delete("/article/:id", deleteArticle);

router.get("/video", getVideos);
router.post("/video", postVideos);
router.patch("/video/:id", patchVideos);
router.delete("/video/:id", deleteVideos);

module.exports = router;
