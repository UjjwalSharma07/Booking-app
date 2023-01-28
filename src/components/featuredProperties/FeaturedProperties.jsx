import React from 'react'
import style from './FeaturedProperties.module.css'
const FeaturedProperties = () => {
  return (
    <div className={style.fp}>
     <div className={style.fpItem}>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" className={style.fpImg} />
        <span className={style.fpName}>7Seasons Apartments Budapest</span>
        <span className={style.fpCity}>06. Terézváros, Hungary, Budapest
</span>
        <span className={style.fpPrice}>Starting from <b>₹ 6,588</b></span>
        <div className={style.fpRating}>
            <button>8.9</button>
            <span>Excellent</span>
        </div>
      </div>
      <div className={style.fpItem}>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1" alt="" className={style.fpImg} />
        <span className={style.fpName}>Oriente Palace Apartments</span>
        <span className={style.fpCity}>Madrid City Center, Spain, Madrid
</span>
        <span className={style.fpPrice}>Starting from <b>₹ 5,856</b> </span>
        <div className={style.fpRating}>
            <button>8.7</button>
            <span>Excellent</span>
        </div>
      </div>
      <div className={style.fpItem}>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1" alt="" className={style.fpImg} />
        <span className={style.fpName}>numa I Vita Apartments</span>
        <span className={style.fpCity}>Fortezza da Basso, Italy, Florence
</span>
        <span className={style.fpPrice}>Starting from <b>₹ 10,027</b> </span>
        <div className={style.fpRating}>
            <button>9.9</button>
            <span>Excellent</span>
        </div>
      </div>
      <div className={style.fpItem}>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/121399207.webp?k=b0e7119a0ba3354de23997d3698aac0296822fd58a590d83ddbb372f8af887a9&o=&s=1" alt="" className={style.fpImg} />
        <span className={style.fpName}>3 Epoques Apartments by Prague Residences</span>
        <span className={style.fpCity}>Prague 1, Czech Republic, Praha 1</span>
        <span className={style.fpPrice}>Starting from <b>₹ 6,376</b></span>
        <div className={style.fpRating}>
            <button>9.5</button>
            <span>Excellent</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties
