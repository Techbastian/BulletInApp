import React, { useEffect, useState } from 'react';
import { getUserProfile, updateUserProfile } from '../Helpers/GetUserProfile';
import { auth } from '../Firebase/FirebaseConfig';

interface Perfil{
    displayName: string;
    photoURL: string;
    email: string;
}

const Perfil: React.FC = () => {
    const [userProfile, setUserProfile] = useState<UserProfileData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<UserProfileData | null>(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (auth.currentUser) {
                const profile = await getUserProfile(auth.currentUser.uid);
                if (profile) {
                    setUserProfile(profile);
                    setFormValues(profile);
                }
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues(prevValues => prevValues ? { ...prevValues, [name]: value } : null);
    };

    const handleSave = async () => {
        if (auth.currentUser && formValues) {
            await updateUserProfile(auth.currentUser.uid, formValues);
            setUserProfile(formValues);
            setEditMode(false);
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            {editMode ? (
                <div>
                    <h2>Edit Profile</h2>
                    <input
                        type="text"
                        name="displayName"
                        value={formValues?.displayName || ''}
                        onChange={handleChange}
                        placeholder="Display Name"
                    />
                    <input
                        type="text"
                        name="photoURL"
                        value={formValues?.photoURL || ''}
                        onChange={handleChange}
                        placeholder="Photo URL"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formValues?.email || ''}
                        onChange={handleChange}
                        placeholder="Email"
                        disabled
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                </div>
            ) : (
                <div>
                    <h2>Welcome, {userProfile?.displayName}</h2>
                    <img src={userProfile?.photoURL} alt={userProfile?.displayName} />
                    <p>Email: {userProfile?.email}</p>
                    <button onClick={() => setEditMode(true)}>Edit Profile</button>
                </div>
            )}
        </div>
    );
};

export default Perfil;
