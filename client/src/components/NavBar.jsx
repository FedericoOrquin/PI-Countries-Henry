import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries, getCountriesMatch } from "../actions/actions";
import {
  ClearInput,
  ContainerInput,
  IconLupa,
  Search,
  SearchInput,
  WrapperSearchBox,
} from "./navBar.css.js";

const NavBar= () => {
  const [flag, setFlag] = useState(false);
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    country ? dispatch(getCountriesMatch(country)) : dispatch(getCountries());
  }, [country, dispatch]);

  const onChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <WrapperSearchBox>
      <Search switch={flag}>
        <IconLupa id="searchBox" onClick={() => setFlag(!flag)} />
        <ContainerInput>
          <SearchInput
            id="searchInput"
            type="text"
            value={country}
            onChange={onChange}
            placeholder="Search..."
          />
          <ClearInput onClick={() => setCountry("")}></ClearInput>
        </ContainerInput>
      </Search>
    </WrapperSearchBox>
  );
};
export default NavBar