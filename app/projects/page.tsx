import React from "react";
import Header from "../../components/Header";
import { Project1, Project2, Project3 } from "../../components";
import styles from "./projects.module.scss";

const Page = () => {
	return (
		<section className={styles.section}>
			<Header heading="Projects" className={styles.header} />
			<div className={styles.subSection}>
				<Project1 className={styles.project1} />
				<Project2 className={styles.project2} />
				<Project3 className={styles.project3} />
			</div>
		</section>
	);
};

export default Page;
