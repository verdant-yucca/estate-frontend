import "./BackButton.css"
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import api from "../../../../utils/api";

function BackButton( {scroll}) {
  const history = useHistory();

  const handleOnClick = () => history.goBack();

  return (
    <button className={`backButton ${scroll>50?"backButtonActive":""}`} onClick={handleOnClick}></button>
  )
}

export default BackButton;
