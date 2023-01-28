import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import style from './List.module.css'
import {format} from "date-fns"
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'

const List = () => {
  const location = useLocation();
  const [Destination,setDestination] = useState(location.state.Destination);
  const [date,setDate] = useState(location.state.date);
  const [options,setOptions] = useState(location.state.options);
  const [openDate,setOpenDate] = useState(false);
  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div className={style.ListContainer}>
        <div className={style.ListWrapper}>
          <div className={style.ListSearch}>
              <h1 className={style.ListTitle}>Search</h1>
              <div className={style.lstItems}>
                <label >Destination</label>
                <input placeholder={Destination} type="text" />
              </div>
              <div className={style.lstItems}>
                <label >Check-in-Date</label>
                <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                {openDate && (<DateRange 
                  onChange={item=> setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />)}
              </div>
              <div className={style.lstItems}>
                <label>Options</label>

                <div className={style.lsOptions}>

                <div className={style.lsOptionItem}>
                  <span className={style.lsOptiontext}>
                    Min price <small>per night</small>
                  </span>
                  <input type="number" min={0} className={style.lsOptionIput}/>
                </div>
                
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptiontext}>
                    Max price <small>per night</small>
                  </span>
                  <input type="number" min={0} className={style.lsOptionIput}/>
                </div>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptiontext}>
                    Adult
                  </span>
                  <input type="number" min={1} placeholder={options.adult} className={style.lsOptionIput}/>
                </div>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptiontext}>
                    Children
                  </span>
                  <input type="number" min={0} placeholder={options.children} className={style.lsOptionIput}/>
                </div>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptiontext}>
                    Room
                  </span>
                  <input type="number" min={1} placeholder={options.room} className={style.lsOptionIput}/>
                </div>
                </div>
              </div>
              <button>Search</button>
          </div>
          <div className={style.ListResult}>
                  <SearchItem/>
                  <SearchItem/>
                  <SearchItem/>
                  <SearchItem/>
                  <SearchItem/>
                  <SearchItem/>
                  <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List

