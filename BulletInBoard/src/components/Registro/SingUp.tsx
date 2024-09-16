import React from "react"
import { Formulario, LogButtons, MyButton } from "../../styledComponents/StyledComponents"
import styles from '../../styles/singin.module.css'
import { useNavigate } from "react-router-dom"
import useForm from "../../Helpers/UseForm"

interface initialValues {
    name: string,
    email: string,
    phone: string,
    password: string,
    isAutenticated: string
}

const SingUp = () => {

    const navigate = useNavigate()

    const { dataForm, handleChange, reset } = useForm<initialValues>({
        name: "",
        email: "",
        phone: "",        
        password: "",
        isAutenticated: "false"
    })

    const handleSubmit = async (event:React.FormEvent) => {
        event.preventDefault()
        reset()
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
                    <MyButton type="submit">Sig Up</MyButton>
                </Formulario>

                <LogButtons>
                    <p>Sing in with</p>
                    <div>
                        <button ><img src="https://res.cloudinary.com/semojicaf/image/upload/v1725768616/BuffaloMobileApp/Google.png" alt="google" /></button>
                        <button ><img src="https://res.cloudinary.com/semojicaf/image/upload/v1725768616/BuffaloMobileApp/facebook.png" alt="facebook" /></button>
                    </div>
                </LogButtons>
            </div>
        </main>
    )
}

export default SingUp