import express from 'express'
import cors from 'cors';
import { router } from './src/routes';
import { errorMiddleware } from './src/middlewares/erroMiddleware';
const port = process.env.PORT || 5000;

const app = express()


app.use(express.json())

app.use(cors())


app.use(router)

app.use(errorMiddleware)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
})