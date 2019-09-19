//GET, POST
import express, { Application, Request, Response, NextFunction } from 'express';

const Firestore = require('@google-cloud/firestore');
const db = new Firestore({
	projectId: 'reactnativesampleserver',
	keyFile: './ReactNativeSampleServer-b32381165a1b.json'
});
let cityRef = db.collection('City');
const app: Application = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req: Request, res: Response) => {
	res.status(200).json({ name: 'jinho shin' }).send();
});

app.get('/hello', (req: Request, res: Response) => {
	res.status(200).json({ name: 'jinho shin' }).send();
});

app.get('/getNhaTrang', (req: Request, res: Response) => {
	let data = cityRef
		.doc('Nha Trang')
		.get()
		.then((doc: any) => console.log(doc.data().detail))
		.catch((err: Error) => console.log(err));
	let detail = cityRef.doc('Nha Trang').collection('Detail').doc('Hotel').get();
	// .then((doc: any) => console.log(doc.data()))
	// .then((snapshop: any) => {
	// 	snapshop.forEach((doc: any) => doc.data());
	// })
	//.catch((err: Error) => console.log(err));
});
app.get('/getNewYork', (req: Request, res: Response) => {
	let data = cityRef
		.doc('New York')
		.get()
		.then((doc: any) => {
			res.status(200).json(doc.data()).send();
		})
		.catch((err: Error) => {
			console.log(err);
		});
});
app.get('/getParis', (req: Request, res: Response) => {
	let data = cityRef
		.doc('Paris')
		.get()
		.then((doc: any) => {
			res.status(200).json(doc.data()).send();
		})
		.catch((err: Error) => {
			console.log(err);
		});
});
app.get('/getPhuket', (req: Request, res: Response) => {
	let data = cityRef
		.doc('Phuket')
		.get()
		.then((doc: any) => {
			res.status(200).json(doc.data()).send();
		})
		.catch((err: Error) => {
			console.log(err);
		});
});

export default app;
