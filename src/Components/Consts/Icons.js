import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';
import FlatwareIcon from '@mui/icons-material/Flatware';
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import HelpIcon from '@mui/icons-material/Help';
import classNames from 'classnames';

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