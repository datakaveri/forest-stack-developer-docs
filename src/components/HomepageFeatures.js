import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
{
    title: 'Overview',
    link:"../../docs/overview",
    Svg: require('../../static/img/overview.svg').default,
    description: (
      <>
        Introduction, purpose, audience, and usage guide for Forest Stack platform.
      </>
    ),
  },
  {
    title: 'Navigating the Home Page',
    link:"../../docs/navigating_home_page/introduction",
    Svg: require('../../static/img/navigate.svg').default,
    description: (
      <>
        Homepage layout, navigation options, features, and resources.
      </>
    ),
  },
  {
    title: 'Login/Registration for Users, Joining Organisations',
    link:"../../docs/registration/introduction",
    Svg: require('../../static/img/login.svg').default,
    description: (
      <>
		Stepwise registration, login, and organisation registration processes.
      </>
    ),
  },
      {
        title: 'Admin Workflow',
        link:"../../docs/admin_workflows/introduction",
        Svg: require('../../static/img/user.svg').default,
        description: (
          <>
          Covers administrative controls for managing users, organisations, and assets across the platform.
          </>
        ),
      },
  {
    title: 'Platform Capabilities (Datasets/Models/Usecases)',
    link:"../../docs/platform_capabilities/introduction",
    Svg: require('../../static/img/capability.svg').default,
    description: (
      <>
        Discover, upload, manage, and download Forest Stack platform assets.	  </>
    ),
  },
  {
    title: 'Understanding User Roles',
    link:"../../docs/understanding_user_roles/introduction",
    Svg: require('../../static/img/user.svg').default,
    description: (
      <>
        Describes platform user roles, permissions, up-gradation process, and profile management.
      </>
    ),
  },

      {
        title: 'API Documentation',
        link:"../../docs/api_documentation_dataset_access_overview/introduction",
        Svg: require('../../static/img/user.svg').default,
        description: (
          <>
          Provides an overview of Forest Stack APIs, authentication flow, dataset access endpoints.
          </>
        ),
      },
  {
    title: 'Accessing Help and Support Services',
    link:"../../docs/accessing_help_support_services/introduction",
    Svg: require('../../static/img/help-user.svg').default,
    description: (
      <>
        Find help using FAQs, submit tickets, or access support resources.         </>
    ),
  },
];

function Feature({Svg, link, title, description}) {
  return (
    <a className={`${clsx('col col--3')} ${styles.featureCard}`} href={link}>
      <div className={styles.cardBox}>
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title} />
        </div>

        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
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
