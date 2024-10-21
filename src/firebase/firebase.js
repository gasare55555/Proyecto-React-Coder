import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOIoaZHOOMcTdKhtWvP29w3zYdfV6F78I",
  authDomain: "proyecto-react-coder-34dc7.firebaseapp.com",
  projectId: "proyecto-react-coder-34dc7",
  storageBucket: "proyecto-react-coder-34dc7.appspot.com",
  messagingSenderId: "1033665742311",
  appId: "1:1033665742311:web:d3182c9b8dc22ea08c2942"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//enviar un nuevo documento a cualquier colección
export async function sendDoc(obj, colPath) {
  const colRef = collection(db, colPath);

  try {
    const docRef = await addDoc(colRef, obj);
    console.log("Nuevo item ingresado", docRef.id);
  } catch (error) {
    console.error("Error al agregar el item", error);
  }
}



