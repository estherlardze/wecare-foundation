"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../../components/Header';
import { ProjectIntro, Project1, Project2, ProjectGallery } from '../../components';
import styles from './projects.module.scss';

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      once: true, // Animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <section className={styles.section}>
      <Header heading="Projects" className={styles.header} data-aos="fade-up" />
      <div className={styles.subSection}>
        <div className={`${styles.projectIntro} ${styles.aosFadeUp}`} data-aos="fade-up">
          <h2>We Care Health Foundation Projects</h2>
          <p>
            Our projects are aimed at extending much-needed support and funding
            towards the welfare of children with health challenges. We Care
            Health Foundation envisions resolving health and social problems by
            adopting a collaborative, evidence-based approach. Our efforts
            include aid for child health, medical assistance, health education
            at the community level, and empowerment for women&apos;s health. We,
            therefore, attach the highest priority to seeing that children get
            the necessary care and help to make their lives healthy and
            meaningful. Since the inception of We Care Health Foundation in 2021, there has
            so far assisted five children with varying health complications that
            needed urgent interventions.
          </p>
        </div>
        {/* <div className={`${styles.div} ${styles.aosFadeUp}`} data-aos="fade-up">
          <p>
            
          </p>
        </div> */}
        <div className={styles.aosFadeUp} data-aos="fade-up">
          <ProjectIntro />
        </div>
        <div className={styles.aosFadeUp} data-aos="fade-up">
          <Project1 />
        </div>
        <div className={styles.aosFadeUp} data-aos="fade-up">
          <Project2 />
        </div>
        <div className={styles.aosFadeUp} data-aos="fade-up">
          <ProjectGallery />
        </div>
      </div>
    </section>
  );
};

export default Page;
