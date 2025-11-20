import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
{
    title: 'Overview',
    link:"../../docs/overview",
    Svg: require('../../static/img/getting_started.svg').default,
    description: (
      <>
        Introduction, purpose, audience, and usage guide for Forest Stack platform.
      </>
    ),
  },
  {
    title: 'Navigating the Home Page',
    link:"../../docs/navigating_home_page/overview",
    Svg: require('../../static/img/consuming_data.svg').default,
    description: (
      <>
        Homepage layout, navigation options, features, and resources.
      </>
    ),
  },
  {
    title: 'Login/Registration for Users, Joining Organisations',
    link:"../../docs/registration/registration_users",
    Svg: require('../../static/img/datasets.svg').default,
    description: (
      <>
		Stepwise registration, login, and organisation registration processes.
      </>
    ),
  },
  {
    title: 'Platform Capabilities (Datasets/Models/Usecases)',
    link:"../../docs/platform_capabilities/platform_capabilities",
    Svg: require('../../static/img/provider.svg').default,
    description: (
      <>
        Discover, upload, manage, and download Forest Stack platform assets.	  </>
    ),
  },
  {
    title: 'Understanding User Roles',
    link:"../../docs/understanding_user_roles/understanding_user_roles",
    Svg: require('../../static/img/Api.svg').default,
    description: (
      <>
        Describes platform user roles, permissions, up-gradation process, and profile management.
      </>
    ),
  },
  {
    title: 'Accessing Help and Support Services',
    link:"../../docs/accessing_help_support_services/faq",
    Svg: require('../../static/img/subscribe.svg').default,
    description: (
      <>
        Find help using FAQs, submit tickets, or access support resources.         </>
    ),
  },
];

function Feature({Svg, link, title, description}) {
  return (
    
    <a className={`${clsx('col col--4')} ${styles.featureCard}`} href={link}><div className={clsx('border border--1')}>
    <div classname={styles.featureCard}>
    <div className="text--center">
      <Svg className={styles.featureSvg} alt={title} />
    </div>
    <div className="text--center padding-horiz--md">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
  </div></a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
