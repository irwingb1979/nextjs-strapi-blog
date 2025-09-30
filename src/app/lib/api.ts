const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

// Helper function to get full image URL
export const getImageUrl = (url: string) => {
    // If url is already absolute, return it as-is
    const isAbsolute = /^https?:\/\//i.test(url);
    const fullUrl = isAbsolute ? url : `${STRAPI_URL}${url}`;
    console.log('getImageUrl', { STRAPI_URL, url, fullUrl });
    return fullUrl;
};

export const getArticles = async () => {
    const response = await fetch(`${STRAPI_URL}/api/articles?populate=*`);
    const data = await response.json();
    return data.data;
};

export const getAuthors = async () => {
    const response = await fetch(`${STRAPI_URL}/api/authors?populate=*`);
    const data = await response.json();
    console.log(data.data);
    
    return data.data;
};

export const getArticleBySlug = async (slug: string) => {
    const response = await fetch(`${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`);
    const data = await response.json();
    return data.data[0];
};

