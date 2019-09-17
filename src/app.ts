//GET, POST
import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req: Request, res: Response) => {
	res.status(200).json({ name: 'jinho shin' }).send();
});

app.get('/hello', (req: Request, res: Response) => {
	res.status(200).json({ name: 'jinho shin' }).send();
});

export default app;
