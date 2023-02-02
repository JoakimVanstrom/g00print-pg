import { connect } from '@g00-print/g00print-lib'
import app from './app';


const port = process.env.PORT_API || 3333;





connect.sync().then(() => {
    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}/api`);
    });
});
// const server = app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}/api`);
// });
// server.on('error', console.error);
