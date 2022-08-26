import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  getCountriesSort } from "../../actions/actions";
import { ContainerMenu, Options, Selectors } from "./Sorts.css.js";


export default function SortByName() {
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
    <Selectors name="byName" id="byName" onChange={onChange}>
        <option value="">Sort by Name</option>
        <option value="sortName-a-z">By name A-Z</option>
        <option value="sortName-z-a">By name Z-A</option>
    </Selectors>
    </ContainerMenu>
    </>
  );
}
