import React from "react";
import styles from "./projectStyles.module.scss";
import classNames from "classnames";
import Image from "next/image";
import donation from "../../public/DONATION-2.png";

const Project2 = ({ className }) => {
	const mulProperties = classNames(styles.projects, styles.project2, className);

	return (
		<section className={mulProperties}>
			<div className={styles.imageContainer}>
				<Image src={donation} alt="hero" className={styles.image} />
			</div>
			<div className={styles.descriptionContainer}>
				<h2 id="projectName">Maiden Donation</h2>
				<p id="description">
					On 15th December, 2023, We Care Health Foundation visited the Greater
					Accra Regional Hospital Formerly Ridge Hospital to make a generous
					donation to three babies at the Neonatal Intensive Care Unit. The
					three babies who had been scheduled for surgeries but due to the
					financial constraints of their parents could not get it done swiftly.
					Due to the hefty amount of the three surgeries, We Care Health
					Foundation was able to pay for the medications needed to prep these
					babies up for surgery.
				</p>
			</div>
		</section>
	);
};

export default Project2;
