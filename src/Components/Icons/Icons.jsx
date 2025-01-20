import React from 'react'
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ShareIcon from '@mui/icons-material/Share'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'; 
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SortIcon from '@mui/icons-material/Sort';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';
import CloseIcon from '@mui/icons-material/Close';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import TwoWheelerOutlinedIcon from '@mui/icons-material/TwoWheelerOutlined';
import EventSeatOutlinedIcon from '@mui/icons-material/EventSeatOutlined';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from '@mui/icons-material/Movie';
import DevicesIcon from '@mui/icons-material/Devices';
import SettingsAccessibilitySharpIcon from '@mui/icons-material/SettingsAccessibilitySharp';
import SportsBaseballSharpIcon from '@mui/icons-material/SportsBaseballSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import MenuIcon from '@mui/icons-material/Menu'
import AddIcon from '@mui/icons-material/Add'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareIcon from '@mui/icons-material/Compare';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeIcon from '@mui/icons-material/Home';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import   VolumeMuteIcon   from '@mui/icons-material/VolumeMute';
import PauseSircleIcon from '@mui/icons-material/PauseCircle'
import RemoveIcon from '@mui/icons-material/Remove';
 import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
 import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
 import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';

 import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
 import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
 import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
 import VolumeUpIcon from '@mui/icons-material/VolumeUp';
 import { MessageCircle ,Send} from 'react-feather';
 import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
 import LocalShippingIcon from '@mui/icons-material/LocalShipping';
 import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
 import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
 import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
 import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TocIcon from '@mui/icons-material/Toc';
import CheckIcon from '@mui/icons-material/Check';
import StarRateIcon from '@mui/icons-material/StarRate';
 

export function Report ({className}){
  return(<>
  <ReportOutlinedIcon className={className}/>
  </>)}
  export function Danger ({className}){
    return(<><GppMaybeOutlinedIcon className={className}/>
    </>)
}
 export function Share({classsName}) {
  return (
    <>
    <ShareIcon className={classsName}/>
    </>
  )
}

export function Save({classsName,saved}) {
  return (
    <>
    {saved===false &&
    <BookmarkAddOutlinedIcon className={classsName}/>
    }
     {saved===true &&
    <BookmarkAddIcon className={classsName}/>
    }
    
    </>
  )
}

export function LeftArrow({className}){
  return(
    <>
< KeyboardArrowLeftIcon />
    
    </>
  )
}

export function RightArrow({className}){
  return(
    <><KeyboardArrowRightIcon/></>
  )
}



export function Close({className}){
  return(
    <><CloseIcon className={className}/></>
  )
}

export function Photo({className}){
  return(<>

  <PhotoSizeSelectActualOutlinedIcon className={ className}/>
  </>)
}

export function Car({className}){
  return(<><TwoWheelerOutlinedIcon className={className}/></>)
}

export function Chair({className}){
  return(<><EventSeatOutlinedIcon className={className}/></>)
}

export function DigitalDevice({className}){
  return(<>
  <DevicesIcon className={className}/>
  </>)
}

export function Electronic ({className}){
  return(<>
  <TvIcon className={className} />
  </>)
}

export function Personal({className}){
  return(<>
  <SettingsAccessibilitySharpIcon className={className}/>
  
  </>)
}

export function Sport ({className}){
  return(<><SportsBaseballSharpIcon className={className}/></>)
}


export function Search({className}){
  return(
    <>
    <SearchSharpIcon className={className}/>
    </>
  )
}


export function Instagram({className}){
  return(<>
  <InstagramIcon className={className}/>
  </>)
}

export function Twitter({className}){
  return(<>
  <TwitterIcon className={className}/>
  </>)
}

export function LinkedIn({className}){
  return(<>
  <LinkedInIcon className={className}/>
  </>)
}

export function Telegram({className}){
  return(<>
  <TelegramIcon className={className}/>
  </>)
}

export function Menu({className}){
  return(<>
  <MenuIcon className={className}/>
  </>)
}

export function Add({className}){
  return(<>
    <AddIcon className={className}/>
  
  </>)
}


export function ShopCart({className}){
  return(
    <>
    <ShoppingCartOutlinedIcon  className={className}/>
    </>
  )
}

