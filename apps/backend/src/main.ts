import { connect } from '@g00print-ab/g00print-lib';
import app from './app';


const port = process.env.PORT_API || 3333;
const host = '68.183.32.241' || 'localhost';




connect.sync().then(() => {
    app.listen(port, () => {
        console.log(`Listening at http://${host}:${port}/api`);
    });
});
