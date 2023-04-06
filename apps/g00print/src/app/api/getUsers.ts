import { UserInterface } from "@g00-print/g00print-lib";
import axios from "axios";



const getUsers = async (): Promise<UserInterface[]> => {
    const response = await axios.get(`http://${process.env.PRODUCTION_IP}:${process.env.APIPORT}/api/users`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
    return response;
};

export default getUsers;
