import { UserInterface } from "@g00-print/g00print-lib";
import axios from "axios";



const getUsers = async (): Promise<UserInterface[]> => {

    const PRODUCTION_IP = "68.183.32.241"
    const DEVELOPMENT_IP = "localhost"

    const response = await axios.get(`http://${PRODUCTION_IP}:3333/api/users`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
    return response;
};

export default getUsers;
