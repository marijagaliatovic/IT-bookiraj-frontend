
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
        apartmentId
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
        apartmentId
      }
    }
  }`;

const gqAllApartmentsPhotos = `query getAllApartmentPhotos($apartmentId:String){
  apartmentsCollection(where: {apartmentId: $apartmentId}){
     items {
        picture{
            title
            url
        }
        imagesCollection{
          items{
            title
            url
          }
        }
        title
        location
        size
        priceNumber
        apartment
        specialOffer
        apartmentId
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
      apartmentId:string;
}


export interface apartmentItemCollection {
    apartmentsCollection: {
      items: apartmentItem[];
    };
  }
  
export  interface apartmentItem {
    imagesCollection: imagesCollection;
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
      apartmentId:string;
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
            specialOffer:item.specialOffer,
            apartmentId:item.apartmentId
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
            specialOffer:item.specialOffer,
            apartmentId:item.apartmentId
        }));

        
        return apartmentsCollection;

    }catch(error){
        console.error("Error fetching apartments:", error);
        return [];
    }
};

const getAllPhotos = async (apartmentId:string): Promise<apartmentItem[]> => {
 
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ 
          query: gqAllApartmentsPhotos ,
          variables: { apartmentId: apartmentId },})

      });
      
      const body = (await response.json()) as { data: apartmentItemCollection };
      console.log("Body getAllPhotos: ", body);
      const apartmentsItemCollection = body.data.apartmentsCollection.items.map(
        (item) => ({
            imagesCollection: item.imagesCollection,
            title: item.title,
            picture:item.picture,
            location:item.location,
            size:item.size,
            priceNumber:item.priceNumber,
            apartment:item.apartment,
            specialOffer:item.specialOffer,
            apartmentId:item.apartmentId
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

