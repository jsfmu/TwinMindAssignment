import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD8KWHxSM6tik7NyMTLGnIo6BIlKalDon0',
  authDomain: 'twinmindapp-d8681.firebaseapp.com',
  projectId: 'twinmindapp-d8681',
  storageBucket: 'twinmindapp-d8681.appspot.com',
  messagingSenderId: '815068404421',
  appId: '1:815068404421:web:0c0c0c0c0c0c0c0c0c0c0c0c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

export { app, auth };