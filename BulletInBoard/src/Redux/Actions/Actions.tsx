import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth, dataBase, facebookauth, googleauth } from "../../Firebase/FirebaseConfig";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";

const userCollection = collection(dataBase, "usuarios")

//---------------- Inicio de sesion por medio de google -----------------
//--------------- Registro por medio de google ------------------------
export const GoogleRegister = async () => {
    try {
        const result = await signInWithPopup(auth, googleauth);
        if (result) {
            const infoUser = result.user;
            const userData = {
                uid: infoUser.uid,
                displayName: infoUser.displayName,
                email: infoUser.email,
                photoURL: infoUser.photoURL,
                isAutenticated: true,
                password: null,
                celnumber: null,
                adress: null,
                notification: null,
                payment: null,
            }
            const reference = await addDoc(userCollection, userData)
            console.log(reference.id)
            return userData
        }

    } catch (error) {
        console.log("Error al intentar registrarte por Google: ", error)
    }
}
//---------------- Inicio de sesion por medio de facebook -----------------
//--------------- Registro por medio de facebook ------------------------
export const FacebookRegister = async () => {
    try {
        const result = await signInWithPopup(auth, facebookauth);
        if (result) {
            const infoUser = result.user;
            const userData = {
                uid: infoUser.uid,
                displayName: infoUser.displayName,
                email: infoUser.email,
                photoURL: infoUser.photoURL,
                isAutenticated: true,
                password: null,
                celnumber: null,
                adress: null,
                notification: null,
                payment: null,
            }
            const reference = await addDoc(userCollection, userData)
            console.log(reference.id)
            return userData
        }

    } catch (error) {
        console.log("Error al intentar ingresar por Facebook: ", error)
    }
}
//---------------- Inicio de sesion por medio de correo y contraseña -----------------
export const MailLogin = async (email: string, pass: string) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, pass)
        const mailUser = result.user

        if (result) {
            const userData = {
                uid: mailUser.uid,
                displayName: mailUser.displayName,
                email: mailUser.email,
                photoURL: mailUser.photoURL,
                isAutenticated: true,
                password: null,
                celnumber: null,
                adress: null,
                notification: null,
                payment: null,
            }
            console.log(mailUser)
            return userData
        }
    } catch (error) {
        console.log("Error al intentar ingresar por Mail: ", error)
    }
}
//--------------- Registro por medio de correo y contraseña ------------------------
export const MailRegister = async (email: string, pass: string, name: string, phone: string, isAutenticated: boolean) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, pass)

        if (result) {
            const mailUser = result.user;
            await updateProfile(mailUser, {
                displayName: name,
            })
            const userData = {
                uid: mailUser.uid,
                displayName: name,
                email: mailUser.email,
                photoURL: mailUser.photoURL,
                isAutenticated: isAutenticated,
                password: pass,
                celnumber: phone,
                adress: null,
                notification: null,
                payment: null,
            }
            const reference = await addDoc(userCollection, userData)
            console.log(reference.id)
            return userData
        }
    } catch (error) {
        console.log("Error al intentar registrar por Mail: ", error)
    }
}

export const LogOut = async () => {
    try {
        const result = await signOut(auth)
        console.log(result)
    } catch (error) {
        console.log("Se presento un error", error)
    }
}

//CRUD para la base de datos de los usuarios

export const readAllUsersInfo = async () => {
    try {
        const usersList = await getDocs(userCollection);
        return usersList
    } catch (error) {
        console.log("No se puede leer la info del usuario: ", error)
    }
}

export const readUserInfo = async (id: string) => {
    try {
        const userInfo = await getDoc(doc(userCollection, id));

        return userInfo.data();
    } catch (error) {
        console.error(error);
    }
}