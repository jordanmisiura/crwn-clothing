import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDdJNwhOCvb8OrCc6hMGYEgyabl9pnPOus",
    authDomain: "crwn-db-1ac70.firebaseapp.com",
    databaseURL: "https://crwn-db-1ac70.firebaseio.com",
    projectId: "crwn-db-1ac70",
    storageBucket: "crwn-db-1ac70.appspot.com",
    messagingSenderId: "326239667119",
    appId: "1:326239667119:web:f44c822cad5c1f7f77a55a",
    measurementId: "G-25EXJW544B"
};

export const createUserProfileDocument = async(userAuth, additionalData)=>{
    if(!userAuth)  return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData                
            })
        } catch(error) {
            console.log("error creating user with firebase: ", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;