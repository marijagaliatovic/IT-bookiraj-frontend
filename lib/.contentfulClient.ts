
const gqAllApartmentsQuery = `query getAllApartments{
    apartmentsCollection {
      items {
        picture{
            title
            url
        }
        title
        location
        size
        priceNumber
        apartment
        specialOffer
      }
    }
  }
`;

 const gqAllSpecialOffersQuery = `query getAllSpecialoffers{
    apartmentsCollection(where: {specialOffer_not_in : 0}) {
      items {
        picture{
            title
            url
        }
        title
        location
        size
        priceNumber
        apartment
        specialOffer
      }
    }
  }`;

  const gqAllApartmentsPhotos = `query getAllApartmentPhotos {
  apartmentsCollection {
    items {
        images {
            room1 {
                title
                url
            }
            br1 {
                title
                url
            }
            lr1 {
                title
                url
            }
        }
        title
    }
  }
}`;

export interface apartmentsCollectionResponse {
    apartmentsCollection: {
        items: apartmentsItem[];
    }
}

export interface apartmentsItem{
    picture:{
        title:string;
        url:string;
      }
      title:string;
      location:string;
      size:string;
      priceNumber:number;
      apartment:boolean;
      specialOffer:number;
}


export interface apartmentPhotosCollection {
    apartmentsCollection: {
      items: apartmentPhotos[];
    };
  }
  
  export interface apartmentPhotos {
    images: {
      room1: {
        title: string;
        url: string;
      };
      br1: {
        title: string;
        url: string;
      };
      lr1: {
        title: string;
        url: string;
      };
    };
    title:string;
  }

const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;


const getAllApartments =async (): Promise<apartmentsItem[]> => {
    try{
        const response = await fetch(baseUrl, {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
            },
            body:JSON.stringify({query:gqAllApartmentsQuery}),
        });
        const body = (await response.json()) as {data: apartmentsCollectionResponse}

        const apartmentsCollection = body.data.apartmentsCollection.items.map(
            (item)=>({
            title:item.title,
            picture:item.picture,
            location:item.location,
            size:item.size,
            priceNumber:item.priceNumber,
            apartment:item.apartment,
            specialOffer:item.specialOffer
        }));

        
        return apartmentsCollection;
    } catch(error){
        console.error("Error fetching apartments:", error);
        return [];
    }
};

const getAllSpecialoffers = async():Promise<apartmentsItem[]> =>{
    try{
        const response = await fetch(baseUrl, {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
            body:JSON.stringify({query:gqAllSpecialOffersQuery})
        });

        const body = (await response.json()) as {data: apartmentsCollectionResponse}

        const apartmentsCollection = body.data.apartmentsCollection.items.map(
            (item)=>({
            title:item.title,
            picture:item.picture,
            location:item.location,
            size:item.size,
            priceNumber:item.priceNumber,
            apartment:item.apartment,
            specialOffer:item.specialOffer
        }));

        
        return apartmentsCollection;

    }catch(error){
        console.error("Error fetching apartments:", error);
        return [];
    }
};

const getAllPhotos = async (): Promise<apartmentPhotos[]> => {
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query: gqAllApartmentsPhotos }),
      });
      const body = (await response.json()) as { data: apartmentPhotosCollection };
  
      const apartmentsPhotosCollection = body.data.apartmentsCollection.items.map(
        (item) => ({
          images: item.images,
          title: item.title
        })
      );
  
      return apartmentsPhotosCollection;
    } catch (error) {
      console.error("Error fetching apartment photos:", error);
      return [];
    }
  };

const contentfulService = {
    getAllApartments,
    getAllSpecialoffers,
    getAllPhotos
}

export default contentfulService;

