import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import style from './Hotel.module.css'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/Footer/Footer'
const Hotel = () => {
  const [slideNumber,setSlideNumber] = useState(0);
  const [open,setOpen] = useState(false);
  const photos=[
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/273903754.jpg?k=492cb40e413b5cbe346d073994407641cad3cca733d419340435f4aa83045bd7&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/273903732.jpg?k=18ec20caf2e101f2ea8e6e745b95afd8e059262e3641bd7212693817ccd3b52e&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/273903690.jpg?k=559acc704f6666600bd41e817cd1e77271d76ce7ab67c9a8e0714bb30e9ae5d8&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/290441192.jpg?k=d16d6dc0853f99226fb332230503cde04d17e173d695f6b7273c28ecea6e002c&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/273903688.jpg?k=29c0e7ce337a77e96209b31a210995b070214549464c03f069a719cc65ba1f25&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/46391175.jpg?k=e310ef149b8d395605e8b24d13f4878cb54e3666cfb3a5c9688c0e08055f7a00&o=&hp=1"
    }
  ];
  const handelOpen =(i) =>{
    setSlideNumber(i);
    setOpen(true);
  }
  const handleMove =(direction)=>{
      let newSliderNumber;
      if(direction === "l"){
        newSliderNumber = slideNumber===0?5:slideNumber-1;
      }else{
        newSliderNumber = slideNumber===5?0:slideNumber+1;
      }
      setSlideNumber(newSliderNumber);
  }

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className={style.hotelContainer}>
        { open && <div className={style.slider}>
          <FontAwesomeIcon icon={faCircleXmark} className={style.close} onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className={style.arrow} onClick={()=>handleMove("l")} />
          <div className={style.SliderWrapper}>
            <img src={photos[slideNumber].src} className={style.SliderImg}/>
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className={style.arrow} onClick={()=>handleMove("r")} />
        </div>}
        <div className={style.hotelWrapper}>
          <button className={style.bookNow}>Reserve or Book Now!</button>
          <h1 className={style.hotelTitle}>Hotel Cottage</h1>
            <div className={style.hotelAddress}>
              <FontAwesomeIcon icon={faLocationDot}/>
              <span>PLOT NO 7/1, BLK-RP Pitampur, 110034 New Delhi, India</span>
            </div>
              <span className={style.hotelDistance}>Excellent location - 500m from center</span>
              <span className={style.hotelPriceHighlight}>
                Book a stay over ₹ 10,027 at this property and get a free airport taxi
              </span>
              <div className={style.hotelImgs}>
                  {photos.map((photo,i)=>(
                    <div className={style.hotelImgWrapper}>
                      <img src={photo.src} onClick={()=>handelOpen(i)} alt="" className={style.hotelImg} />
                    </div>
                  ))}
              </div>
              <div className={style.HotelDetails}>
                <div className={style.hotelDetailsText}>
                   <h1 className={style.hotelTitle}>Hotel Cottage Yes Please Near New Delhi Railway Station</h1>
                    <p className={style.hotelDetailsDesc}>
                    Hotel Cottage Yes Please @ Paharganj is 801 m from New Delhi Railway Station and 0.6 mi from Connaught Place. To assist guests, it operates a 24-hour front desk. Free WiFi access is available. Air-conditioned rooms here will provide you with a cable TV and a seating area. Featuring a shower, private bathrooms also come with free toiletries. At Hotel Cottage Yes Please @ Paharganj you will find facilities like luggage storage, dry cleaning and a laundry. A car rental facility is available. The property offers free parking. The hotel is 2.5 mi from India Gate and 9.3 mi from Lotus Temple. The ISBT Bus Station is 6.2 mi while the Indira Gandhi International Airport is 8.7 mi away.

                    </p>
                </div>
                <div className={style.hotelDetailsPrice}>
                    <h1>Perfect for a 6-night stay!</h1>
                    <span>Highly rated by recent guests (8.6), Free private parking available at the hotel</span>
                    <h2>
                      <b>₹ 13,230</b> (6 nights)
                    </h2>
                    <button> Reserve or Book Now!</button>
                </div>
              </div>
        </div>
          <MailList/>
          <Footer/>          
      </div>
    </div>
  )
}

export default Hotel
