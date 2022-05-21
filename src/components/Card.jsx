import React from 'react'
import styles from "./card.module.css"
// import data from "./data.json"

const Card = ({cardData}) => {

    console.log({cardData})
   
   
  return (
      
    <div className={cardData.id %2 === 0 ? styles.main_div : styles.main1_div} >
        {/* {cardData} */}
    <div className={styles.f_div} >
  <p>{cardData.date}</p>
<img src={cardData.logo} alt=""/>
  </div>

  <div className={styles.case_div}><h3>Case Study</h3></div>
  <div><h1>{cardData.heading }</h1></div>
  <div><h1>{cardData.subheading }</h1></div>
  <div className={styles.last_div} >
      <h3>{cardData.devices }</h3>
      <p>{cardData.icon }</p>
      {/* <p> <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" /></p> */}
  
  </div>
        

    </div>

   
  )
}

export default Card
