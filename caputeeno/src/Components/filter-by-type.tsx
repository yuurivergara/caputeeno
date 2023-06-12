import { useFilter } from "@/app/Hooks/useFilter";
import { FilterType } from "@/types/filter-typer";
import { styled } from "styled-components"

interface FilterBarProps{

}

interface FilterItemProps{
    selected: boolean;
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    list-style: none;
`
const FilterItem = styled.li<FilterItemProps>`
    

    font-family: inherit;
    font-weight: ${props => props.selected ? "600" : "400"};
    font-size: 16px;
    line-height: 22px;
    cursor: pointer;

    align-items: center;
    text-align: center;
    text-transform: uppercase;


    color: var(--text-dark);

    border-bottom: ${props => props.selected ? "4px solid var(--orange-low)": ""};
`
export function FilterByType(props: FilterBarProps){
    const {type, setType} = useFilter();

    const handleChangeType = (value: FilterType) => {
        setType(value);
    }
    return(
        <FilterList>
            <FilterItem 
            selected={type === FilterType.ALL} 
            onClick={()=> handleChangeType(FilterType.ALL)}>TODOS OS PRODUTOS</FilterItem>
            <FilterItem 
            selected={type === FilterType.SHIRT} 
            onClick={()=>handleChangeType(FilterType.SHIRT)}>CAMISETAS</FilterItem>
            <FilterItem 
            selected={type === FilterType.MUG} 
            onClick={()=>handleChangeType(FilterType.MUG)}>CANECAS</FilterItem>
        </FilterList>
    )
}