import express from 'express'
import {json} from 'body-parser'

import jargon from './routes/v1/jargon'

const app = express()

app.use(json)
app.use('/v1/jargon', jargon)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.info('Jargon API listening on port', port)
})
