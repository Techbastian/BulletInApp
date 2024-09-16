import { Link } from "react-router-dom"
import { MyButton, TextoScreen } from "../../styledComponents/StyledComponents"

const Screen3 = () => {
    return (
        <main className='principal'>
            <section className="screen2 ">
                
                <TextoScreen>
                    <img src="https://res.cloudinary.com/semojicaf/image/upload/v1726492690/BulletInBoard/slider3.png" alt="screen1" />
                    <h4>Buy</h4>
                    <p>See and choose products suitable products or products that are nearby</p>
                    
                </TextoScreen>

                <div className='ind3'>
                    <span></span><span></span><span></span>
                </div>
                <Link to={'/singin'} style={{ textDecoration: "none" }}><MyButton>Next</MyButton></Link>
            </section>
        </main>
    )
}

export default Screen3