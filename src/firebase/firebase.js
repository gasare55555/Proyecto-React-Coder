import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

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


//obtener toda una colección
export async function getCollection(colPath) {
  const colRef = collection(db, colPath);

  try {
    const querySnapshot = await getDocs(colRef);
    if (querySnapshot.size) {
      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return result;
    } else {
      throw new Error("Colección vacía");
    }
  } catch (error) {
    console.error("Error al obtener la colección: ", error);
  }
}

//filtrar una colección por una propiedad determinada
export async function filterCollection(colPath, property, value) {
  const colRef = collection(db, colPath);
  const q = query(colRef, where(property, "==", value));

  try {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size) {
      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return result;
    } else {
      throw new Error("Colección vacía");
    }
  } catch (error) {
    console.error("Error al obtener la colección: ", error);
  }
}

//obtener un documento
export async function getDocument(colPath, id) {
  const docRef = doc(db, colPath, id);

  try {
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      return {
        id: docSnapshot.id,
        ...docSnapshot.data(),
      }
      
    } else {
      throw new Error("El documento no existe!");
    }
  } catch (error) {
    console.error("Error al obtener el documento: ", error);
  }
}

//Obtener valores específicos de un documento
export function getValues(data, array, property) {
  return data[array].map((object) => object[property]);
}

//enviar un nuevo documento a cualquier colección
export async function sendDocument(obj, colPath) {
  const colRef = collection(db, colPath);

  try {
    const docRef = await addDoc(colRef, obj);
    return docRef;
  } catch (error) {
    console.error("Error al agregar el item", error);
  }
}



