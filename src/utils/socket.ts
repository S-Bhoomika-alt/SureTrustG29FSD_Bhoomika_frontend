

import {io } from 'socket.io-client'
export const socket = io(
  "suretrustg29fsd-bhoomika-frontend.onrender.com",
  {
    transports: ["polling", "websocket"],
    autoConnect: true,
  }
);