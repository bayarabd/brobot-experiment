import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg"
                to="https://www.youtube.com/watch?v=aHnVQ8KmOVw"
                style={{border: '2px dotted red'}}>
              <div>Introductory Video ️<i>13 min</i> ⏱</div>
          </Link>
        </div>
        <div>
          <Link className="button button--secondary button--lg" to="visualAPI"
                style={{border: '2px dotted red'}}>
              <div>The Visual API ️<i>white paper</i> </div>
          </Link>
        </div>
        <div><br />Free, open source, and built with care for researchers and the entire AI community.</div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
