import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';
import FlatwareIcon from '@mui/icons-material/Flatware';
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import HelpIcon from '@mui/icons-material/Help';
import classNames from 'classnames';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DiningIcon from '@mui/icons-material/Dining';
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ScreenSearchDesktopRoundedIcon from '@mui/icons-material/ScreenSearchDesktopRounded';
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';

export function Menu({className}){
    return (<>
      
    <MenuIcon className={className}/>
    </>)
}

export function Close({className}){
    return (
        <>
        <CloseIcon className={className}/>
        </>
    )
}

export function Fork({className}){
    return(<>
    <FlatwareIcon className={className}/>
    
    </>)
}

export function User({className}){
    return (<>
        <PersonIcon className={className}/>
        </>)
}

export function Password({className}){
    return(<>
    <HttpsIcon className={ className}/>
    </>)
}

export function CircleUser({className}){
    return(
        <>
        <AccountCircleIcon className={className}/>
        </>
    )
}

export function PowerOff({className}){
    return(<>
     < PowerSettingsNewIcon className={className}/>  
    
    </>)
}

export function QuestIcon({className}){
    return(<>
    <HelpIcon className={className}/>
    </>)
}

export function EyesIcon({className}){

    return(
        <>
        <VisibilityOutlinedIcon className={className}/>
        </>
    )
}

export function EditIcon({className}){

    return(
        <>
        <EditOutlinedIcon className={className}/>
        </>
    )
}

export function Spoon({className}){
    return(<>
    <DiningIcon className={className}/>
    </>)
}

export function SpoonOut({className}){
    return(
        <>
        <DiningOutlinedIcon className={className}/>
        </>
    )
}

export function Security({className}){
    return(
        <>
        <AdminPanelSettingsIcon className={className}/>
        </>
    )
}


export function SecurityOut({className}){
    return(
        <>
        <AdminPanelSettingsOutlinedIcon className={className}/>
        </>
    )
}

export function SearchSite({className}){
    return(
        <>
        <ScreenSearchDesktopRoundedIcon className={className}/>
        </>
    )
}

export function SearchSiteOut({className}){
    return(
        <>
        <ScreenSearchDesktopOutlinedIcon className={className}/>
        </>
    )
}