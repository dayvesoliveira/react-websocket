/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { UserType } from '../models/UserType';
import UserApi from '../services/users';

export function useUser() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [newUser, setNewUser] = useState<UserType>();

  /**
   *
   */
  const fetchMessages = useCallback(async () => {
    try {
      const response = await UserApi.get();
      if (response) {
        const users: UserType[] = await response.json();
        setUsers(users);
      }
    } catch (e) {
      setUsers(users);
      console.error(e);
    }
  }, [setUsers]);

  /**
   *
   * @returns
   */
  const disconnect = () => UserApi.disconnect();

  /**
   *
   */
  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  /**
   *
   */
  useEffect(() => {
    UserApi.socket({
      callback: (message: UserType) => {
        setNewUser(message);
      },
    });
  }, []);

  /**
   *
   */
  useEffect(() => {
    if (!newUser) return;

    setUsers([...users, newUser]);
  }, [newUser]);

  return { users, disconnect };
}
