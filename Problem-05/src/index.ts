import express, { Express, Request, Response } from 'express';
import itemsRoutes from './routes/items.routes';

const app: Express = express();
const port = 3000;

app.use(express.json());

app.use('/items', itemsRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;