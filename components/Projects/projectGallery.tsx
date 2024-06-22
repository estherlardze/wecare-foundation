import React from "react";
import styles from "./projectStyles.module.scss";
import Image from "next/image";
import donation from "../../public/DONATION-2.png";
import donation2 from "../../public/DONATION-1.png";
import donation3 from "../../public/project pic3.png";

const Gallery = () => {
	return (
		<section className={styles.gallery}>
			<div>
				<Image src={donation} alt="hero" className={styles.image} />
				<p>
					Officials of We Care Health Foundation on the Children&apos;s ward.
					Captured by Chronicles Newspaper.
				</p>
			</div>
			<div>
				<Image src={donation2} alt="hero" className={styles.image} />
				<p>
					The above picture is a newspaper publication of the donation at the
					Greater Accra Regional Hospital on 15th December, 2023. Captured by
					Daily Guide Newspaper.
				</p>
			</div>
			<div>
				<Image src={donation3} alt="hero" className={styles.image} />
				<p>
					Captured by Chronicles Newspaper. A total of five lives impacted
					within our close to three years of existence. An amount of GHS6000.00
					has been used to support these lovely children.
				</p>
			</div>
		</section>
	);
};

export default Gallery;
