import Layout from '../components/Layout'
import "../dist/styles.css"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500;600&display=swap" rel="stylesheet" />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <Layout {...pageProps}>
            <Component {...pageProps} />
        </Layout>
        </>
    )
  }

  MyApp.getInitialProps = async({ Component, ctx }) => {
      let pageProps
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      } 

      return {
          pageProps
      }
  }

  
  export default MyApp