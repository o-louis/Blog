import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps, GetStaticPaths } from 'next';

import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/Layout';
import Date from '../../components/Date';
import { buildImage } from '../../lib/utils'

interface Props {
  postData: {
    title: string;
    date: string;
    image?: string;
    contentHtml: string;
    tags: string[],
  }
}

export default function Post({ postData }: Props) {
  const width = 1024;
  const height =  384;
  const urlImage = buildImage(postData.image, width, height);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="mt-14 max-w-full">
        <Image
          src={urlImage}
          title={postData.title}
          width={width}
          height={height}
          className="object-cover"
        />
        <div className="px-8 flex flex-col">
          <h1 className="mt-8 text-3xl font-bold text-main">{postData.title}</h1>
          <Date dateString={postData.date} className="mt-4 text-gray-500" />
          <div className="prose mt-10 text-lg text-paragraph font-light" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}