export function MorePoint({className}){
  return(<>
  <MoreVertOutlinedIcon className={className}/>
  </>)
}


export function LikeOff({className}){

  return(
    <>
    <FavoriteBorderIcon className={className}/>
    </>
  )
}

export function LikeOn({className}){
  return(
    <>
    <FavoriteIcon/>
    </>
  )
}

export function Store({className}){
  return(<>
  <StoreOutlinedIcon className={className}/>
  </>)
}

export function AddToList({className}){
  return(
    <>
    <TocIcon/>
    </>
  )
}

export function Compare({className}){
  return(<>
  <CompareIcon/>
  </>)
}

export function StoreIcon({className}){


  return(<>
  <StorefrontOutlinedIcon className={className}/>
  
  </>)
}

export function Home({className}){
  return(<>
  <HomeIcon className={className}/>
  
  </>)
}


export function AccountIcon({className}){
  return(<>
  <AccountCircleOutlinedIcon className={className}/>
  
  </>)
}

export function PlayMusic({className}){
  return(<>
  <PlayCircleFilledOutlinedIcon className={className}/>
  </>)
}

export function Release({className}){
  return(<>
  <MovieIcon className={className} />
  </>)
}

export function Explore({className}){
  return(<>
  <ExploreIcon className={className}/>
  </>)
}

export function Create({className}){
  return(<>
  <AddBoxOutlinedIcon className={className}/>
  </>)
}


export function MoreHorz({className}){
  return(<>
  <MoreHorizIcon className={className} />
  </>)
}

export function SendOut({className}){
  return(<>
  <  SendOutlinedIcon  style={{transform:'rotate(-45deg)'}}/>
  </>)
}

export function MuteIcon({className}){
  return(<>
  <VolumeMuteIcon className={className} />
  </>)
}
export function VolumeIcon({className}){
  return(<>
  <VolumeUpIcon className={className}/>
  </>)
}


export function Pause({className}){
  return(
    <>
    <PauseSircleIcon className={className}/>
    
    </>
  )
}


export function AddPerson({className}){
  return(<>
    < PersonAddRoundedIcon />
    
    </>)
}

export function All({className}){
  return(
    <>
    <AppsRoundedIcon className={className}/>
    </>
  )
}


export function Taged({className}){
  return(<>
  < AssignmentIndOutlinedIcon/>
  </>)
}




export function Note({className}){
  return(<>
  
  <NoteAltOutlinedIcon className={className}/>
  </>)
}

export function BackPage({className}){
  return(<>
  <KeyboardBackspaceOutlinedIcon className={ className}/>
  </>)

}

export function Down({className}){
  return(
    <>
    <ExpandMoreOutlinedIcon className={className}/>
    </>
  )
}

export function Comment({className}){
  return(<>
  <MessageCircle className={className} style={{ transform: 'scaleX(-1)'}}/>
  </>)
}

export function SendIc({className}){
  return(<>
  <Send className={className}/>
  </>)
}


export function Remove({className}){

  return(

    <>
    <RemoveIcon className={className}/>
    
    </>
  )
}


export function Shipp({className}){
  return(<>
    
    <LocalShippingIcon className={className}/>
    
    </>)
}


export function AddToListIcon({className}){

  return(<>
  <PlaylistAddIcon className={className}/>
  </>)
}


export function LikeFinger({className}){

  return (<>
     <ThumbUpOutlinedIcon className={className}/>
    
    </>)
}

export function DislikeFinger({className}){
  return(<>
    <ThumbDownOffAltOutlinedIcon className={className}/>
  </>)
}

export function Sort({className}){
  return(<>
    <SortIcon className={className}/>
  </>)
}


export function QuestIcon({className}){
  return(
    <>
    <HelpOutlineIcon className={className}/>
    </>
  )
}

export function SupportResponse({className}){
  return(
    <>
    <SupportAgentIcon className={className}/>
    </>
  )
}

export function NoIcon({className}){
return(
  <>
  <CloseIcon className={className}/>
  </>
)

}

export function YesIcon({className}){
  return(
    <>
    <CheckIcon className={className}/>
    </>
  )
}


export function StarIcon({className}){
  return(
    <>
    <StarRateIcon className={className}/>
    </>
  )
}