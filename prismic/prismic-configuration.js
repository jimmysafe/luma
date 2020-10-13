import Prismic from 'prismic-javascript'
 
export const apiEndpoint = process.env.PRISMIC_API_ENDPOINT
export const accessToken = ''


// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)
 
const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export const linkResolver = (doc) => {
  switch(doc.type){
    case 'page':
      return `/${doc.uid}`
    case 'product':
      return `/products/${doc.uid}`
    default:
      return '/'
  }
}
  
export const hrefResolver = (doc) => {
  switch(doc.type){
    case 'page':
      return `/[page]`
    case 'product':
      return `/products/[product]`
    default:
      return '/[page]'
  }
}
