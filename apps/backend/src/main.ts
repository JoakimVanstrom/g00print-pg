import { connect } from '@g00print-ab/g00print-lib';
import app from './app';


const port = process.env.PORT_API || 3333;


const prod = '68.183.32.241'
const dev = 'localhost'




connect.sync().then(() => {
    app.listen(port, () => {
        console.log(`Listening at http://${prod}:${port}/api`);
    });
});
