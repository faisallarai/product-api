import http from 'http';

import app from './app';

const PORT = 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});