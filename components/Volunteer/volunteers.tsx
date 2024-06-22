"use client"; // Ensure this component is rendered on the client side

import { FC, useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import styles from "./volunteers.module.scss";
import scroll from "./autoscroll.module.scss"
import classNames from "classnames";
import { volunteers, VolunteerType } from "./volunteersData";

const VolunteersPage: FC = () => {
	const mulProperties = classNames(styles.volunteersContainer, scroll.container);
	const [volunteerData, setVolunteerData] = useState<VolunteerType[]>([]);

	useEffect(() => {
		// Set the volunteer data from the imported file
		setVolunteerData(volunteers);
	}, []);

	return (
		<div className={mulProperties}>
			<div className={scroll.scroll}>
			{volunteerData.map((volunteer) => (
				<ProfileCard key={volunteer.id} volunteer={volunteer} />
			))}
			</div>
			<div className={scroll.fade}></div>
		</div>
	);
};

export default VolunteersPage;
