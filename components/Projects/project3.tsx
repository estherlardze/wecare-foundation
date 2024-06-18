import React from "react";
import styles from "./projectStyles.module.scss";
import classNames from "classnames";
import Image from "next/image";
import donation from "../../public/DONATION-2.png";

const Project3 = ({ className }) => {
	const mulProperties = classNames(styles.projects, styles.project3, className);

	return (
		<section className={mulProperties}>
			<div className={styles.imageContainer}>
				<Image src={donation} alt="hero" className={styles.image} />
			</div>
			<div className={styles.descriptionContainer}>
				<h2 id="projectName">Donation to babies in NICU</h2>
				<p id="description">
					A total of five lives impacted within our close to three years of
					existence. An amount of GHS 6000.00 has been used to support these
					lovely children.
				</p>
			</div>
		</section>
	);
};

export default Project3;
