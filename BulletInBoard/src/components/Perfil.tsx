import React, { useEffect, useState } from 'react';
import { getUserProfile, updateUserProfile } from '../Helpers/GetUserProfile';
import { auth } from '../Firebase/FirebaseConfig';
import '../styles/perfil.css';
import { Modal, Button, Form } from 'react-bootstrap'; 
interface UserProfileData {
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
            console.log('Current user:', auth.currentUser);
            if (auth.currentUser) {
                const profile = await getUserProfile(auth.currentUser.uid);
                console.log('Fetched profile:', profile);
                if (profile) {
                    setUserProfile(profile);
                    setFormValues(profile);
                }
                setLoading(false);
            } else {
                setLoading(false); 
            }
        };

        fetchUserProfile();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues: UserProfileData | null) => {
            if (prevValues) {
                return { ...prevValues, [name]: value } as UserProfileData;
            }
            return null;
        });
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
            <Modal show={editMode} onHide={() => setEditMode(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formDisplayName">
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="displayName"
                                value={formValues?.displayName || ''}
                                onChange={handleChange}
                                placeholder="Display Name"
                            />
                        </Form.Group>
                        <Form.Group controlId="formPhotoURL">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control
                                type="text"
                                name="photoURL"
                                value={formValues?.photoURL || ''}
                                onChange={handleChange}
                                placeholder="Photo URL"
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formValues?.email || ''}
                                onChange={handleChange}
                                placeholder="Email"
                                disabled
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setEditMode(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>

            {!editMode && (
                <div>
                    <h2>Bienvenido, {userProfile?.displayName}</h2>
                    <img src={userProfile?.photoURL} alt={userProfile?.displayName} />
                    <p>Email: {userProfile?.email}</p>
                    <Button onClick={() => setEditMode(true)}>Editar Perfil</Button>
                </div>
            )}
        </div>
    );
};

export default Perfil;
