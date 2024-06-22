"use client";

import Link from "next/link";
import classNames from "classnames";
import styles from "./projectStyles.module.scss";
import Image from "next/image";
import donation from "../../public/project pic.jpg";

type Project1Props = {
	className?: string;
};

const Project1: React.FC<Project1Props> = ({ className }) => {
	const mulProperties = classNames(styles.projects, styles.project1, className);

	return (
		<section className={mulProperties}>
			<div className={styles.imageContainer}>
				<Image src={donation} alt="hero" className={styles.image} />
				<h6>
					The above photo is a newspaper publication after the official
					launching ceremony of We Care Health Foundation in Accra, 12th
					November, 2021. Captured by Chronicles Newspaper
				</h6>
			</div>
			<div className={styles.descriptionContainer}>
				{/* <h2 id="projectName">Maiden Donation</h2> */}
				<p>
					The foundation after the conception of its vision and idea was
					officially launching at the Kofi Annan Center of Excellence in ICT,
					North Ridge on 12th November, 2021. The event witnessed the attendance
					of friends, families and members of the foundation at the time.
				</p>
			</div>
		</section>
	);
};

export default Project1;
