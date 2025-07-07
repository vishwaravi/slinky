import { Router } from "express";
import { shortUrl,getUrlById } from "../controllers/UrlController.js";
const urlRouter = Router();

urlRouter.post('/short', shortUrl)
urlRouter.get('/:uri',getUrlById)

export default urlRouter