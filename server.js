import { fastify } from 'fastify';
// import { DatabaseMamory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js';

const server = fastify();

// const database = new DatabaseMamory();
const database = new DatabasePostgres();

server.post('/videos', async (request, reply) => {
    const { title, description, duration } = request.body;

    await database.create({
        title: title,
        description: description,
        duration,
    });

    return reply.status(201).send();
});

server.get('/videos', async (request, reply) => {
    const search = request.query.search;

    const videos = await database.list(search);

    return reply.send(videos);
});

server.put('/videos/:id', async (request, reply) => {
    const videoId = request.params.id;
    const { title, description, duration } = request.body;

    await database.update(videoId, {
        title: title,
        description,
        duration,
    });

    return reply.status(204).send();
});

server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id;

    database.delete(videoId);

    return reply.status(204).send();
});

server.listen({
    port: process.env.port ?? 3333,
});



