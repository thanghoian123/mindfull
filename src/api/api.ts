// src/api/api.ts
import axiosInstance from './axiosInstance';

export const apiGet = async <T>(url: string, params?: object): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(url, { params });
    return response.data;
  } catch (error) {
    // Handle error
    throw error;
  }
};

export const apiPost = async <T>(url: string, data: object): Promise<T> => {
  try {
    const response = await axiosInstance.post<T>(url, data);
    return response.data;
  } catch (error) {
    // Handle error
    throw error;
  }
};

export const apiPut = async <T>(url: string, data: object): Promise<T> => {
  try {
    const response = await axiosInstance.put<T>(url, data);
    return response.data;
  } catch (error) {
    // Handle error
    throw error;
  }
};

export const apiDelete = async <T>(url: string): Promise<T> => {
  try {
    const response = await axiosInstance.delete<T>(url);
    return response.data;
  } catch (error) {
    // Handle error
    throw error;
  }
};
