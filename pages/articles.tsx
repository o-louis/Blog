import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getSortedPostsData } from '../lib/posts';

import Date from '../components/Date';
import Layout from "../components/Layout";

interface Props {
  allPostsData: Array<{
    id: string;
    date: string;
    title: string;
  }>;
}

export default function Articles({ allPostsData }: Props) {
  return (
    <Layout>
      <section className="py-10">
        {allPostsData.map(({ id, date, title }) => (
          <article key={id} className="py-10  px-4 border-b border-gray-800 hover:text-tertiary">
            <Link  href={`/posts/${id}`}>
              <a className="flex justify-between align-center">
                <span className="text-xl">{title}</span>
                <Date dateString={date} className="text-md text-gray-500" />
              </a>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  ) 
}

export const getStaticProps: GetStaticProps = () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}