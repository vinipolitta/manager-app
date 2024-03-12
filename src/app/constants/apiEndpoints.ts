import { environment } from "src/environments/environment";

const API_URL = environment.apiUrl;


export const apiEndpoints = {
  AuthEndpoint: {
    login: `${API_URL}/public/login`
  }
}
