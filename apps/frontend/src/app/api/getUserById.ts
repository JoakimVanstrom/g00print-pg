import { UserInterface } from "@g00print-ab/g00print-lib";
import axios from "axios";




const getUser = async (id: string, token: string) => {
  // const prod = process.env.PRODUCTION_IP;
  const dev = 'localhost'
  const prod = '68.183.32.241'
    try {
      const response = await axios.get(`http://${prod}:3333/api/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  export default getUser;