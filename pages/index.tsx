import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Image from 'next/image';
import Date from '../components/Date';
import Layout from '../components/Layout';
import { getSortedPostsData, TArticle } from '../lib/posts';
import { buildImage } from '../lib/utils';

interface HomeProps {
  allPostsData: TArticle[];
}

interface ArticleCardProps extends TArticle {
  width: number;
  height: number;
  isLatestPost: boolean;
}

const ArticleCard = ({
  id,
  title,
  image,
  width,
  height,
  date,
  description,
  isLatestPost,
}: ArticleCardProps) => (
  <li
    key={id}
    className={`flex flex-col ${isLatestPost && 'md:flex-row md:col-span-3'}`}
  >
    <Image
      src={image}
      alt={title}
      width={width}
      height={height}
      className="object-cover rounded-md"
    />
    <div className={`flex flex-col max-w-md ${isLatestPost && 'md:ml-8'}`}>
      <Date
        dateString={date}
        className={`text-sm text-gray-500 mt-4 ${isLatestPost && 'md:mt-0'}`}
      />
      <Link href={`/articles/${id}`}>
        <a className="flex flex-col mt-2">
          <span
            className={`font-semibold text-xl ${isLatestPost && 'md:text-3xl'}`}
          >
            {title}
          </span>
          <span
            className={`mt-4 fomt-medium text-paragraph text-sm ${
              isLatestPost && 'md:text-lg'
            }`}
          >
            {description}
          </span>
        </a>
      </Link>
    </div>
  </li>
);

export default function Home({ allPostsData }: HomeProps) {
  const width = 400;
  const height = 210;

  return (
    <Layout>
      <Head>
        <title>Blog - FrontEnd Dev</title>
      </Head>
      <section className="mt-14">
        <h1 className="text-5xl font-bold">Recent</h1>
        <ul className="mt-8 flex flex-col gap-14 md:grid md:grid-cols-3">
          {allPostsData.slice(0, 4).map((post, idx) => {
            const isLatestPost = idx === 0;
            const urlImage = buildImage(post.image, width, height);
            return (
              <ArticleCard
                key={post.id}
                width={width}
                height={height}
                isLatestPost={isLatestPost}
                image={urlImage}
                {...post}
              />
            );
          })}
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
};
