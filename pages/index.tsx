import NextImage from 'next/image';
import styles from '../styles/Home.module.css';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
      <>
          <NextSeo title={'Hello!'}/>
          <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Nilay Kapadia
                </div>

                <div className={styles.headerLinks}>
                    <div className={styles.headerLink}>
                        <a href="https://www.linkedin.com/in/nilaydkapadia">
                            <NextImage src="/linkedin.png" alt="LinkedIn" fill={true}/>
                        </a>
                    </div>

                    <div className={styles.headerLink}>
                        <a href="https://twitter.com/NilayDk">
                            <NextImage src="/twitter.png" alt="Twitter" fill={true}/>
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                Hi. I'm a pretty chill guy.
            </div>
          </div>
      </>
  );
}
