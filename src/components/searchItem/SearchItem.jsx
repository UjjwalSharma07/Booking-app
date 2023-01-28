import React from 'react'
import { useNavigate } from 'react-router-dom';
import style from './SearchItem.module.css'

const SearchItem = () => {
    const navigate =useNavigate();
    const handelClick = ()=>{
        navigate("/hotels:id")
    };
  return (
    <div className={style.searchItem}>
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/273903754.webp?k=179df5514fa7b87ea398dfc466db3c1ccfe382b0f0c49ceacc0faa2b88eed159&o=&s=1" alt="" className={style.siImg}/>
      
      <div className={style.siDesc}>
        <h1 className={style.siTitle}>Tower Street Apartments</h1>
        <span className={style.siDistance}>500m from center</span>
        <span className={style.siTaxiOp}>Free airport taxi</span>
        <span className={style.siSubTitle}>Studio Apartment with Air conditioning</span>
        <span className={style.siFeatures}>
            Entire studio . 1 bathrom . 21 m<sup>2</sup> 1 full bed
        </span>
        <span className={style.siCancelOp}>Free cancellation</span>
        <span className={style.siCancelOpSubTitle}>
            You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className={style.siDetails}>
        <div className={style.siRating}>
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className={style.siDetailTexts}>
            <span className={style.siPrice}>₹ 10,027</span>
            <span className={style.sitaxiOp}>Include taxes and fees</span>
            <button className={style.siCheckBtn} onClick={handelClick} >See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
