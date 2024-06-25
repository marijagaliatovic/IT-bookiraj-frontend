
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
  apartmentsCollection(where: {title: "Apartment Nora"}){
      items {
        imagesCollection{
          items{
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


export interface apartmentItemCollection {
    apartmentsCollection: {
      items: apartmentItem[];
    };
  }
  
export  interface apartmentItem {
    imagesCollection: imagesCollection;
    title:string;
  }

export interface imagesCollection {
  items: imageItem[]; 
}

export interface imageItem {
    title: string;
    url: string;
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

const getAllPhotos = async (): Promise<apartmentItem[]> => {
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query: gqAllApartmentsPhotos }),
      });
      
      const body = (await response.json()) as { data: apartmentItemCollection };
      console.log("response.body: " + body.data.apartmentsCollection.items[0].imagesCollection.items[0].title);

      const apartmentsItemCollection = body.data.apartmentsCollection.items.map(
        (item) => ({
          imagesCollection: item.imagesCollection,
          title: item.title
        })
      );
      
      console.log("apartmentaItemCollection: " + apartmentsItemCollection[0].imagesCollection.items[0].title);

      return apartmentsItemCollection;
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

