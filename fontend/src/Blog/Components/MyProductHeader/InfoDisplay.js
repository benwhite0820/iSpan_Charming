import classes from './InfoDisplay.module.css'
import PillBtn from '../UI/PillBtn'
import { useState, useEffect } from 'react'
import MyProductBtn from '../UI/MyProductBtn'

const InfoDisplay = ({ userStatusData, onEdit }) => {
  // const [userData, setUserData] = useState(userStatusData)
  // useEffect(() => {
  //   setUserData(userStatusData)
  // }, [userStatusData])

  return (
    <div className={classes['personal-info--card__display']}>
      <h2>{userStatusData[0]?.status_title || '寫點什麼吧！'}</h2>
      <p>{userStatusData[0]?.status_content || '快來新增一點內容吧！'}</p>
      <div className={classes['personal-info--card__display-btn']}>
        <MyProductBtn
          type="button"
          value="修改文案"
          onClick={onEdit}
          className={classes.myproductbtn}
        />
      </div>
    </div>
  )
}

export default InfoDisplay
