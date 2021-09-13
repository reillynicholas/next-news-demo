import articleStyles from "../styles/Article.module.css"
import ArticleItem from "./ArticleItem"

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article, key) => (
        <ArticleItem key={key} article={article} />
      ))}
    </div>
  )
}

export default ArticleList
