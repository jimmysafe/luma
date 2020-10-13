import { Client } from './prismic-configuration'

export async function fetchDocs(page = 1, routes = []) {
  const response = await Client().query('', { pageSize: 100, lang: '*', page });
  const allRoutes = routes.concat(response.results);
  if (response.results_size + routes.length < response.total_results_size) {
    return fetchDocs(page + 1, allRoutes);
  }
  return [...new Set(allRoutes)];
};

export const getPosts = async () => {
  const allRoutes = await fetchDocs()
  return allRoutes.filter(doc => doc.type === 'blog_post').slice(0, 5)
}

export const getSinglePost = async (uid) => {
    const post = await Client().getByUID("blog_post", uid)
    return post
}

export const getPages = async () => {
    const allRoutes = await fetchDocs() 
    return allRoutes.filter(doc => doc.type === 'page')
}

export const getProducts = async (category) => {
  const allRoutes = await fetchDocs() 
  return allRoutes.filter(doc => doc.type === category)
}

export const getSinglePage = async (uid) => {
    const page = await Client().getByUID("page", uid)
    return page
}

export const getSingleProduct = async (uid) => {
  const gastronomicProduct = await Client().getByUID("prodotto_gastronomia", uid)
  if(!gastronomicProduct){
    const cosmeticProduct = await Client().getByUID("prodotto_cosmetica", uid)
    return cosmeticProduct
  } else return gastronomicProduct
}

