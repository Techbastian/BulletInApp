import { Link } from "react-router-dom"
import { MyButton, TextoScreen } from "../../styledComponents/StyledComponents"

const Screen2 = () => {
    return (
        <main className='principal'>
            <section className="screen2 ">

                <TextoScreen>
                    <img src="https://res.cloudinary.com/semojicaf/image/upload/v1726492690/BulletInBoard/slider2.png" alt="screen1" />
                    <h4>Sell</h4>
                    <p>List your items for sale and see how fast they get bought</p>
                </TextoScreen>
                
                <div className='ind2'>
                    <span></span><span></span><span></span>
                </div>
                <Link to={'/screen_3'} style={{ textDecoration: "none" }}><MyButton>Next</MyButton></Link>
            </section>
        </main>
    )
}

export default Screen2