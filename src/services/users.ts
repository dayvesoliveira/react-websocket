import { Actions } from '../enum/actions';
import { UserType } from '../models/UserType';
import http from './http';
import socket from './socket';

type SocketCallback = {
  callback?: (users: UserType) => void;
};

const UsersApi = {
  get: () => {
    return http.get('/users');
  },

  socket: (params: SocketCallback) => {
    socket.on(Actions.GET_USERS, (user: UserType) => {
      params?.callback?.(user);
    });
  },

  disconnect: () => socket.disconnect(),
};

export default UsersApi;
