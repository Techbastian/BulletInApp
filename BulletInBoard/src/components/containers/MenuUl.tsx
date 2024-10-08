import notification from '../../assets/img/Notificationicon.png'
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiActivity } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const MenuUl = () => {
    const navigate = useNavigate()
    const Android12Switch = styled(Switch)(({ theme }) => ({
        padding: 8,
        '& .MuiSwitch-track': {
            borderRadius: 22 / 2,
            '&::before, &::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 16,
                height: 16,
            },
            '&::before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                    theme.palette.getContrastText(theme.palette.primary.main),
                )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
                left: 12,
            },
            '&::after': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                    theme.palette.getContrastText(theme.palette.primary.main),
                )}" d="M19,13H5V11H19V13Z" /></svg>')`,
                right: 12,
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: 'none',
            width: 16,
            height: 16,
            margin: 2,
        },
    }));

    return (

        <>
            <ul>
                <li onClick={() => navigate('/perfil')}>
                    <CiSettings />
                    <span>Settings</span>
                </li>
                <li onClick={() => console.log('Setting')}>
                    <IoIosNotificationsOutline />
                    <span>Notificaction</span>
                    <FormControlLabel control={<Android12Switch />} label="" />
                </li>
                <li onClick={() => console.log('Setting')}>
                    <FiActivity />
                    <span>Activity</span>
                </li>
                <li onClick={() => console.log('Setting')}>
                    <img src='' alt="" />
                    <span>Subscription type</span>
                </li>
                <li onClick={() => console.log('Setting')}>
                    <img src='' alt="" />
                    <span>FAQ</span>
                </li>
            </ul>
        </>

    )
}

export default MenuUl