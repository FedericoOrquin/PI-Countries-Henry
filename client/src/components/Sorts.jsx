import React, { useEffect, useRef, useState } from "react";
import { useHistory} from "react-router-dom";
import SortByPopulation from "./Sorts/FilterByPopulation";
import SortByName from "./Sorts/FilterByName";
import FilterByContinent from "./Sorts/FilterByContinenet";
import FilterByActivities from "./Sorts/FilterByActivity";
import { ButtonCreateActivity, Container } from "./Sort.css.js";


export default function OptionBar() {
  const history = useHistory();
  return (
    <Container>
      <FilterByContinent/>
      <SortByName/>
      <SortByPopulation/>
      <FilterByActivities/>
      <ButtonCreateActivity id="buttonCreateActivity" type="submit" onClick={()=> history.replace(`/activities`)}>Create Activities</ButtonCreateActivity>
    </Container>
  );
}

