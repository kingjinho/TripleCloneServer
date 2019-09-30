//GET, POST
import express, { Application, Request, Response, NextFunction } from "express";
import City from "./models/City";
import { db } from "./util/connection";
import Hotel from "./models/Hotel";
import { DocumentReference, DocumentSnapshot } from "@google-cloud/firestore";

let cityRef = db.collection("City");
const app: Application = express();
app.set("port", process.env.PORT || 3000);

app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ name: "jinho shin" })
    .send();
});

app.get("/hello", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ name: "jinho shin" })
    .send();
});

app.get("/NhaTrang", (req: Request, res: Response) => {
  let result: City = new City();
  Promise.all([
    cityRef.doc("Nha Trang").get()
    //cityRef
    //  .doc("Nha Trang")
    //  .collection("Detail")
    //  .get()
  ])
    .then(
      (rawData: DocumentSnapshot[]) => {
        rawData.forEach((snapshot: FirebaseFirestore.DocumentData) => {
          let data = snapshot.data();
          result.setCity(data.city);
          result.setCountry(data.country);
          result.setCountryCode(data.city);
          data.cityCode.forEach((code: string) => result.addCityCode(code));
          let detail: Array<DocumentReference> = <Array<DocumentReference>>(
            data.detail
          );
          detail.forEach((element: DocumentReference) => {});
          console.log("====================================");
          console.log(detail);
          console.log("====================================");
        });

        res
          .status(200)
          .json(result)
          .send();
      },
      () =>
        res
          .status(999)
          .json({ error: "somethign has happened, try again" })
          .send()
    )
    .catch((err: Error) => {
      console.log(err);
      res
        .status(100)
        .json(err)
        .send();
    });
});
app.get("/NewYork", (req: Request, res: Response) => {
  let data: any = cityRef
    .doc("New York")
    .get()
    .then((doc: any) => {
      res
        .status(200)
        .json(doc.data())
        .send();
    })
    .catch((err: Error) => {
      console.log(err);
    });
});
app.get("/Paris", (req: Request, res: Response) => {
  let data: any = cityRef
    .doc("Paris")
    .get()
    .then((doc: any) => {
      res
        .status(200)
        .json(doc.data())
        .send();
    })
    .catch((err: Error) => {
      console.log(err);
    });
});
app.get("/Phuket", (req: Request, res: Response) => {
  let data: any = cityRef
    .doc("Phuket")
    .get()
    .then((doc: any) => {
      res
        .status(200)
        .json(doc.data())
        .send();
    })
    .catch((err: Error) => {
      console.log(err);
    });
});

export default app;
