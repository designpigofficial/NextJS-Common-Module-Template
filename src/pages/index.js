import Page from '@fpage';
import Link from '@fcommon/components/wrappers/link/Link';

export default function Home() {
  return (
    <Page headTags={['<title>Home</title>']}>
      <h1>Hello World!</h1>
      <br/>
      <Link href='/page2'>Go to Page2 to see a nice doggo 🐕</Link>
    </Page>
  );
};