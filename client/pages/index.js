import Layout from '../components/layout/default'
import Head from 'next/head'
import Link from 'next/link';

const Index = props => (
  <Layout>
    <Head>
      <title>Nooooo!</title>
    </Head>

    <h1>News</h1>
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>
          <Link as={`/p/${post.id}`} href={`/post?id=${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <p>Index</p>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    posts: data.map(post => post)
  };
};


export default Index
