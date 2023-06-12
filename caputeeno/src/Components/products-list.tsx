'use client'

import { useProducts } from "@/Hooks/useProducts"
import { ProductCard } from "./product-card"
import { styled } from "styled-components"

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;
    margin-top: 32px;
`
export function ProductsList(){
    const {data} = useProducts()
    console.log(data)
    return(
        <Container>{data?.map(product => <ProductCard
            title={product.name}
            image={product.image_url}
            price={product.price_in_cents}
            key={product.id}
            />)}
        </Container>
    )
}