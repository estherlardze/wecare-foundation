"use client"; // Ensure this component is rendered on the client side

import { FC, useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import styles from "./volunteers.module.scss"; // Adjust the import based on your setup
import { volunteers, VolunteerType } from "./volunteersData";

const VolunteersPage: FC = () => {
	const [volunteerData, setVolunteerData] = useState<VolunteerType[]>([]);

	useEffect(() => {
		// Set the volunteer data from the imported file
		setVolunteerData(volunteers);
	}, []);

	return (
		<div className={styles.volunteersContainer}>
			{volunteerData.map((volunteer) => (
				<ProfileCard key={volunteer.id} volunteer={volunteer} />
			))}
		</div>
	);
};

export default VolunteersPage;
