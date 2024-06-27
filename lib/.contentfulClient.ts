const gqAllApartmentsQuery = `query getAllApartments {
  apartmentsCollection {
    items {
      apartmentId
      picture {
        title
        url
      }
      title
      location
      size
      priceNumber
      apartment
      specialOffer
      imagesCollection {
        items {
          url
          title
        }
      }
    }
  }
}`;

const getApartmentByIdQuery =  `query getApartmentById ($apartmentId:String) {
  apartmentsCollection(where : {apartmentId:$apartmentId}){
    items {
      picture {
        title
        url
      }
      title
      location
      size
      priceNumber
      apartment
      specialOffer
      apartmentId
      imagesCollection {
        items {
          url
          title
        }
      }
    }
  }
}`


const gqAllSpecialOffersQuery = `query getAllSpecialoffers {
  apartmentsCollection(where: {specialOffer_not_in: 0}) {
    items {
      sys {
        id
      }
      picture {
        title
        url
      }
      title
      location
      size
      priceNumber
      apartment
      specialOffer
      apartmentId
      imagesCollection {
        items {
          url
          title
        }
      }
    }
  }
}`;

const gqAllApartmentPhotos = `query getAllApartmentPhotos($apartmentId:String){
  apartmentsCollection(where: {apartmentId: $apartmentId}){
    items{
     imagesCollection{
          items{
            title
            url
          }
        } 
    }
  }
}`;

export interface images {
  title: string;
  url: string;
}

export interface imagesCollection {
  items: images[];
}

export interface apartmentsItem {
  apartmentId: string;
  picture: {
    title: string;
    url: string;
  };
  title: string;
  location: string;
  size: string;
  priceNumber: number;
  apartment: boolean;
  specialOffer: number;
  imagesCollection: imagesCollection ; 
}


export interface ApartmentsCollectionResponse {
  apartmentsCollection: {
    items: {
      apartmentId: string;
      picture: {
        title: string;
        url: string;
      };
      title: string;
      location: string;
      size: string;
      priceNumber: number;
      apartment: boolean;
      specialOffer: number;
      imagesCollection: imagesCollection;
    }[];
  };
}

const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;

const getAllApartments = async (): Promise<apartmentsItem[]> => {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query: gqAllApartmentsQuery }),
    });
    const body = (await response.json()) as { data: ApartmentsCollectionResponse };

    return body.data.apartmentsCollection.items;
  } catch (error) {
    console.error("Error fetching apartments:", error);
    return [];
  }
};

const getAllSpecialoffers = async (): Promise<apartmentsItem[]> => {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query: gqAllSpecialOffersQuery }),
    });

    const body = (await response.json()) as { data: ApartmentsCollectionResponse };

    return body.data.apartmentsCollection.items;
  } catch (error) {
    console.error("Error fetching special offers:", error);
    return [];
  }
};

const getApartmentById = async (id: string): Promise<apartmentsItem | null> => {
  console.log("getApartmentById: ", id);
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query: getApartmentByIdQuery, variables: { apartmentId: id } }),
    });

    const body = await response.json();
    
    // Provjeri postoji li polje data i apartmentsCollection u odgovoru
    if (body.data && body.data.apartmentsCollection && body.data.apartmentsCollection.items.length > 0) {
      // Vrati prvi pronađeni stan
      return body.data.apartmentsCollection.items[0];
    } else {
      // Ako nema podataka, vrati null
      return null;
    }
  } catch (error) {
    console.error("Error fetching apartment by ID:", error);
    return null;
  }
};

const getAllPhotos = async (apartmentId:string): Promise<imagesCollection | undefined> => {
  console.log("getAllPhotos: ", apartmentId);
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ 
        query: gqAllApartmentPhotos ,
        variables: { apartmentId: apartmentId },})

    });
    
    const body = (await response.json()) as { data: ApartmentsCollectionResponse };
   
    const imagesCollection = body.data.apartmentsCollection.items[0].imagesCollection;
    
    if (body.data && body.data.apartmentsCollection && body.data.apartmentsCollection.items.length > 0) {
    return imagesCollection;
    }
    else{
      return undefined;
    }
  } catch (error) {
    console.error("Error fetching apartment photos:", error);
    return undefined;
  }
};

const contentfulService = {
  getAllApartments,
  getAllSpecialoffers,
  getApartmentById,
  getAllPhotos
};

export default contentfulService;

