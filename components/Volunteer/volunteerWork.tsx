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
        As a volunteer of We Care Health Foundation, you will get involved in various activities that will satisfy your urge to make a difference. You would be involved in fundraising activities that help secure vital resources for health initiatives and interventions. You will also be involved in planning and execution processes of community outreach programs, thereby delivering much-needed health education and services.  
        </p>
        <p className={styles.description}>Be it event planning functions, administrative support, or direct service projects, your efforts in themselves will have the potential to make a difference in our mission of critical health care and education for children and families. Join us and put your skills and passion into practice to transform lives for a healthier, more compassionate world.</p>
        {/* <button className={styles.button}>Learn more</button> */}
      </div>
    </section>
  );
};

export default VolunteerWorkCard;
