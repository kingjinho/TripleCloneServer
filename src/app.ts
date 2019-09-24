//GET, POST
import express, { Application, Request, Response, NextFunction } from 'express';
import City from './models/City';

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

app.get('/NhaTrang', (req: Request, res: Response) => {
	let result: City = new City();
	Promise.all([ cityRef.doc('Nha Trang').get(), cityRef.doc('Nha Trang').collection('Detail').doc('Hotel').get() ])
		.then((values: any) => {
			values.forEach((doc: any) => {
				console.log(doc.data());
				let cityData: any = doc.data();
				if (!cityData.hasOwnProperty('List')) {
					result.setCity(cityData.city);
					result.setCountry(cityData.country);
					result.setCountryCode(cityData.countryCode);
					result.setCityCode(cityData.cityCode);
				} else {
					result.getDetail();
				}
				// if (cityData.hasOwnProperty('cityCode')) {
				// 	console.log(cityData.hasOwnProperty('cityCode'));
				// 	console.log(num);
				// 	num++;
				// 	cityData.cityCode.forEach((code: any) => result.cityCode.push(code));
				// }
				// if (cityData.hasOwnProperty('cityCode'))
				// 	cityData.cityCode.forEach((cityCode: string) => result.cityCode.push(cityCode));
				// if (cityData.city !== undefined) result.city = cityData.city;
				// if (cityData.country !== undefined) result.country = cityData.country;
				// if (cityData.countryCode !== undefined) result.cityCode = cityData.cityCode;
			});
		})
		.catch((err: Error) => console.log(err));
	// let data = cityRef
	// 	.doc('Nha Trang')
	// 	.get()
	// 	.then((doc: any) => {
	// 		if(!doc.exists){

	// 		} else {

	// 		}
	// 		console.log(doc.data().detail)})
	// 	.catch((err: Error) => console.log(err));
	// let detail = cityRef.doc('Nha Trang').collection('Detail').doc('Hotel').get();
	// .then((doc: any) => console.log(doc.data()))
	// .then((snapshop: any) => {
	// 	snapshop.forEach((doc: any) => doc.data());
	// })
	//.catch((err: Error) => console.log(err));
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
