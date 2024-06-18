"use client"; // Ensure this component is rendered on the client side

import { FC } from "react";
import Image from "next/image";
import styles from "./profile-card.module.scss";
import { FaEnvelope, FaWhatsapp, FaTimes, FaFacebook } from "react-icons/fa"; // Import icons

type VolunteerType = {
	name: string;
	photo: string;
	role: string;
	description: string;
	id: number;
};

type ProfileCardProps = {
	volunteer: VolunteerType;
};

const ProfileCard: FC<ProfileCardProps> = ({ volunteer }) => {
	return (
		<div className={styles.profileCard}>
			<div className={styles.volunteerCard}>
				{volunteer.photo && (
					<Image
						className={styles.imageContainerIcon}
						src={volunteer.photo}
						alt={volunteer.name}
						width={150}
						height={150}
					/>
				)}
			</div>
			<div className={styles.profileInfo}>
				<h3 className={styles.name}>{volunteer.name}</h3>
			</div>
			<div className={styles.profileInfo1}>
				<div className={styles.rolePosition}>{volunteer.role}</div>
			</div>
			<div className={styles.profileDescription}>
				<p className={styles.descriptionText}>{volunteer.description}</p>
			</div>
			<div className={styles.contactIcons}>
				<div className={styles.socialMediaIcons}>
					<FaEnvelope className={styles.icon} />
					<FaWhatsapp className={styles.icon} />
					<FaTimes className={styles.icon} />
					<FaFacebook className={styles.icon} />
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
