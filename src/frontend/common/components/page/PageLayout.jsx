import Navbar from '@fmodules/navbar/Navbar';
import Footer from '@fmodules/footer/Footer';

import styles from './PageLayout.module.css';

export default function Layout({children}) {
  return (
    <>
      <Navbar />
      <main id="content" className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};