import { styled } from "styled-components"

interface ProductProps{
    image: string,
    title: string,
    price: number
}
const Container = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 256px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 0px 0px 4px 4px;

    img{
        width: 256px;
        height: 300px;
    }

    h3 {
        font-family: inherit;
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--card-text);
    }
    p{  
        font-family: inherit;
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        color: var(--price-color);
    }

    div{
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8px 0;
        > div {
            width: 228px;
            height: 1px;
            padding: 0px;
            margin: 8px 0;
            background: #DCE2E6;
        }
    }
`

export function ProductCard(props : ProductProps){
    function formatValue(valueInCents: number){
        const valueInReal = valueInCents/100;
        return valueInReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }

    const price = formatValue(props.price)
    return(
        <Container>
            <img src={props.image} />
            <div>
                <h3>{props.title}</h3>
                <div/>
                <p>{price}</p>
            </div>
        </Container>
    )
}