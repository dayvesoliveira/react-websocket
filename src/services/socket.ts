import { io } from 'socket.io-client';

// TODO: CASO PRECISE PASSAR UM TOKEN PARA VALIDAR NO SERVIDOR
// const config = {
//   auth: (cb: (value: any) => void) => {
//     cb(localStorage.getItem('token'));
//   },
// };

const socket = io(`${process.env.REACT_APP_SOCKET}`);

export default socket;
