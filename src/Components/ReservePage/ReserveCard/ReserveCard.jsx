import React, { useRef, useState , useEffect} from 'react'
import useStyles from './styles'
import { Add, Close, Down, Search, } from '../../Icons/Icons';
import { Check } from 'react-feather';

export default function ReserveCard({week,change}) {
    const pos=['غذاخوری ۱','غذا خوری ۲','غذا خوری۳'] 
    const classes=useStyles(); 
    const [position, setPos] = useState(pos[0]); 
    const [resvOffOn, setResvOffOn] = useState(false)
    const drpRef = useRef(null)
    const controlDropMenu=(event)=>{
      if(drpRef.current.style.display==="none"){
        drpRef.current.style.display="flex"
        event.target.firstElementChild.style.transform="rotate(180deg)"
      }
      else{
        drpRef.current.style.display="none"
        event.target.firstElementChild.style.transform="rotate(360deg)"
      }
    
   
    }

    const closeDrop=()=>{
      drpRef.current.style.display="none"
    }

    const handleSelect=(c)=>{
    closeDrop();
  
    setPos(c)
    }
    useEffect(() => {
     setPos(pos[0])
     setResvOffOn(false)
    
      return () => {
      
      }
    }, [change])
    
  return (
    <div className={classes.root}>
      <div className={classes.week}>{week}</div>
     
        <div className={classes.select_drp} onClick={controlDropMenu}><Down/>{position}</div>
        <div className={classes.select_loc}>
        <div className={classes.select_loc_box} ref={drpRef}>
            <div className={classes.search_loc_box}>
            <Search/>
                <input type="text" autofocus />
                
            </div>

            <div className={classes.select_option_box}>
           {pos.map((item)=>{
            return(
                <div onClick={()=>{handleSelect(item)}} className={classes.position_option}>
                       {item}
                </div>
            )
           })}
        </div>

        </div>

        <div className={classes.reserve_menu}>

          <div className={classes.food_img_name_box}>
            <span className={resvOffOn?classes.img_box_red:classes.img_box}>{resvOffOn===false &&
            <img src="images/food.png" alt="" />
            }
            {resvOffOn===true &&
            <Check/>
            }
             </span>
            نام غذا</div>
          <div className={classes.price_and_add}>
          <span>۱۰۰ تومان</span>
            <button className={resvOffOn?  classes.btn_remove:classes.btn_add} onClick={()=>{setResvOffOn(!resvOffOn)}}>{resvOffOn?<Close/>:<Add/>}</button>
           
          </div>
        </div>

        


      </div>
    </div>
  )
}
