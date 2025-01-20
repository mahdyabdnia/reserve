import React, { useRef, useState } from 'react'
import useStyles from './styles'
import { Add, Close, Down, Search, } from '../../Icons/Icons';
import { Check } from 'react-feather';

export default function ReserveCard({week}) {
    const pos=['غذاخوری ۱','غذا خوری ۲','غذا خوری۳']
    const classes=useStyles();
    const [position, setPos] = useState(pos[0]);
    const [resvOffOn, setResvOffOn] = useState(false)
    const drpRef = useRef(null)
    const controlDropMenu=()=>{
      if(drpRef.current.style.display==="none"){
        drpRef.current.style.display="flex"
      }
      else{
        drpRef.current.style.display="none"
      }
   
    }

    const closeDrop=()=>{
      drpRef.current.style.display="none"
    }
  return (
    <div className={classes.root}>
      <div className={classes.week}>{week}</div>
     
        <div className={classes.select_drp} onClick={controlDropMenu}><Down/>{position}</div>
        <div className={classes.select_loc}>
        <div className={classes.select_loc_box} ref={drpRef}>
            <div className={classes.search_loc_box}>
            <Search/>
                <input type="text" autoFocus />
                
            </div>

            <div className={classes.select_option_box}>
           {pos.map((item)=>{
            return(
                <div onClick={()=>{setPos(item);closeDrop();}} className={classes.position_option}>
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
