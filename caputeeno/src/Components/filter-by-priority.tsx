import { styled } from "styled-components";
import { ArrowIcon } from "./arrow-icon";
import { useState } from "react";
import { useFilter } from "@/app/Hooks/useFilter";
import { FilterContext } from "@/contexts/filter-context";
import { PriorityTypes } from "@/types/priority-types";

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button{
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);
        border: none;
        cursor: pointer;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;

        svg{
            margin-left: 16px;
        }
    }
`
const PriorityFilter = styled.ul`
    position: absolute;
    width: 180px;
    padding: 12px 16px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    list-style: none;
    top: 100%;

    li{
        color: var(--text-dark);
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;
    }
`
export function FilterByPriority(){
    const [isOpen, setIsOpen] = useState(false);
    const { setPriority} =  useFilter();

    const handleOpen = () => {
        setIsOpen(prev => !prev)
    }

    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value);
        setIsOpen(false);
    }
    return(
        <FilterContainer>
            <button onClick={()=> handleOpen()}
            >ORGANIZAR POR
                <ArrowIcon />
            </button>
            {isOpen && 
            <PriorityFilter>
                <li onClick={()=> handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                <li onClick={()=> handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - Menor</li>
                <li onClick={()=> handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - Maior</li>
                <li onClick={()=> handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
            </PriorityFilter>
            }
        </FilterContainer>
    )

}