import "./Details.css"
import {useEffect, useState} from "react";
import EstateDescription from "../../Section/EstateDescription/EstateDescription";
import api from "../../../utils/api";
import ApartmentAbout from "../../Section/EstateAbout/ApartmentAbout";
import EstateInfo from "../../Section/EstateInfo/EstateInfo";
import BackButton from "../../Section/Blocks/BackButton/BackButton";

function Details(props) {
  const [estate, setEstate] = useState({});
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => setScroll(window.scrollY);

  useEffect(() => {
    window.scrollTo(0,0);
    window.addEventListener("scroll", handleScroll);
    api.openCard(props.match.params.estateID)
      .then((estate) => setEstate(estate))
      .catch(err => console.log(err));

  }, [])

  return (
    <>
      {/*<EstateDescription title={estate.title} price={estate.price} images={estate.images} />*/}
      <BackButton scroll={scroll}/>
      {/*TODO: множественные запросы при прокрутке страниц*/}
      <EstateDescription estate={estate} scroll={scroll}/>
      <ApartmentAbout estate={estate}/>
      <EstateInfo estate={estate}/>


    </>
  );
}

export default Details;