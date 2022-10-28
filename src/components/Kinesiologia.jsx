import React from 'react'
import TemporaryDrawer from './Drawer'
import video from '../assets/1.mp4'
import styles from './Kinesiologia.module.css'



export default function Inicio() {
  return (
    <div className={styles.container} >
        <TemporaryDrawer/>
        <video loop autoPlay width='100%'>
            <source src={video} type="video/mp4" ></source>
        </video>
        <div className={styles.title}>
          KINESIOLOGÍA
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique enim harum cupiditate? Aut deleniti placeat nulla velit qui perspiciatis repellendus, exercitationem expedita fugiat earum ullam, eveniet necessitatibus unde quaerat tempora!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique enim harum cupiditate? Aut deleniti placeat nulla velit qui perspiciatis repellendus, exercitationem expedita fugiat earum ullam, eveniet necessitatibus unde quaerat tempora!
        </p>
    </div>
  )
}
