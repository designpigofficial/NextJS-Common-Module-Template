/* WRAPPER COMPONENT USED TO SET THE HEAD TAG INDIVIDUALLY FOR EACH PAGE */

import HeadTag from '@fcommon/components/wrappers/HeadTag';

export default function Home({headTags, children}) {
  return (
    <>
      {/* If you don't want to display the process.env.APP_NAME in the tab title, just pass the string with { / } in front */}
      <HeadTag tags={headTags} />
      {children}
    </>
  );
};