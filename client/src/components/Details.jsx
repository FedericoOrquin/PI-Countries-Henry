import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCountriesDetails } from "../actions/actions";
import Activity from "./Activity";
import {
  BackButton,
  CircleContainer,
  ContainerActivities,
  ContainerDetails,
  ContainerInformation,
  StyledCard,
  WrapperDetails,
} from "./Details.css.js";

export default function Details() {
  const countriesDetails = useSelector((state) => state.countriesDetails);
  const { id } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCountriesDetails(id));
  }, []);

  return (
    <div>
      <div/>
      <WrapperDetails>
        <ContainerDetails>
          <StyledCard>
            <CircleContainer>
              <img src={countriesDetails.flags} alt={countriesDetails.name} />
            </CircleContainer>
            <ContainerInformation>
              <h2>{countriesDetails.name}</h2>
              <span>ID: {countriesDetails.id}</span>
              <span>Capital: {countriesDetails.capital}</span>
              <span>Subregion: {countriesDetails.subregion}</span>
              <span>Continent: {countriesDetails.continents}</span>
              <span>Area: {countriesDetails.area} km2</span>
              <span>Population: {countriesDetails.population}</span>
              <br />
            </ContainerInformation>
          </StyledCard>
          <Link to='/home'>
          <BackButton id="buttonBack">Back</BackButton>
          </Link>
        </ContainerDetails>
        <ContainerActivities>
          {countriesDetails.Activities?.map((act) => (
            <Activity key={act.name} act={act} />
          ))}
        </ContainerActivities>
      </WrapperDetails>
    </div>
  );
}
