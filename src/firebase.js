import { settings } from './conf';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: settings.API_KEY,
    authDomain: settings.AUTH_DOMAIN,
    projectId: settings.PROJECTID,
    storageBucket: settings.STORAGE_BUCKET,
    messagingSenderId: settings.MESSAGING_SENDER_ID,
    appId: settings.APP_ID,
  };

    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    export default app;