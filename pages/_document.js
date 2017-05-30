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
         <div className="container">
           <div className="row">
            <div className="one column"></div>
            <div className="ten columns">
              <Main />
            </div>
            <div className="one column"></div>
          </div>
         </div>
         <NextScript />
       </body>
     </html>
    )
  }
}
