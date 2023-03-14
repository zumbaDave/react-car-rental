import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <form>
                <div className={styles.text}>
                    <label>Where</label>
                    <input className={styles.text_input} type="text" placeholder='Search Location' />
                </div>
                <div className={styles.from}>
                    <span className={styles.border}></span>
                    <label>From</label>
                    <input type="date" />
                </div>
                <div className={styles.until}>
                    <span className={styles.border}></span>
                    <label>Until</label>
                    <input type="date" />
                </div>
                <div className={styles.search_btn}>
                    <AiOutlineSearch className={styles.icon} />
                    <button className={styles.btn}>Search for cars</button>
                </div>
            </form>
        </div>
    );
}

export default Hero;