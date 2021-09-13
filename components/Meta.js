import Head from "next/head"

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-wirth, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "WebDev Newz",
  keywords: "web development, programming",
  description: "Get the lates news in web dev",
}

export default Meta
