import {Router} from 'express'

const jargon = Router()
export default jargon

jargon.get('/', (req, res) => {
  res.sendStatus(200)
})
