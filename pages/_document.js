import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
     <html>
       <Head>
          <link rel="stylesheet" type="text/css" href="/static/normalize.css" />
          <link rel="stylesheet" type="text/css" href="/static/skeleton.css" />
          <link rel="stylesheet" type="text/css" href="/static/styles.css" />
       </Head>
       <body className="main">
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
