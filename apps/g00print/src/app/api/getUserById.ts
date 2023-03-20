import { UserInterface } from "@g00-print/g00print-lib";
import axios from "axios";



const getUser = async (id: string, token: string) => {
    try {
      const response = await axios.get(`http://localhost:3333/api/user/${id}`, {
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