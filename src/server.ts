import { app } from "./app"
const port = process.env.PORT || 3000

const start = async () => {
    try {
        await app.listen(port, () => {
            console.log(`servidor online ${port}`)
        })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()