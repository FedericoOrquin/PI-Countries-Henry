import React from "react";
import './Loading.css.js'
import {ContainerLoading} from './Loading.css.js'
export const Loading = () => {
  return (
    <ContainerLoading>
      <div className="wavy">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </ContainerLoading>
  );
};
export default Loading;
