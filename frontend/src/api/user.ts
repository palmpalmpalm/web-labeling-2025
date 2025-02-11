import api from "./api";

interface UserData {
  username: string;
}

export const getUser = (userId: string) => {
  return api.get(`/users/${userId}`);
};

export const updateUser = (userId: string, userData: UserData) => {
  return api.patch(`/users/${userId}`, userData);
};

export const deleteUser = (userId: string) => {
  return api.delete(`/users/${userId}`);
};

export const getLabelledDataByUsername = (username: string) => {
  return api.get(`/users/labelled-data/${username}`);
};

export const getUnlabelledDataByUsername = (username: string) => {
  return api.get(`/users/unlabelled-data/${username}`);
};

export const getMe = () => {
  return api.get(`/users/me`);
};

export const getRedeemCode = (userId: string) => {
  return api.get(`/users/redeem-code/${userId}`);
};
