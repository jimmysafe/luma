import { getSinglePage } from '../prismic/queries'
import Seo from '../components/Seo'
import Slice from '../components/Slice'

const Home = ({ page }) => {
  console.log(page)
  return (
    <>
        {/* <Seo page={page} />  */}
        <div className="page-content">
            {page.data.body.map((slice, i) => (
                <Slice key={i} slice={slice} page={page}/>
            ))}
        </div>
    </>
  )
}

export async function getServerSideProps({ res, query }) {
  const page = await getSinglePage('homepage')
  return {
    props: {
        page: page || null
    }
  }
}


export default Home