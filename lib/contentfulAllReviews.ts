import { title } from "process";

const gqAllReviewsQuery = `query getAllReviews{
    reviewsCollection {
      items {
        picture{
            title
            url
        }
        alt
        name
        apartment
        stars
        text
      }
    }
  }
`;


const getReviewsByApartmentQuery = `query getReviewsByApartment ($apartment: String) {
    reviewsCollection(where: {apartment: $apartment}) {
      items {
        picture {
          title
          url
        }
        alt
        name
        apartment
        stars
        text
      }
    }
  }`;

  const gqTwoReviewsQuery = `query getTwoReviews{
    reviewsCollection (limit:2) {
      items {
        picture{
            title
            url
        }
        alt
        name
        apartment
        stars
        text
      }
    }
  }
`;


export interface reviewsCollectionResponse {
    reviewsCollection: {
        items: reviewsItem[];
    }
}

export interface reviewsItem{
    picture:{
        title:string;
        url:string;
      }
      alt:string;
      name:string;
      apartment:string;
      stars:number;
      text:string;
}

const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;


const getAllReviews = async (): Promise<reviewsItem[]> => {
    try{
        const response = await fetch(baseUrl, {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
            },
            body:JSON.stringify({query:gqAllReviewsQuery}),
        });
        const body = (await response.json()) as {data: reviewsCollectionResponse}

        const reviewsCollection = body.data.reviewsCollection.items.map(
            (item)=>({
            picture:item.picture,
            alt:item.alt,
            name:item.name,
            apartment:item.apartment,
            stars:item.stars,
            text:item.text
        }));
        
        return reviewsCollection;
    } catch(error){
        console.error("Error fetching reviews:", error);
        return [];
    }
};

const getReviewsByApartment = async (apartment: string): Promise<reviewsItem[]> => {
  console.log('Apartment:', apartment); // Debug statement
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query: getReviewsByApartmentQuery, variables: { apartment } }),
    });

    const body = (await response.json()) as { data: reviewsCollectionResponse };
    console.log('Response Body:', body); // Debug statement

    return body.data.reviewsCollection.items;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
};

const getTwoReviews = async (): Promise<reviewsItem[]> => {
  try{
      const response = await fetch(baseUrl, {
          method:'POST',
          headers:{
              'Content-Type':'application/json',
              Authorization:`Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
          },
          body:JSON.stringify({query:gqTwoReviewsQuery}),
      });
      const body = (await response.json()) as {data: reviewsCollectionResponse}

      const reviewsCollection = body.data.reviewsCollection.items.map(
          (item)=>({
          picture:item.picture,
          alt:item.alt,
          name:item.name,
          apartment:item.apartment,
          stars:item.stars,
          text:item.text
      }));
      return reviewsCollection;
  } catch(error){
      console.error("Error fetching reviews:", error);
      return [];
  }
};


const getReviews = {
    getReviewsByApartment,
    getAllReviews,
    getTwoReviews
};


export default getReviews;
