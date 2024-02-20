
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

const contentfulService = {
    getAllApartments,
    getAllSpecialoffers
}

export default contentfulService;

