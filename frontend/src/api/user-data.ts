import api from "./api";

export const markAsLabelled = (
  answers: string[],
  userId: string,
  dataId: string
) => {
  return api.post(`/user-data/mark-as-labelled`, {
    answers,
    userId,
    dataId,
  });
};

export const changeAnswer = (
  answers: string[],
  userId: string,
  dataId: string
) => {
  return api.post(`/user-data/update-answer`, {
    answers,
    userId,
    dataId,
  });
};

export const getUserDataByUserIdAndDataId = (
  userId: string,
  dataId: string
) => {
  return api.post(`/user-data/user/data`, { userId, dataId });
};
