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
        <h2 className={styles.title}>Why Volunteer</h2>
        <p className={styles.description}>
        Volunteering at We Care Health Foundation is not an act of benevolence; it is about leaving a difference in the lives of children and families in distress for generations to come. Join our team with other dedicated volunteers playing their part in our critical mission of delivering urgent medical care and support to really needy entities. 
        </p>

        <p className={styles.description}>
        Your time, skills—these are what will further our reach so more people can experience better health and hope. Be it through fundraising events, support for our outreach programs, or even directly getting involved with the communities we serve, this difference your contribution will make is real and positive. Take the first step to making a difference today—together for a healthier, brighter future for all.
        </p>
        {/* <button className={styles.button}>Learn more</button> */}
      </div>
    </section>
  );
};

export default VolunteerWorkCard;
