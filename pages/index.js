import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey there, I'm Alsonn Joseph C. Guanlao, and I'm on an electrifying journey as a 3rd-year Computer Engineering student. From the intricate dance of circuits to the captivating symphony of code, I'm wholeheartedly captivated by the world of technology.</p>
        <p>As a die-hard fan of Seventeen, I've not only harmonized with their melodies but also found harmony in the world of gaming. When I'm not immersed in the virtual realm, I'm leading the charge as the President of the ICpEP.se UA Chapter. Collaborating with fellow enthusiasts, I'm steering the ship toward innovation in electronics and computer engineering.</p>
        <p>But that's not all, my passions extend beyond the digital realm. The piano and guitar are my constant companions, guiding me through the rhythm of life. I pour my heart and soul into crafting musical notes that resonate with my very essence.</p>
        <p>The path of Computer Engineering was my true calling, my first choice fueled by an insatiable curiosity for computers and technology. Looking ahead, I envision myself as an electronics inventor, a trailblazing programmer, or perhaps a visionary app developer. The prospect of shaping the future through innovation and creativity ignites a fire within me.</p>
        <p>So, whether I'm decoding complex algorithms, jamming to Seventeen's beats, conquering virtual realms, leading ICpEP.se to new horizons, or composing melodies on my beloved instruments, I'm embracing every moment with boundless energy and determination. Join me as we dive into the exciting currents of technology and creativity, where the possibilities are as limitless as our aspirations!
</p>
      </section>
    </Layout>
  );
}