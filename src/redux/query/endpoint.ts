import { TOKEN_TYPE } from "@/constants/variable";
import Cookies from "js-cookie";



export const HEADER = {
  defaultHeader: () => ({
    accept: 'application/json',
  }),
  refreshTokenHeader: () => {
    const token = Cookies.get(TOKEN_TYPE.REFRESH_TOKEN);
    return {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }
  },
  protectedHeader: () => {
    const token = Cookies.get(TOKEN_TYPE.ACCESS_TOKEN);
    return {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }
  },
  protectedMutipartHeader: () => {
    const token = Cookies.get(TOKEN_TYPE.ACCESS_TOKEN);
    return {
      accept: 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    }
  },
  codeHeader: () => {
    const token = Cookies.get(TOKEN_TYPE.CODE_TOKEN);
    return {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }
  }
}

export const endPoint = {
  auth: {
    loginGoogle: () => ({
      url: "api/v1/auth/login",
      method: "POST",
      headers: HEADER.defaultHeader(),
    }),
    register: () => ({
      url: "api/v1/auth/register",
      method: "POST",
      headers: HEADER.defaultHeader(),
    }),
    acceptCode: () => ({
      url: "api/v1/auth/accept-code",
      method: "POST",
      headers: HEADER.codeHeader(),
    }),
    refreshToken: () => ({
      url: "api/v1/auth/refresh-token",
      method: "POST",
      headers: HEADER.refreshTokenHeader(),
    }),
  },
  videoCall: {
    createConnection: () => ({
      url: "api/v1/create-connection",
      method: "POST",
      headers: HEADER.defaultHeader(),
    }),
    getAllConnection: () => ({
      url: "api/v1/get-connection-socket",
      method: "GET",
      headers: HEADER.defaultHeader(),
    }),
    connectionGlobalChanel: () => ({
      url: "api/v1/connect-global-chanel",
      method: "GET",
      headers: HEADER.defaultHeader(),
    })
  }
}