const express = require('express')
const app = express()
const port = process.env.PORT || 9000

app.get('/', (req, res) => {
    console.log('GET /')
    res.send('Hello World!')
})

app.get('/users', (req, res) => {
    console.log('GET /users')
    res.send([{ id: 1, name: "bradley" }])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
