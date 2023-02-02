import * as express from 'express';
// import Validations from '@g00-print/g00print-lib';
import userRouter from './routes/users';
import * as cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());
// app.use(/api/users, routes.users)


app.use(userRouter)


export default app;
