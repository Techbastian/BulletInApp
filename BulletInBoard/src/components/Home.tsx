// import { useEffect, useState } from 'react';
import { useState } from 'react';
import noti from '../assets/img/Notificationicon.png';
import { ContainerHeader, Divider, HeaderHome, MainHome, WrapperElements, ContentCard } from '../styledComponents/containers';
import MenuUl from './containers/MenuUl';
import SliderHome from './slider/SliderHome';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import '../styles/home.css'
import { Typography } from '@mui/material';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../firebase/firebaseConfig';
// import { useDispatch } from 'react-redux';

const Home = () => {

    interface User {
        displayName: string | null;
        photoURL: string | null | undefined;
    }

    const [activeButton, setActiveButton] = useState(0);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    // const dispatch = useDispatch();
    const [user, setUser] = useState({} as User);

    const handleClick = (index: number) => {
        setActiveButton(index);
    };

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             console.log('usuario loggeado en', user);
    //             setUser(user);
    //         } else {
    //             console.log('usuario no loggeado');
    //         }
    //     });
    // }, [dispatch]);


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
                        <img src={user.photoURL ? user.photoURL : 'https://i.pinimg.com/564x/9c/b9/8a/9cb98a68fde112c7a23a217bc8cdb487.jpg'} alt="" width='30px' height='30px' />
                        <div>
                            <span>Hi!</span>
                            <span>{user.displayName ? user.displayName : 'Nombre de usuario'}</span>
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
                <Card sx={{ maxWidth: 345, background: 'none', border: 0, borderRadius: '.8em', boxShadow: 'none', color: '#000', backgroundColor: '#ebfff6' }}>
                    <CardActionArea >
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://d34vmoxq6ylzee.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/4/3/43K30LT-1_T1679066178.png"
                            alt="green iguana"
                        />
                        <CardContent>
                            <div>
                                <p>820$</p>
                                <div className='d-flex-row'>
                                    <p>name</p>
                                    <p>12 km</p>
                                </div>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </MainHome>
        </WrapperElements>
    )


}

export default Home