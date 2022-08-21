import { GetStaticProps } from 'next';
import { getSortedPostsData } from '../lib/posts';

import { useEffect, useState } from 'react';
import Article from '../components/Article';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';

interface Props {
  allPostsData: Array<{
    id: string;
    date: string;
    title: string;
    tags: string[];
  }>;
}

export default function Articles({ allPostsData }: Props) {
  const [search, setSearch] = useState('');
  const [articles, setArticles] = useState(allPostsData);

  useEffect(() => {
    const searchResult = allPostsData.filter((posts) =>
      posts.title.includes(search)
    );
    setArticles(searchResult);
  }, [search]);

  return (
    <Layout>
      <SearchBar setSearch={setSearch} />
      <section className="py-10">
        {articles.slice(0, 10).map((article) => (
          <Article key={article.id} article={article} />
        ))}
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
