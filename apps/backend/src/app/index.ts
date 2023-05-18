import express from 'express';
// import Validations from '@g00-print/g00print-lib';
import userRouter from './routes/users';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors());

app.get('/set-cookie', (req, res) => {
    res.cookie('cookie', req.body.token, { httpOnly: true, secure: true, maxAge: 1000 * 60 * 60 * 24 });
    res.send('cookie set');
});

app.get('/get-cookie', (req, res) => {
    const cookie = req.cookies.cookie;
    if (cookie) {
        res.send('cookie exists');
    } else {
        res.send('cookie does not exist');
    }
});

app.get('/delete-cookie', (req, res) => {
    res.clearCookie('cookie');
    res.send('cookie deleted');
});


app.use(userRouter)


export default app;
