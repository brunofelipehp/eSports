import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient({
  log: ['query']
});

app.get('/games', async(request, response) => {
  const games = await prisma.game.findMany();

  return response.json(games);
});

app.post('/ads', (request, response) => {
  return response.status(201).json([]);
})


app.get('/games/:id/ads', (request, response) => {
  return response.json([
    {id: 1, name: 'anúncio 1'},
    {id: 2, name: 'anúncio 2'},
    {id: 3, name: 'anúncio 3'},
  ])
})


app.get('/ads/:id/discord', (request, response) => {
 // const adId = request.params.id;
    return response.json([])
})

app.listen(3333)