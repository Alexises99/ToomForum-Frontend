/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { RequestHandler, Router } from "express"
import { Image } from "../models/image"
import { type UploadedFile} from 'express-fileupload'

const imageRouter = Router()

imageRouter.post('/', (async (req, res, next) => {
  if (!req.files) {
    res.status(400).send('No files were uploaded')
  }
  const image = req.files?.profileImage as UploadedFile
  try {
    if (image) {
      const imageSaved = await Image.create({name: image.name, data: image.data})
      res.status(200).json({imageId: imageSaved.id})
    }
  } catch (err) {
    next(err)
  }
}) as RequestHandler)

imageRouter.get('/:id', (async (req, res) => {
  const image = await Image.findByPk(req.params.id)
  if (image) {
    res.status(200).end(image.data)
  } else {
    res.status(404).end()
  }
}) as RequestHandler)

export default imageRouter