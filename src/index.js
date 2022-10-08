import * as express from 'express'
import * as cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cookieParser())

import userController from './modules/user/userController'
import postController from './modules/post/postController'

app.use('/user', userController)
app.use('/post', postController)


/*

app.get('/', (req, res) => {
    res.send('GET /')
})

app.post('/', (req, res) => {
    res.status(201).send('POST /')
})

app.put('/', (req, res) => {
    res.send('PUT /')
})

app.delete('/', (req, res) => {
    res.send('DELETE /')
})

app.patch('/', (req, res) => {
    res.send('PATCH /')
})
*/

app.listen(3000, () => console.log(`ONLINE http://localhost:3000`))