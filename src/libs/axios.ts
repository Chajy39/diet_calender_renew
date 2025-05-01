import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosResponseTransformer,
} from "axios";

export const OK = "OK";

export type Response = {
  ok: boolean;
  status: number;
  msg: string;
  data: any;
};
export default class Axios {
  // Here you can use your server URL

  private static readonly baseURL: string =
    process.env.REACT_APP_API_URL || "http://localhost:3000";

  private static async buildHeader(obj = {}) {
    // let token = await AsyncLocalStorage.getItem("userToken");
    // let refreshToken = await AsyncLocalStorage.getItem("userRefreshToken");
    // let token = getRecoil(authState).token;
    const refreshToken = localStorage.getItem("refresh_token");

    const header: any = {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: token,
      "refresh-token": refreshToken,
    };

    Object.assign(header, obj);

    return header;
  }

  private static transformResponse(
    input: string
  ): AxiosResponseTransformer | AxiosResponseTransformer[] {
    return JSON.parse(input);
  }

  public static async client(header = {}): Promise<AxiosInstance> {
    // cancelToken and source declaration
    const cancelTokenSource = axios.CancelToken.source();
    const headers = await this.buildHeader(header);
    // axios client config
    const config: any = {
      baseURL: this.baseURL,
      cancelToken: cancelTokenSource.token,
      headers,
      timeout: 5000,
    };

    // axios client response transformer
    config.transformResponse = [
      (data: unknown) => {
        return data && typeof data === "string"
          ? this.transformResponse(data)
          : data;
      },
    ];
    const axiosInstance = axios.create(config);
    axiosInstance.interceptors.response.use(
      async (response) => {
        //   let token = response.headers["refreshed-token"];
        //   if (token) {
        //     await AsyncLocalStorage.setItem("token", token);
        //     //console.log("newtoken", token);
        //   }
        return response;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
    // create axios client
    return axiosInstance;
  }

  /**
   *
   * @param url
   * @returns
   */
  public static async get<T>(
    url: string,
    params?: any
  ): Promise<AxiosResponse> {
    try {
      const result = await (await this.client()).get<T>(url, params);

      return result;
    } catch (err) {
      const oErr: any = err;
      const { response } = oErr;

      console.log("response", response);
      if (response && response.data) {
        //let oResponse = response.data;
        if (response && response.status === 401) {
          // loginOut();
        }
      }

      if (response) {
        return response;
      }
      return oErr;
    }
  }

  /**
   *
   * @param url
   * @param payload
   * @returns
   */
  public static async post<T>(url: string, data?: any): Promise<AxiosResponse> {
    const fResponse: any = {
      onDownloadProgress: (progressEvent: any): void => {},
    };

    try {
      const result = await (await this.client()).post<T>(url, data, fResponse);
      return result;
    } catch (err) {
      const oErr: any = err;
      const { response } = oErr;

      console.log("response", response);
      if (response && response.data) {
        //let oResponse = response.data;
        if (response && response.status === 401) {
          // loginOut();
        }
      }

      if (response) {
        return response;
      }
      if (oErr.code === "ECONNABORTED") {
      }
      return oErr;
    }
  }

  /**
   *
   * @param url
   * @param payload
   * @returns
   */
  //   public static async multipartPost<T>(
  //     url: string,
  //     data?: any,
  //   ): Promise<AxiosResponse> {
  //     var fResponse: any = {
  //       onDownloadProgress: (progressEvent: any): void => {},
  //     };

  //     try {
  //         const result = (await (
  //         await this.client({
  //           "Content-Type": "multipart/form-data",
  //         })
  //       ).post<T>(url, data, fResponse)) as any;
  //       return result;
  //     } catch (err) {
  //         const oErr: any = err;
  //       const { response } = oErr;
  //       if (response) {
  //         return response;
  //       }
  //       if (oErr.code === "ECONNABORTED") {
  //       }
  //       return oErr;
  //     }
  //   }

  public static async patch<T>(
    url: string,
    data?: any
  ): Promise<AxiosResponse> {
    try {
      const result = await (await this.client()).patch<T>(url, data);
      return result;
    } catch (err) {
      const oErr: any = err;
      const { response } = oErr;
      if (response) {
        return response;
      }
      return oErr;
    }
  }

  public static async put<T>(url: string, data?: any): Promise<AxiosResponse> {
    try {
      const result = await (await this.client()).put<T>(url, data);
      return result;
    } catch (err) {
      const oErr: any = err;
      const { response } = oErr;
      if (response) {
        return response;
      }
      return oErr;
    }
  }

  public static async delete<T>(url: string): Promise<AxiosResponse> {
    try {
      const result = await (await this.client()).delete<T>(url);
      return result;
    } catch (err) {
      const oErr: any = err;
      const { response } = oErr;
      if (response) {
        return response;
      }
      return oErr;
    }
  }
}
