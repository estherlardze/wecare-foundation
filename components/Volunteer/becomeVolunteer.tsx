"use client";

import React from "react";
import Link from "next/link";
import styles from "./becomeVol.module.scss";
import Image from "next/image";
import donation from "../../public/DONATION-2.png";

const BecomeVolunteer = () => {
	return (
		<section className={styles.section}>
			<div className={styles.imageContainer}>
				<Image src={donation} alt="hero" className={styles.image} />
			</div>
			<div className={styles.register}>
				<h2 className={styles.h2}>Ready to volunteer?</h2>
				<p className={styles.p}>
					Ready to make an impact? Become a volunteer with We Care Foundation.
					Click the button to sign up and start changing lives. Your
					contribution matters. Join us in our mission today.
				</p>
				<Link href="/vol_form" className={styles.signup}>
					Register Now
				</Link>
			</div>
		</section>
	);
};

export default BecomeVolunteer;
