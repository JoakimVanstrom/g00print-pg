import { UserInterface } from "@g00print-ab/g00print-lib";
import axios from "axios";






const getUsers = async (): Promise<UserInterface[]> => {

   

    const dev = 'localhost'
    const prod = '68.183.32.241'

    const response = await axios.get(`http://${prod}:3333/api/users`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
    return response;
};

export default getUsers;
