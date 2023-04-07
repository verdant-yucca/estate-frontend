import Card from '../../Section/Blocks/Card/Card';
import "./Estate.css"
import { useState} from 'react';
import Filters from "../../Section/Filters/Filters";
import {BankOutlined, HomeOutlined, PlusCircleOutlined} from "@ant-design/icons";
import {Space} from "antd";
// import YMaps from '../VMaps/YMaps'

function Estate({cards, onClickAddEstate, onClickDeleteEstate, onClickEditEstate, onClickMoreEstates, loggedIn }) {

//TODO: перенести сюда запрос карточек сервера
  const [numPage, setNumPage] = useState(1);
  const handleClickButtonMoreEstate = () => {
    onClickMoreEstates();
    setNumPage(numPage+1)
  }

  return (
    <>
      <section key={"banner_estate"} className='banner'>
        {/*{loggedIn ? <button key={'button_add_object'} type='button' onClick={onAddPlace} className='estate__button-add'>Добавить объект</button> : ""}*/}
        {loggedIn &&
          <button key={'button_add_object'} type='button' onClick={onClickAddEstate} className='estate__button-add'>
            <Space className='estate__icon-add'>
              <HomeOutlined />
              <HomeOutlined />
            </Space>
            <Space className='estate__icon-add'>
              <HomeOutlined />
              <PlusCircleOutlined  className='estate__button-add_icon-plus'/>
            </Space>
          </button>
        }
      </section>

      <Filters/>

      {/*< YMaps />*/}

      {/*<section>*/}
        <ul key={"all_elements_estates"} className="elements">
          {cards.map(card => (
            <Card key={card._id} loggedIn={loggedIn} card={card} onClickDeleteEstate={onClickDeleteEstate} onClickEditEstate={onClickEditEstate} />
          ))}
        </ul>
      {/*</section>*/}

      { cards.length >= numPage*20 &&
        <button className='estate__button-more' onClick={handleClickButtonMoreEstate} aria-label='Загрузить ещё' type='button'>Загрузить ещё</button>
      }
    </>
  );
}

export default Estate;
