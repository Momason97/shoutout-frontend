import axios from "axios";
import ShoutOut, { User } from "../Models/shoutOut";

const useURL = process.env.REACT_APP_API_URL || "";

export const getAllShoutouts = (): Promise<ShoutOut[]> => {
  return axios.get(`${useURL}`).then((res) => res.data);
};

export const getAllShoutoutsToUser = (user: string): Promise<ShoutOut[]> => {
  return axios
    .get(`${useURL}/to/${encodeURIComponent(user)}`)
    .then((res) => res.data);
};

export const getAllShoutoutsToFromMe = (me: string): Promise<ShoutOut[]> => {
  return axios
    .get(`${useURL}/me/${encodeURIComponent(me)}`)
    .then((res) => res.data);
};

export const postNewShoutOut = (so: ShoutOut): Promise<ShoutOut> => {
  return axios.post(`${useURL}`, so).then((res) => res.data);
};

export const deleteShoutout = (id: string): Promise<void> => {
  return axios.delete(`${useURL}/${id}`);
};

export const upVoteShoutOut = (user: User, id: string): Promise<void> => {
  return axios.put(`${useURL}/upvote/${id}`, user).then((res) => res.data);
};
