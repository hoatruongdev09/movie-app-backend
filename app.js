import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import './utils/database.js'

import indexRouter from './routes/index'
import authRouter from './routes/auth.js'

const port = process.env.PORT || 8080

const app = express();

/// MIDDLEWARES
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/// ROUTES
app.use('/', indexRouter);
app.use('/api/v1/auth', authRouter)


app.listen(port, () => { console.log(`app running on port: ${port}`) })

export default app
