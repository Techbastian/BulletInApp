import React from "react"
import { Formulario, LogButtons, MyButton } from "../../styledComponents/StyledComponents"
import styles from '../../styles/singin.module.css'
import { useNavigate } from "react-router-dom"
import useForm from "../../Helpers/UseForm"
import { FacebookRegister, GoogleRegister, MailRegister } from "../../Redux/Actions/Actions"
import { useDispatch } from "react-redux"
import { setUser } from "../../Redux/Slices/UsersSlices"

interface initialValues {
    name: string,
    email: string,
    phone: string,
    password: string,
    isAutenticated: boolean
}

const SingUp = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { dataForm, handleChange, reset } = useForm<initialValues>({
        name: "",
        email: "",
        phone: "",        
        password: "",
        isAutenticated: false
    })

    const handleSubmit = async (event:React.FormEvent) => {
        event.preventDefault()
        await MailRegister(dataForm.email,dataForm.password,dataForm.name,dataForm.phone,dataForm.isAutenticated).then((response) => {
            dispatch(setUser(response))
        })
        reset()
        navigate('/singin')
    }

    const handleGoogle = async () => {
        await GoogleRegister().then((response) => {
            dispatch(setUser(response))
        })
        navigate('/singin')
    }

    const handleFacebook = async () => {
        await FacebookRegister().then((response) => {
            dispatch(setUser(response))
        })
        navigate('/singin')
    }

    return (
        <main id={styles.principal}>
            <img src='https://res.cloudinary.com/semojicaf/image/upload/v1726492689/BulletInBoard/logo.png' alt="Logo" className="logo" />
            <h2 style={{ fontWeight: "200" }}>Sing Up</h2>
            <div className={styles.seccion2}>
                <Formulario onSubmit={handleSubmit}>
                    <input type="text" placeholder="Full Name" name="name" value={dataForm.name} onChange={handleChange}/>
                    <input type="email" placeholder="Email" name="email" value={dataForm.email} onChange={handleChange}/>
                    <input type="number" placeholder="Phone Number" name="phone" value={dataForm.phone} onChange={handleChange}/>
                    <input type="password" placeholder="Password" name="password" value={dataForm.password} onChange={handleChange}/>
                    <MyButton type="submit">Sing Up</MyButton>
                </Formulario>

                <LogButtons>
                    <p>Sing up with</p>
                    <div>
                        <button onClick={handleGoogle}><img src="https://res.cloudinary.com/semojicaf/image/upload/v1725768616/BuffaloMobileApp/Google.png" alt="google" /></button>
                        <button onClick={handleFacebook}><img src="https://res.cloudinary.com/semojicaf/image/upload/v1725768616/BuffaloMobileApp/facebook.png" alt="facebook" /></button>
                    </div>
                </LogButtons>
            </div>
        </main>
    )
}

export default SingUp