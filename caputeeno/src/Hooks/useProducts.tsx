import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { useDeferredValue } from "react";
import { FilterType } from "@/types/filter-typer";
import { PriorityTypes } from "@/types/priority-types";
import { getFieldByPriority } from "@/utils/get-field";
import { getCategoryByType } from "@/utils/get-category";


const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post("http://localhost:3333",{ query })
}

const mountQuery = (type: FilterType, priority: PriorityTypes) => {
    if(type === FilterType.ALL && priority === PriorityTypes.POPULARITY) return `query {
        allProducts(sortField: "sales", sortOrder: "DSC") {
          id
          name
          price_in_cents
          image_url
        }
      }
    `
    const sortSettings = getFieldByPriority(priority)
    const categoryFilter = getCategoryByType(type)
    return `
    query {
        allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter ? `filter: { category: "${categoryFilter}"}`: ''}) {
          id
          name
          price_in_cents
          image_url
          category
        }
      }
    `
}

export function useProducts(){
    const { type, priority, search } = useFilter()
    const searchDeferred = useDeferredValue(search)
    const query = mountQuery(type, priority)
    const { data } = useQuery({
      queryFn: () => fetcher(query),
      queryKey: ['products', type, priority]
    })

    const products =  data?.data?.data?.allProducts
    const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))

    return {
      data: filteredProducts
    }
}