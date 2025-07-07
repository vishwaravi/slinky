import { nanoid } from "nanoid"
import Url from "../models/Url.js";

const shortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    console.log(originalUrl)
    const shortUrl = nanoid(10);

    const expireTime = 7 * 24 * 60 * 60 * 1000; // 7 days
    const url = new Url({ originalUrl, shortUrl, expiresAt: new Date(Date.now() + expireTime) })

    await url.save();
    res.status(201).json({
      url: shortUrl
    })
  } catch (err) {
    res.status(500).json({
      status: "server error"
    })
  }
}

const getUrlById = async (req, res) => {
  try {
    const url = await Url.findOne({
      shortUrl:req.params.uri
    })
    res.redirect(url.originalUrl)
  } catch (err) {
    res.status(404).json({
      status: "url Expired"
    })
  }
}

export { shortUrl, getUrlById }