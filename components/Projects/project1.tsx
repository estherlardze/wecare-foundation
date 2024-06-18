"use client"

import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./projectStyles.module.scss";
import Image from "next/image";
import donation from "../../public/DONATION-2.png";

type Project1Props = {
  className?: string;
};

const Project1: React.FC<Project1Props> = ({ className }) => {
 

  const mulProperties = classNames(styles.projects, styles.project1, className);


  return (
    <section className={mulProperties}>
      <div className={styles.imageContainer}>
        <Image src={donation} alt="hero" className={styles.image} />
      </div>
      <div className={styles.descriptionContainer}>
        <h2 id="projectName">Maiden Donation</h2>
        <p id="description" className={styles.p}>
          This project dubbed YOUR LITTLE CAN SAVE A LIFE saw the fundraising of
          GHS3000.00 which was used to sponsor the surgeries of two children at
          the Child Health Department of the Korle Bu Teaching Hospital in
          Accra, Ghana. The two children by names Stephanie and Anita aged six
          and twelve respectively. While Stephanie suffered from Septic
          Arthritis, Anita on the other hand had been battling with Anal
          Malformation for some time. The above photo is a newspaper published
          of our maiden donation at the Child Health Department of the Korle Bu
          Teaching Hospital in Accra, Ghana on 10th June, 2022. Captured by{" "}
          <Link href="/">Chronicles Newspaper</Link>.
        </p>
       
      </div>
    </section>
  );
};

export default Project1;
