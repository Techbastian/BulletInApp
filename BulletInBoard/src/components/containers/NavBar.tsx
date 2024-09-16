import { CiHeart, CiHome, CiMail, CiSearch } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Footer } from "../../styledComponents/StyledComponents";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <Footer>
            <ul>
                <li><button onClick={() => navigate('/home')}><CiHome /></button></li>
                <li><button onClick={() => navigate('/search')}><CiSearch /></button></li>
                <li><button onClick={() => navigate('/add')}><IoIosAddCircleOutline /></button></li>
                <li><button onClick={() => navigate('/favorites')}><CiHeart /></button></li>
                <li><button onClick={() => navigate('/messages')}><CiMail /></button></li>
            </ul>
        </Footer>
    )
}

export default NavBar