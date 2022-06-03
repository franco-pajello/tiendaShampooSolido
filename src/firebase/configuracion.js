import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAS4dvEO4rL2AA_JMGDsX_Jky7quoFskmo",
  authDomain: "ecomerce-shampoosolido-r.firebaseapp.com",
  projectId: "ecomerce-shampoosolido-r",
  storageBucket: "ecomerce-shampoosolido-r.appspot.com",
  messagingSenderId: "543089219311",
  appId: "1:543089219311:web:9e85c1070b3327c284ed1a"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){

return app


}