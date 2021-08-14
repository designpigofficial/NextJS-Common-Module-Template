import Page from '@fpage';
import Link from '@link';
import Image from '@image';

import doggoImg from '@passets/loading_image_example.jpg';

export default function Page2() {
  return (
    <Page headTags={['<title>/Page2</title>']}>
      <h1>Page2</h1>
      <br />
      <h4>The doggo is rendered with the custom Image component which shows a customizable loader element while the image is loading</h4>
      <br />
      <Image src={doggoImg} width={1020} height={1120} />
      <br />
      <Link href='/'>Go to Home</Link>
    </Page>
  );
};