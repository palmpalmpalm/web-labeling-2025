import { atom } from "jotai";

export interface DataItem {
  id: string;
  title: string;
  url: string;
  coordinateX: number;
  coordinateY: number;
  type: string;
  dataSetId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserData {
  id: string;
  userId: string;
  dataId: string;
  isLabelled: boolean;
  answers: string[];
}

export interface RedeemCode {
  code: string;
  userId: string;
  createdAt: Date;
}

export const dataAtom = atom<DataItem | undefined>(undefined);

export const unlabelledDataAtom = atom<DataItem[]>([]);
export const labelledDataAtom = atom<DataItem[]>([]);
