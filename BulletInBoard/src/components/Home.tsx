import { useEffect, useState } from 'react';
import noti from '../assets/img/Notificationicon.png';
import { ContainerHeader, HeaderHome, MainHome, WrapperElements } from '../styledComponents/containers';
import MenuUl from './containers/MenuUl';
import SliderHome from './slider/SliderHome';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import '../styles/home.css'
import { onAuthStateChanged } from 'firebase/auth';
import { auth, dataBase } from '../Firebase/FirebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../Redux/Slices/UsersSlices';
import NavBar from './containers/NavBar';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';

interface product {
    uid: number | null,
    name: string | number,
    price: number | null,
    description: string | null,
    category: string | null,
    photoURL: string | null,
    paycard?: string | null,
    contactPerson?: string | null,
    adress?: string | null
}

const Home = () => {

    const dispatch = useDispatch()

    const [products, setProducts] = useState<any[]>([])
    const [activeButton, setActiveButton] = useState(0);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    async function readProducts() {
        const querySnapshot = await getDocs(collection(dataBase, "productos"));
        return querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }))
    }

    const cargarproductos = async () => {
        const listProducts = await readProducts()
        setProducts(listProducts)
    }

    useEffect(() => {
        cargarproductos()
        const validateuser = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                const auth = {
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    isAutenticated: true
                }
                dispatch(setUser(auth))
            }
        })

        return () => validateuser()
    }, [dispatch]);

    const authUser = useSelector((store: any) => store.user)

    return (
        <WrapperElements>
            <div className='div_user_settings' style={{
                display: isMenuVisible ? 'flex' : 'none'
            }} >
                <div className='bg'>
                    <MenuUl />
                </div>
                <div className='out_menu' onClick={toggleMenu}></div>
            </div>
            <HeaderHome>
                <ContainerHeader>
                    <div className='cont__row user_settings' onClick={toggleMenu} >
                        <img src={authUser.photoURL ? authUser.photoURL : 'https://i.pinimg.com/564x/9c/b9/8a/9cb98a68fde112c7a23a217bc8cdb487.jpg'} alt="" width='30px' height='30px' />
                        <div>
                            <span>Hi!</span>
                            <span>{authUser.displayName ? authUser.displayName : 'Nombre de usuario'}</span>
                        </div>
                    </div>
                    <img src={noti} alt="" width='30px' height='30px' />
                </ContainerHeader>
                <SliderHome />
            </HeaderHome>
            <MainHome>
                <div className='vie'>
                    <p>Recently viewed</p>
                    <p> ( ) </p>
                </div>
                {
                    products.map((producto) => (
                        <Card sx={{ maxWidth: 345, background: 'none', border: 0, borderRadius: '.8em', boxShadow: 'none', color: '#000', backgroundColor: '#ebfff6' }}>
                            <CardActionArea >
                            <Link to={`/productPage/${producto.uid}`}><CardMedia
                                    component="img"
                                    height="140"
                                    image={producto.photoURL}
                                    alt="green iguana"
                                /></Link> 
                                <CardContent>
                                    <div>
                                        <p>{producto.price}</p>
                                        <div className='d-flex-row'>
                                            <p>{producto.name}</p><br />
                                            <p>{producto.uid}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                }
            </MainHome>
            <NavBar />
        </WrapperElements>
    )


}

export default Home