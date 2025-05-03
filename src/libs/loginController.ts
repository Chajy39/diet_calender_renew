import Axios, { Response } from "./axios";

const loginController = {
  login: async (data: { id: string; password: string }): Promise<Response> => {
    try {
      const sUrl = process.env.NEXT_PUBLIC_API_URL + "/login/";

      const response = await Axios.post(sUrl, data);

      return response.data;
    } catch (err) {
      console.error("login error: ", err);

      return {
        code: "1001",
        msg: "login error " + err.toString(),
        data: err.data!,
      };
    }
  },
  checkId: async (data: { id: string }): Promise<Response> => {
    try {
      const sUrl = process.env.NEXT_PUBLIC_API_URL + "/check/";

      const response = await Axios.post(sUrl, data);

      return response.data;
    } catch (err) {
      console.error("checkId error: ", err);

      return {
        code: "1001",
        msg: "checkId error " + err.toString(),
        data: err.data!,
      };
    }
  },
};

export default loginController;
