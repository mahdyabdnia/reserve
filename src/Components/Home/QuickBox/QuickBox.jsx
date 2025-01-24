import React, { useState } from 'react'
import useStyles from './styles'
import QuickCard from './QuickCard/QuickCard';
import CreditModal from '../../CreditPage/CreditModal/CreditModal';
import { useNavigate } from 'react-router-dom';
import classnames from 'classnames'

export default function QuickBox({className}) {
    const [first, setfirst] = useState(0)
    const navigate=useNavigate();
    const openModal=()=>{
    document.getElementsByClassName('creditModal')[0].style.display="flex"
    document.body.style.overflow="hidden"
    }
    const goToReservePage=()=>{ 
    navigate('/reserve')
    }
    const setDel=()=>{ 

    }
    const card=[{tag:'افزایش اعتبار',imgSrc:'images/payment.svg',fun:openModal},{tag:' رزرو غذا'   ,imgSrc:'images/food-flat.png',fun:goToReservePage},{tag:' اعطای تحویل غذا'   ,imgSrc:'images/serving-food.png',fun:setDel}]
    const classes=useStyles();
  return (
    <div className={classnames(classes.root,className)}  >
       
        <CreditModal className={'creditModal'}/>  
     {card.map((item)=>{
        return(
            <>
            <QuickCard imgSrc={item.imgSrc} tag={item.tag} onClick={item.fun}/>
            </>
        )
     })}
    </div>
  )
}
