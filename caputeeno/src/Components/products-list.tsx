'use client'

import { useProducts } from "@/app/Hooks/useProducts"


export function ProductsList(){
    const {data} = useProducts()
    console.log(data)
    return(
        <></>
    )
}