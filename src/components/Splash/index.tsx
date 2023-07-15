import styles from '@/styles/Header.module.css'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

function Splash() {
    const [unlock,setUnlock] = useState(false)
    const [show,setShow] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setUnlock(true);
        }, 800);
        setTimeout(() => {
            setShow(false);
        }, 1500);
    },[])
    return (<>
        {show && <div className={`${styles.splash_container}`} >
            <span className={`${styles.splash_lock} ${unlock ? styles.splash_unlocked : ''}`}></span>
            <br/>
            <span className={inter.className} style={{fontWeight: 600}}>Unlock Creativity</span>
        </div>}
    </>)
}
export default Splash