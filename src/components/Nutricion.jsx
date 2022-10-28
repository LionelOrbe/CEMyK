import React from 'react'
import TemporaryDrawer from './Drawer'
import video from '../assets/2.mp4'
import styles from './Nutricion.module.css'

export default function Nutricion() {
  return (
    <div>
        <TemporaryDrawer/>
        <video loop autoPlay width='100%'>
            <source src={video} type="video/mp4" ></source>
        </video>
        <div className={styles.title}>
          NUTRICIÓN
        </div>
    </div>
  )
}
