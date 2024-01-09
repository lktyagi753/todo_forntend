import axios from "axios";

const Base_Url = "http://localhost:8080/api";

export const display = () => {
   return axios.get(Base_Url+"/task");
}

export const add = (data) => {
    return axios.post(Base_Url+"/add-task", data);
}
export const del = (id) => {
    return axios.delete(Base_Url+`/task/${id}`);
}
export const upd = (id, data) => {
    return axios.put(Base_Url+`/task/${id}`, data);
}