import React, { useState } from 'react';
import Image from 'next/image';

import styles from './Image.module.css';

export default function _Image(props) {
  const [loaded, setLoaded] = useState();

  const {wrapperClasses, loaderClasses, container, ...imageProps} = props;
  const hasContainer = !!container;

  const wrapperLoaderContainerDimensions =
    !!imageProps.width && !!imageProps.height
      ? { width: imageProps.width, height: imageProps.height }
      : {};

  const _Image = (
    <div className={wrapperClasses} style={{width: '100%', height: '100%'}} data-image-render-wrapper=''>
      {!loaded && (
        <div
          className={`${styles.loading} ${loaderClasses ? loaderClasses : ''}`}
          data-image-render-loading-anim
          style={wrapperLoaderContainerDimensions}
        ></div>
      )}
      <Image {...imageProps} onLoadingComplete={setLoaded.bind(true)} />
    </div>
  );

  return !hasContainer ? _Image : React.cloneElement(container, null, _Image);
};