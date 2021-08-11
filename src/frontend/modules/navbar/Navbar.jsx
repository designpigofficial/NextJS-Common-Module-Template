import { useContext } from 'react';
import Link from '@fcommon/components/wrappers/link/Link';
import ThemeContext from '@fmodules/theme/ThemeContext';

import styles from './Navbar.module.css';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useContext(ThemeContext);

  return (
    <div theme-apply-bg-sec="true" className={styles.container}>
      <Link href='/'><h2 className={styles.title}>Navbar</h2></Link>
      <span onClick={toggleColorMode} className={styles['theme-toggle']}>{colorMode === 'dark' ? 'Turn lights ON' : 'Turn lights OFF' }</span>
    </div>
  );
}