import { Firestore } from '@google-cloud/firestore';
export const db: Firestore = new Firestore({
	projectId: 'reactnativesampleserver',
	keyFile: './ReactNativeSampleServer-b32381165a1b.json'
});

let a = 'a';
