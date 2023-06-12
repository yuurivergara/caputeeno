import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, {AxiosPromise} from "axios";
import { useFilter } from "./useFilter";
import { FilterType } from "@/types/filter-typer";
import { getCategoryByType } from "@/utils/get-category";


const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => { 
    return axios.post('http://localhost:3333/',{
        query
    });
}

const mountQuery = (type: FilterType) => {
    if (type === FilterType.ALL) return `query{
        allProducts{
          name,
          id,
          price_in_cents,
          image_url
        }
      }`
    
      return `query{
        allProducts(filter: {category: "${getCategoryByType(type)}"}){
          name,
          id,
          price_in_cents
          category,
          image_url
        }
      }`

}

export function useProducts(){
    const {type} = useFilter();
    const query = mountQuery(type);
    const {data} = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type]
    })
    return{
        data: data?.data?.data?.allProducts
    }
}