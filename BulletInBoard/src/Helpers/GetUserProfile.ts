import { doc, getDoc, setDoc } from "firebase/firestore";
import { dataBase } from "../Firebase/FirebaseConfig";

interface UserProfileData {
    displayName: string;
    photoURL: string;
    email: string;
}

export const getUserProfile = async (uid: string): Promise<UserProfileData | null> => {
    try {
        const docRef = doc(dataBase, "usuarios", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data() as UserProfileData;
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error getting user profile:", error);
        return null;
    }
};

export const updateUserProfile = async (uid: string, profileData: UserProfileData): Promise<void> => {
    try {
        const docRef = doc(dataBase, "usuarios", uid);
        await setDoc(docRef, profileData, { merge: true });
    } catch (error) {
        console.error("Error updating user profile:", error);
    }
};
