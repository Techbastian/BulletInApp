import { Link, useNavigate } from "react-router-dom"
import { Formulario, LogButtons, MyButton } from "../../styledComponents/StyledComponents"
import styles from '../../styles/singin.module.css'
import useForm from "../../Helpers/UseForm"
import { FacebookRegister, GoogleRegister, MailLogin } from "../../Redux/Actions/Actions"
import { setUser } from "../../Redux/Slices/UsersSlices"
import { useDispatch } from "react-redux"

interface formValues {
    email: string,
    password: string
}

const SingIn = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { dataForm, handleChange, reset } = useForm<formValues>({
        email: "",
        password: ""
    })

    const handleAuth = async (prop:string) => {
        switch (prop) {
            case 'google':
                const google = await GoogleRegister()
                if (google) {
                    let googleuser = {
                        uid: google.uid,
                        displayName: google.displayName,
                        email: google.email,
                        photoURL: google.photoURL,
                        isAutenticated: true
                    }
                    dispatch(setUser(googleuser))
                }

                break;
            case 'facebook':
                const facebook = await FacebookRegister()
                if (facebook) {
                    let facebookuser = {
                        uid: facebook.uid,
                        displayName: facebook.displayName,
                        email: facebook.email,
                        photoURL: facebook.photoURL,
                        isAutenticated: true
                    }
                    dispatch(setUser(facebookuser))
                }
                break;

        }
    }


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        const maillogin = await MailLogin(dataForm.email, dataForm.password)
        console.log(maillogin)
        if (maillogin) {
            dispatch(setUser(maillogin))
        }        
        reset()
        navigate('/home')
    }

    return (
        <main id={styles.principal}>
            <img src='https://res.cloudinary.com/semojicaf/image/upload/v1726492689/BulletInBoard/logo.png' alt="Logo" className="logo" />
            <h2 style={{ fontWeight: "200" }}>Sig In</h2>
            <div className={styles.seccion}>
                <Formulario onClick={handleSubmit}>
                    <input type="email" placeholder="Email" name="email" value={dataForm.email} onChange={handleChange} />
                    <input type="password" placeholder="Password" name="password" value={dataForm.password} onChange={handleChange} />
                    <MyButton type="submit" >Sing In</MyButton>
                </Formulario>

                <LogButtons>
                    <p>Sing in with</p>
                    <div>
                        <button onClick={() => handleAuth('google')}><img src="https://res.cloudinary.com/semojicaf/image/upload/v1725768616/BuffaloMobileApp/Google.png" alt="google" /></button>
                        <button onClick={() => handleAuth('facebook')}><img src="https://res.cloudinary.com/semojicaf/image/upload/v1725768616/BuffaloMobileApp/facebook.png" alt="facebook" /></button>
                    </div>
                </LogButtons>
                <p>Don't have an account? <Link to={'/singup'} style={{ fontSize: "14px",color:"green" }}>Sing Up</Link></p>
            </div>
        </main>
    )
}

export default SingIn