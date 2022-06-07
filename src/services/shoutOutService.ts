import axios from "axios";
import ShoutOut from "../Models/shoutOut";

const useURL = process.env.REACT_APP_API_URL || "";

export const getAllShoutouts = (): Promise<ShoutOut[]> => {
  return axios.get(`${useURL}`).then((res) => res.data);
};

export const postNewShoutOut = (so: ShoutOut): Promise<ShoutOut> => {
  return axios.post(`${useURL}`, so).then((res) => res.data);
};
