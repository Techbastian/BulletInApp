import { doc, getDoc, setDoc, DocumentData } from "firebase/firestore";
import { dataBase } from "../firebase/FirebaseConfig";

export const getUserProfile = async (uid: string): Promise<DocumentData | null> => {
    try {
        const docRef = doc(dataBase, "usuarios", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error getting user profile:", error);
        return null;
    }
};

export const updateUserProfile = async (uid: string, profileData: DocumentData): Promise<void> => {
    try {
        const docRef = doc(dataBase, "usuarios", uid);
        await setDoc(docRef, profileData, { merge: true });
    } catch (error) {
        console.error("Error updating user profile:", error);
    }
};
