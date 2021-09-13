import Link from "next/link"
import Meta from "../../../components/Meta"
// import Image from "next/image"

const Article = ({ article }) => {
  return (
    <>
      <Meta title={article.title}></Meta>
      <h1>{article.title}</h1>
      <p>{article.body}</p>

      {/* <Image
        src={article.avatar}
        alt="Picture of the author"
        width={100}
        height={100}
      /> */}
      <br></br>

      <Link href="/">Go Back</Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://192.167.167.66:8080/prod/article/info?id=${context.params.id}`
  )
  if (res.status === 200) {
    const { data } = await res.json()
    const article = data
    return {
      props: {
        article,
      },
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch("http://192.167.167.66:8080/prod/article/list")
  if (res.status === 200) {
    const { data } = await res.json()
    const articles = data.list
    const ids = articles.map((article) => article.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
    return {
      paths,
      fallback: false,
    }
  }
}

export default Article
