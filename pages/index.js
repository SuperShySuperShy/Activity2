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
        <p>Greetings, everyone! I'm Alsonn Joseph C. Guanlao, a passionate and driven 3rd-year Computer Engineering student. Beyond the world of circuits and algorithms, I'm a dedicated follower of the incredible boy group Seventeen, finding solace and inspiration in their music.</p>
        <p>When I'm not diving into the exciting realms of Computer Engineering, you'll often find me immersed in the virtual landscapes of gaming. I thrive on the challenges and victories that gaming brings, always seeking new adventures and experiences.</p>
        <p>Adding to my diverse repertoire, I'm honored to serve as the President of the ICpEP.se UA Chapter. Guiding and collaborating with fellow students to foster growth and innovation in the field of electronics and computer engineering is a role I hold close to my heart.</p>
        <p>But wait, there's more! Music is my soul's language, and I express myself through the soothing notes of the piano and the rhythmic strums of the guitar. Whether I'm unwinding after a busy day of studies or infusing creativity into my free time, these instruments are my companions on this melodious journey.</p>
        <p>So, whether I'm exploring the intricacies of engineering, jamming to Seventeen's beats, conquering virtual worlds, leading ICpEP.se to new heights, or serenading the universe with my musical talents, I'm constantly embracing the many facets of life with enthusiasm and zeal. Let's connect and share our passions, I can't wait to get to know fellow spirits who share my love for all things extraordinary!

</p>
      </section>
    </Layout>
  );
}