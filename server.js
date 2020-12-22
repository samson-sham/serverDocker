const fastify = require('fastify')();
const PORT = 8964;

fastify.register(require('fastify-cors'), { 
    origin: true
});

fastify.register(require('fastify-static'), {
    "root": "/root/"
});

// Specifying 0.0.0.0 to allow external access other than from 127.0.0.1
fastify.listen(PORT, '0.0.0.0', (err, address) => {
    if (err) return console.log("ERROR:", err);
    console.log("Server listening:", address);
});