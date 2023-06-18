import 'dotenv/config'
import express from 'express'

const app = express()

app.use(express.json())
app.use(function onError (_err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log(_err)
    return res.status(500).json({ msg: _err.message })
})

export { app }