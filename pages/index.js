import ArticleList from "../components/ArticleList"
import Meta from "../components/Meta"

export default function Home({ articles }) {
  return (
    <div>
      <Meta />
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("http://192.167.167.66:8080/prod/article/list")
  if (res.status === 200) {
    const { data } = await res.json()
    const articles = data.list
    return {
      props: {
        articles,
      },
    }
  }
}
