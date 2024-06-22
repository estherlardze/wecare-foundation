import React from "react";
import Header from "../../components/Header";
import VolunteerForm from "../../components/Volunteer/volunteer_form/form";

import styles from "./volForm.module.scss";

const VolunteerFormPage = () => {
	return (
		<div >
			<Header heading="Register Now" />

			<div className={styles.formPageContainer}>

			<VolunteerForm />
			</div>
		</div>
	);
};

export default VolunteerFormPage;
