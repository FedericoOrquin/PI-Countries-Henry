import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesSort } from "../../actions/actions";
import { ContainerMenu, Selectors } from "./Sorts.css.js";


export default function SortByPopulation() {
  const [sort, setSort] = useState({});
  const dispatch = useDispatch();

  const onChange = (e) => {
    setSort({
      id: e.target.value,
      value: e.target.value,
    });
  };

  useEffect(() => {
    Object.entries(sort).length && dispatch(getCountriesSort(sort))
  }, [sort]);

  return (
    <>
     <ContainerMenu>
    <Selectors name="Continents" id="Continents" onChange={onChange}>
        <option value="">Sort by Population</option>
        <option value="sortPopulation-a-z">Smallest to largest</option>
        <option value="sortPopulation-z-a">Highest to lowest</option>
    </Selectors>
    </ContainerMenu>
    </>
  );
}