/* WRAPPER COMPONENT WHICH WILL ALWAYS INSER THE a TAG IN THE DOM (For better SEO) */

import styles from './Link.module.css';
import Link from 'next/link';

export default function _Link(props) {
  /* Pass the 'as' prop if you are using
      href={{
        pathname: '',
        query: {}
      }}
  */
  return (
    <Link {...props}>
      <a data-wrapper-link='' href={props.as ? props.as : props.href} style={props.style ? props.style : null} className={styles.link} tabIndex='-1'>
        {props.children}
      </a>
    </Link>
  );
}