import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import Image from 'next/image';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/Date';
import { buildImage } from '../lib/utils'

interface Props {
  allPostsData: Array<{
    id: string;
    date: string;
    title: string;
    image?: string;
    description: string;
  }>;
}

export default function Home({ allPostsData }: Props) {
  const width = 400;
  const height = 210;

  return (
    <Layout home>
      <Head>
        <title>Blog - FrontEnd Dev</title>
      </Head>
      <section className="mt-14">
        <h1 className="text-5xl font-bold">Recent</h1>
        <ul className="mt-8 grid gap-14 grid-cols-3">
          {allPostsData.slice(0, 4).map(({ id, date, title, image, description }, idx) => {
            const isLatestPost = idx === 0;
            const urlImage = buildImage(image, width, height);
            return (
              <li key={id} className={`flex ${isLatestPost ? 'col-span-3' : 'flex-col'}`}>
                <Image
                  src={urlImage}
                  alt={title}
                  width={width}
                  height={height}
                  className="object-cover rounded-md"
                />
                <div className={`flex flex-col max-w-md ${isLatestPost ? 'ml-8' : '' }`}>
                  <Date dateString={date} className={`text-sm text-gray-500 ${isLatestPost ? '' : 'mt-4' }`} />
                  <Link href={`/articles/${id}`}>
                    <a className="flex flex-col mt-2">
                      <span className={`font-semibold ${isLatestPost ? 'text-3xl' : 'text-xl'}`}>{title}</span>
                      <span className={`mt-4 fomt-medium text-paragraph ${isLatestPost ? 'text-lg' : 'text-sm'}`}>{description}</span>
                    </a>
                  </Link>
                </div>
              </li>
            )})}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}