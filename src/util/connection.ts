import { Firestore } from "@google-cloud/firestore";
export const db: Firestore = new Firestore({
  projectId: "reactnativesampleserver",
  keyFile: "./ReactNativeSampleServer-d55adeb7aa97.json"
});
