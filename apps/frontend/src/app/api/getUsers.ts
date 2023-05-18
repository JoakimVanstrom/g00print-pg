import { UserInterface } from "@g00print-ab/g00print-lib";
import axios from "axios";






const getUsers = async (): Promise<UserInterface[]> => {

    // const prod = process.env.PRODUCTION_IP;
    const dev = 'localhost';

    const response = await axios.get(`http://${dev}:3333/api/users`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
    return response;
};

export default getUsers;
