import { GetStaticProps } from 'next';
import { getSortedPostsData, TArticle } from '../lib/posts';

import { useEffect, useState } from 'react';
import Article from '../components/Article';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import SearchByTags from '../components/SearchByTags';

interface ArticlesProps {
  allPostsData: TArticle[];
}

export default function Articles({ allPostsData }: ArticlesProps) {
  const [search, setSearch] = useState('');
  const [filterTags, setFilterTags] = useState([]);
  const [articles, setArticles] = useState(allPostsData);

  const availableTags: string[] = [
    ...new Set(allPostsData.map((post) => post.tags).flatMap((tag) => tag)),
  ];

  useEffect(() => {
    let searchResult = allPostsData;

    if (filterTags.length) {
      searchResult = searchResult.filter((posts) =>
        posts.tags.some((postTag) => filterTags.includes(postTag))
      );
    }

    if (search != '') {
      searchResult = searchResult.filter((posts) =>
        posts.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setArticles(searchResult);
  }, [search, filterTags]);

  return (
    <Layout>
      <SearchBar setSearch={setSearch} />
      <SearchByTags
        availableTags={availableTags}
        setFilterTags={setFilterTags}
      />
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
