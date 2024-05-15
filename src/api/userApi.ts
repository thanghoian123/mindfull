// src/api/userApi.ts
import { apiGet, apiPost, apiPut, apiDelete } from './api';

interface User {
  id: number;
  name: string;
  email: string;
}

export const fetchUsers = (): Promise<User[]> => {
  return apiGet<User[]>('/users');
};

export const fetchUserById = (id: number): Promise<User> => {
  return apiGet<User>(`/users/${id}`);
};

export const createUser = (user: Omit<User, 'id'>): Promise<User> => {
  return apiPost<User>('/users', user);
};

export const updateUser = (id: number, user: Partial<User>): Promise<User> => {
  return apiPut<User>(`/users/${id}`, user);
};

export const deleteUser = (id: number): Promise<void> => {
  return apiDelete<void>(`/users/${id}`);
};
