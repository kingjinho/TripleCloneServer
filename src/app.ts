//GET, POST
import express, { Application, Request, Response, NextFunction } from 'express';
import City from './models/City';
import { Firestore } from '@google-cloud/firestore';
import Hotel from './models/Hotel';

//const Firestore = require('@google-cloud/firestore');
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

app.get('/NhaTrang', (req: Request, res: Response) => {
	let result: City = new City();
	Promise.all([ cityRef.doc('Nha Trang').get(), cityRef.doc('Nha Trang').collection('Detail').doc('Hotel').get() ])
		.then(
			(values: any) => {
				values.forEach((doc: any) => {
					let cityData: any = doc.data();
					if (!cityData.hasOwnProperty('List')) {
						result.setCity(cityData.city);
						result.setCountry(cityData.country);
						result.setCountryCode(cityData.countryCode);
						result.setCityCode(cityData.cityCode);
					} else {
						cityData.List.forEach((element: Hotel) => result.getDetail().getHotel().push(element));
					}
				});
				res.status(200).json(result).send();
			},
			() => res.status(999).json({ error: 'somethign has happened, try again' }).send()
		)
		.catch((err: Error) => res.status(100).json(err).send());
});
app.get('/NewYork', (req: Request, res: Response) => {
	let data: any = cityRef
		.doc('New York')
		.get()
		.then((doc: any) => {
			res.status(200).json(doc.data()).send();
		})
		.catch((err: Error) => {
			console.log(err);
		});
});
app.get('/Paris', (req: Request, res: Response) => {
	let data: any = cityRef
		.doc('Paris')
		.get()
		.then((doc: any) => {
			res.status(200).json(doc.data()).send();
		})
		.catch((err: Error) => {
			console.log(err);
		});
});
app.get('/Phuket', (req: Request, res: Response) => {
	let data: any = cityRef
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
