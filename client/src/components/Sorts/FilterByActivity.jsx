import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivies, getCountries, getCountriesSort, getFilterActivities, showAllActivies } from "../../actions/actions";
import { ContainerMenu, Selectors } from "./Sorts.css.js";

export default function FilterByActivities() {
  const [nameActivity, setNameActivity] = useState('');
  const dispatch = useDispatch(); 
  const allActivities = useSelector(state => state.allActivities);
  if (!allActivities.length)dispatch(showAllActivies());

  const onChange = (e) => {
    setNameActivity(e.target.value);
  };

  useEffect(() => {
     dispatch(showAllActivies())
  }, []);

  useEffect(() => {
    if(nameActivity==='allCountries')dispatch(getCountries()) 
    if(nameActivity==='allActivities')dispatch(getAllActivies()) 
    if(nameActivity!=='allCountries'&&nameActivity!=='') dispatch(getFilterActivities(nameActivity)) 
  }, [nameActivity]);


  
  return (
     <ContainerMenu>
     <Selectors  name="activities" id="activities" onChange={onChange}>
        <option value={'allCountries'} >Filter by Activities</option>
        <option value={'allActivities'}>All containt Activities</option>
        {allActivities && allActivities?.map((act)=><option key={act.id} value={act.name}>{act.name}</option>)}
    </Selectors>
    </ContainerMenu>
  );
}