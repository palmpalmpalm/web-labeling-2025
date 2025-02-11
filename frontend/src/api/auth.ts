import api from "./api";

interface RegisterData {
  username: string;
  password: string;
}

export const register = ({ username, password }: RegisterData) => {
  return api.post("/auth/map", {
    username,
    password,
  });
};

export const login = ({ username, password }: RegisterData) => {
  return api.post("/auth/login", {
    username,
    password,
  });
};
