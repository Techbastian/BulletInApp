import { useEffect, useState } from 'react';
// import { useState } from 'react';
import noti from '../assets/img/Notificationicon.png';
import { ContainerHeader, HeaderHome, MainHome, WrapperElements } from '../styledComponents/containers';
import MenuUl from './containers/MenuUl';
import SliderHome from './slider/SliderHome';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import '../styles/home.css'
import location from '../assets/img/location.svg';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/FirebaseConfig';
import { useDispatch } from 'react-redux';

const Home = () => {

    interface User {
        displayName: string | null;
        photoURL: string | null | undefined;
    }

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const dispatch = useDispatch();
    const [user, setUser] = useState({} as User);


    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('usuario loggeado en', user);
                setUser(user);
            } else {
                console.log('usuario no loggeado');
            }
        });
    }, [dispatch]);


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
                <div className='d-flex-column'>
                    <div className='vie'>
                        <p>Recently viewed</p>
                        <p> ( ) </p>
                    </div>
                    <div className='d-flex-row gap-1em'>
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
                                        <h3 style={{ color: '#474747' }}>820$</h3>
                                        <div className='d-flex-row j-content-space-between card_content'>
                                            <p>Hp notebook 2014</p>
                                            <p>
                                                <img src={location} alt="" />
                                                12 km
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
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
                                        <h3 style={{ color: '#474747' }}>820$</h3>
                                        <div className='d-flex-row j-content-space-between card_content'>
                                            <p>Hp notebook 2014</p>
                                            <p>
                                                <img src={location} alt="" />
                                                12 km
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
                <div className='d-flex-column'>
                    <div className='vie'>
                        <p>Recommended to you</p>
                    </div>
                    <div className='d-flex flex-warp'>
                        <Card sx={{ maxWidth: 170, background: 'none', border: 0, borderRadius: '.8em', boxShadow: 'none', color: '#000', backgroundColor: '#ebfff6' }}>
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://d34vmoxq6ylzee.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/4/3/43K30LT-1_T1679066178.png"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <div>
                                        <h3 style={{ color: '#474747' }}>820$</h3>
                                        <div className='d-flex-row j-content-space-between card_content'>
                                            <p>Hp notebook 2014</p>
                                            <p>
                                                <img src={location} alt="" />
                                                12 km
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 170, background: 'none', border: 0, borderRadius: '.8em', boxShadow: 'none', color: '#000', backgroundColor: '#ebfff6' }}>
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://d34vmoxq6ylzee.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/4/3/43K30LT-1_T1679066178.png"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <div>
                                        <h3 style={{ color: '#474747' }}>820$</h3>
                                        <div className='d-flex-row j-content-space-between card_content'>
                                            <p>Hp notebook 2014</p>
                                            <p>
                                                <img src={location} alt="" />
                                                12 km
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 170, background: 'none', border: 0, borderRadius: '.8em', boxShadow: 'none', color: '#000', backgroundColor: '#ebfff6' }}>
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://d34vmoxq6ylzee.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/4/3/43K30LT-1_T1679066178.png"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <div>
                                        <h3 style={{ color: '#474747' }}>820$</h3>
                                        <div className='d-flex-row j-content-space-between card_content'>
                                            <p>Hp notebook 2014</p>
                                            <p>
                                                <img src={location} alt="" />
                                                12 km
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 170, background: 'none', border: 0, borderRadius: '.8em', boxShadow: 'none', color: '#000', backgroundColor: '#ebfff6' }}>
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://d34vmoxq6ylzee.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/4/3/43K30LT-1_T1679066178.png"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <div>
                                        <h3 style={{ color: '#474747' }}>820$</h3>
                                        <div className='d-flex-row j-content-space-between card_content'>
                                            <p>Hp notebook 2014</p>
                                            <p>
                                                <img src={location} alt="" />
                                                12 km
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>

            </MainHome>
        </WrapperElements>
    )


}

export default Home