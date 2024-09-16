import { Link } from 'react-router-dom'
import { MyButton, TextoScreen } from '../../styledComponents/StyledComponents'
import '../../styles/GeneralStyles.css'

const Inicio = () => {
    return (
        <>
            <main id='principal'>
                <section className="logo seccion">
                    <img src='https://res.cloudinary.com/semojicaf/image/upload/v1726492689/BulletInBoard/logo.png' alt="Logo" />
                </section>
                <section className="screen seccion">

                    <TextoScreen>
                        <img src="https://res.cloudinary.com/semojicaf/image/upload/v1726492690/BulletInBoard/slider1.png" alt="screen1" />
                        <h4>Choose</h4>
                        <p>Choose products available add to favorites and then buy</p>
                    </TextoScreen>

                    
                    <div className='indicadores'>
                        <span></span><span></span><span></span>
                    </div>
                    <Link to={'/screen_2'} style={{ textDecoration: "none" }}><MyButton>Next</MyButton></Link>
                </section>
            </main>
        </>
    )
}

export default Inicio