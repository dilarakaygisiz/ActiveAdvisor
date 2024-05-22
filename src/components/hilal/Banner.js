import React from 'react';
import Image from '../../assets/img/house-banner.png';
import Search from '../../components/hilal/Search';
import styles from './Banner.module.css'

const Banner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.left}>
          <h1 className={styles.heading}>
            <span style={{ color: '#3B5B5D' }}>Active Advisor </span> chooses the right sport for you.
          </h1>
          <p className={styles.paragraph} style={{ color: '#3B5B5D' }}>It's up to you to choose the perfect field of sports. Sports preserve health, enhance endurance, reduce stress, and improve quality of life.</p>
        </div>
        <div className={styles.right}>
          <img className={styles.img} src={Image} alt='' />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
