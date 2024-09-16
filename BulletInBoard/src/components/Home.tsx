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
                            <span>{user.displayName}</span>
                        </div>
                    </div>
                    <img src={noti} alt="" width='30px' height='30px' />
                </ContainerHeader>
                <SliderHome />
            </HeaderHome>
            <MainHome>
                <div className='clas-explorer d-flex-row' style={{ position: 'relative' }}>
                    <span
                        className='actived'
                        style={{
                            transform: activeButton === 0 ? 'translateX(-50%)' : 'translateX(50%)',
                            transition: 'transform 0.3s ease',
                        }}
                    ></span>
                    <button onClick={() => handleClick(0)}>Discover</button>
                    <button onClick={() => handleClick(1)}>My workouts</button>
                </div>
                <Divider height='40px' />
                <Card sx={{ maxWidth: 345, background: 'none', border: 0, borderRadius: '.8em', boxShadow: 'none', color: '#fff' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://res.cloudinary.com/ian63k/image/upload/v1726147484/mnsfnydyryzuxffyumyy.png"
                            alt="green iguana"
                        />
                        <CardContent style={{ background: '#2e3562' }}>
                            <ContentCard>
                                <div className='card__info'>
                                    <h3>Split 3 days</h3>
                                    <p>the workout is divided into 3 days, day 1 biceps back day 2 triceps chest day 3 shoulders legs</p>
                                </div>
                                <div className='card__time'>
                                    <h3>45 min</h3>
                                    <span>free</span>
                                </div>
                            </ContentCard>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </MainHome>
        </WrapperElements>
    )


}

export default Home