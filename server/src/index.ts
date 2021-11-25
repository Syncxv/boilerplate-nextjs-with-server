import express from 'express'
const PORT = 8000
const main = async () => {
    const app = express()
    app.listen(PORT, () =>
        console.log(`listening on port ${PORT} url: http://localhost:${PORT}`)
    )
}

main().catch(err => console.error(err))
