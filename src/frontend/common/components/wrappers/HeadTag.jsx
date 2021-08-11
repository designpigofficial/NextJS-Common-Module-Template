/* WRAPPER FOR THE head TAG USED INSIDE THE Page COMPONENT*/

import Head from 'next/head';
import HTMLParse from 'html-react-parser';
import IS_DEV_ENV from '@shared/isDevEnv';

export default function HeadTag({tags}) {
    return (
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
          key='viewport'
        ></meta>

        {tags &&
          tags.map((tagString, keyId) => {
            if (tagString.includes('title')) {
              const addAppName = !tagString.includes('>/');
              const appName = process.env.NEXT_PUBLIC_APP_NAME;
              const appNamePageDelimiter = process.env.NEXT_PUBLIC_APP_NAME_DELIMITER;

              if (appName && appNamePageDelimiter) {
                if (addAppName)
                  tagString = tagString.replace(
                    '>',
                    `>${appName}${appNamePageDelimiter}`
                  );
                else tagString = tagString.replace('>/', '>');
              } else {
                if (IS_DEV_ENV)
                  console.warn('NEXT_PUBLIC_APP_NAME or NEXT_PUBLIC_APP_NAME_DELIMITER missing from .env.local');
              }
            }

            if (!tagString.includes('key'))
              tagString = tagString.replace('>', ` key="${keyId}">`);

            return HTMLParse(tagString);
          })}
      </Head>
    );
};