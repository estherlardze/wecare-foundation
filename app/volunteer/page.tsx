import React from "react";
import Header from "../../components/Header";
import Link from "next/link";
import { BeVolunteer } from "../../components";
import Volunteers from "../../components/Volunteer/volunteers";
import WhyVolunteer from "../../components/Volunteer/whyVolunteer";
import VolunteerWork from "../../components/Volunteer/volunteerWork";
import styles from "./volunteer.module.scss";

const Page = () => {
	return (
		<section>
			<Header heading="Volunteer" />

			<div className={styles.subContainer}>
				<h1 className={styles.h1}>
					Interested in volunteering with We Care Foundation?
				</h1>
				<p className={styles.p}>
					Here's all you need to know about joining our cause. For any
					inquiries, feel free to reach out
					<Link href="/contact">
						<span className={styles.link}> get involved with us</span>
					</Link>
					.
				</p>

				<BeVolunteer />
				<div className={styles.volContainer}>
				<WhyVolunteer />
				<VolunteerWork />
			</div>
			<div className={styles.VolMainContainer}>
				<Volunteers />
			</div>
			</div>
			
		</section>
	);
};

export default Page;
