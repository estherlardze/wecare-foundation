import React from "react";
import Image from "next/image";
import styles from "./volunteerWork.module.scss";
import donationImage from "../../public/DONATION-2.png";

const VolunteerWorkCard = () => {
  return (
    <section className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={donationImage} alt="Volunteer Work" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Volunteer Work</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aut
          voluptate neque quas omnis atque tempora at saepe temporibus
          reiciendis?
        </p>
        <button className={styles.button}>Learn more</button>
      </div>
    </section>
  );
};

export default VolunteerWorkCard;
