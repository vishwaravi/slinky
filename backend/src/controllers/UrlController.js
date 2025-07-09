import { nanoid } from "nanoid"
import Url from "../models/Url.js";
import { fileURLToPath } from 'url'
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const shortUrl = async (req, res) => {
  const hashLength = 7;


  try {
    const { originalUrl } = req.body;
    const shortUrl = nanoid(hashLength);

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
      shortUrl: req.params.uri
    })
    res.redirect(url.originalUrl)
  } catch (err) {
    res.status(404).sendFile(path.join(__dirname,'../../public','404.html'))
  }
}

export { shortUrl, getUrlById }