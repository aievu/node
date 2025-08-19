import { fastify } from 'fastify';
import { DatabaseMamory } from './database-memory.js'

const server = fastify();

const database = new DatabaseMamory()

server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body;

    database.create({
        title: title,
        description: description,
        duration,
    });

    return reply.status(201).send();
});

server.get('/videos', (request, reply) => {
    const videos = database.list();

    return reply.send(videos);
});

server.put('/videos/:id', () => { return 'Hello node.js'; });

server.delete('/videos/:id', () => { return 'Hello node.js'; });

server.listen({
    port: 3333,
});



