import React, { useState, useRef } from 'react';
import './AddEstatePopup.css';
import { Button, Form, Input, Radio } from 'antd';

function AddEstatePopup({ isOpenPopup, onClickClosePopups, onSubmitAddEstate, isLoading }) {

  const [form] = Form.useForm();

  //общее
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [info, setInfo] = useState('');
  const [typeEstate, setTypeEstate] = useState('apartment');
  const [target, setTarget] = useState(false);
  const [square, setSquare] = useState('');
  const fileRef = useRef('');

  //apartment
  const [floor, setFloor] = useState('');
  const [status, setStatus] = useState('');
  const [rooms, setRooms] = useState('');
  const [kitchen_square, setKitchenSquare] = useState('');
  const [living_space, setLivingSpace] = useState('');
  const [total_floors, setTotalFloors] = useState('');
  const [height, setHeight] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [repair, setRepair] = useState('');
  const [furniture, setFurniture] = useState('');

  //office
  // const [floor, setFloor] = useState(0);
  const [power_grid_capacity, setPowerGridCapacity] = useState('');
  const [purpose, setPurpose] = useState('');
  const [room_layout, setRoomLayout] = useState('');
  const [heating, setHeating] = useState('');
  const [separate_entrance, setSeparateEntrance] = useState(false);

  //home
  // const [rooms, setRooms] = useState(0);
  const [plot_area, setPlotArea] = useState('');
  const [house_floors, setHouseFloors] = useState('');
  const [year_built, setYearBuilt] = useState(0);
  const [land_category, setLandCategory] = useState('');
  const [wall_material, setWallMaterial] = useState('');
  // const [heating, setHeating] = useState('');
  const [toilet, setToilet] = useState('');
  const [water_supply, setWaterSupply] = useState('');
  const [electricity, setElectricity] = useState(false);

  // Общие
  const handleChangeTitle = e => setTitle(e.target.value);
  const handleChangePrice = e => setPrice(e.target.value);
  const handleChangeAddress = e => setAddress(e.target.value);
  const handleChangeTarget = e => setTarget(!target);
  const handleChangeInfo = e => setInfo(e.target.value);
  const handleChangeTypeEstate = ({ estate }) => setTypeEstate(estate);
  const handleChangeSquare = e => setSquare(e.target.value);
  const handleChangeImages = e => {fileRef.current = e.target.files};

  // Квартира
  const handleChangeFloor = e => setFloor(e.target.value);
  const handleChangeStatus = e => setStatus(e.target.value);
  const handleChangeRooms = e => setRooms(e.target.value);
  const handleChangeKitchenSquare = e => setKitchenSquare(e.target.value);
  const handleChangeLivingSpace = e => setLivingSpace(e.target.value);
  const handleChangeTotalFloors = e => setTotalFloors(e.target.value);
  const handleChangeHeight = e => setHeight(e.target.value);
  const handleChangeBathroom = e => setBathroom(e.target.value);
  const handleChangeRepair = e => setRepair(e.target.value);
  const handleChangeFurniture = e => setFurniture(e.target.value);

  // Коммерческая
  // const handleChangeFloor = e => setFloor(e.target.value);
  const handleChangePowerGridCapacity = e => setPowerGridCapacity(e.target.value);
  const handleChangePurpose = e => setPurpose(e.target.value);
  const handleChangeRoomLayout = e => setRoomLayout(e.target.value);
  const handleChangeHeating = e => setHeating(e.target.value);
  const handleChangeSeparateEntrance = e => setSeparateEntrance(!separate_entrance);

  // Дом
  // const handleChangeRooms = e => setRooms(e.target.value);
  const handleChangePlotArea = e => setPlotArea(e.target.value);
  const handleChangeHouseFloors = e => setHouseFloors(e.target.value);
  const handleChangeYearBuilt = e => setYearBuilt(e.target.value);
  const handleChangeLandCategory = e => setLandCategory(e.target.value);
  const handleChangeWallMaterial = e => setWallMaterial(e.target.value);
  // const handleChangeHeating = e => setHeating(e.target.value);
  const handleChangeToilet = e => setToilet(e.target.value);
  const handleChangeWaterSupply = e => setWaterSupply(e.target.value);
  const handleChangeElectricity = e => setElectricity(!electricity);



  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    // Общие значения
    if (title) data.append('title', title);
    if (price) data.append('price', price);
    if (address) data.append('address', address);
    data.append('target', target);
    if (square) data.append('square', square);
    if (info) data.append('info', info);
    if (typeEstate) data.append('typeEstate', typeEstate);

    if (typeEstate==="apartment") {
      // Значения для квартиры
      if (floor) data.append('floor', floor);
      if (status) data.append('status', status);
      if (rooms) data.append('rooms', rooms);
      if (kitchen_square) data.append('kitchen_square', kitchen_square);
      if (living_space) data.append('living_space', living_space);
      if (total_floors) data.append('total_floors', total_floors);
      if (height) data.append('height', height);
      if (bathroom) data.append('bathroom', bathroom);
      if (furniture) data.append('furniture', furniture);
      if (repair) data.append('repair', repair);
    }

    if (typeEstate==="office") {
      // Значения для коммерческих помещений
      if (floor) data.append('floor', floor);
      if (power_grid_capacity) data.append('power_grid_capacity', power_grid_capacity);
      if (purpose) data.append('purpose', purpose);
      if (room_layout) data.append('room_layout', room_layout);
      if (heating) data.append('heating', heating);
      data.append('separate_entrance', separate_entrance);
    }

    if (typeEstate==="home") {
      // Для дома
      if (rooms) data.append('rooms', rooms);
      if (plot_area) data.append('plot_area', plot_area);
      if (house_floors) data.append('house_floors', house_floors);
      if (year_built) data.append('year_built', year_built);
      if (land_category) data.append('land_category', land_category);
      if (wall_material) data.append('wall_material', wall_material);
      if (heating) data.append('heating', heating);
      if (toilet) data.append('toilet', toilet);
      if (water_supply) data.append('water_supply', water_supply);
      data.append('electricity', electricity);
    }

    let fileList = fileRef.current;
    const arrFiles = Array.from(fileList);
    let i=0;
    arrFiles.forEach(file => {
      i++;
      data.append('images'+i, file);
    })
    onSubmitAddEstate(data);

    //после сабмита надо обнулить поля
    fileRef.current = null;
    setTitle('');
    setPrice('');
    setRooms('');
    setSquare('');
    setKitchenSquare('');
    setLivingSpace('');
    setFloor('');
    setHeight('');
    setBathroom('');
    setFurniture('');
    setRepair('');
    setInfo('');
    setAddress('');
    setTarget(false);
  };

  return (
    <div className={`add-estate-popup ${isOpenPopup ? 'add-estate-popup_active': ''}`}>
    {/*<div className={`add-estate-popup popup_active`}>*/}
      <div className="add-estate-popup__container">
        <h2 className="add-estate-popup__title">Объект недвижимости</h2>
        {/*<div className="add-estate-popup__toggle-type-estate">*/}
        {/*  <label>Квартира</label>*/}
        {/*  <input type="radio" name="toggle-type-estate" onChange={handleChangeIsApartment}/>*/}
        {/*  <label>Дом</label>*/}
        {/*  <input type="radio" name="toggle-type-estate" onChange={handleChangeIsHome}/>*/}
        {/*  <label>Коммерческая</label>*/}
        {/*  <input type="radio" name="toggle-type-estate" onChange={handleChangeIsOffice}/>*/}
        {/*</div>*/}

        <Form
          estate={typeEstate}
          form={form}
          initialValues={{
            estate: typeEstate,
          }}
          onValuesChange={handleChangeTypeEstate}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="Form Layout" name="estate">
            <Radio.Group value={typeEstate}>
              <Radio.Button value={'apartment'} >Квартира</Radio.Button>
              <Radio.Button value={'home'}>Дом</Radio.Button>
              <Radio.Button value={'office'}>Коммерческая</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Form>
        <form name={`form-add-cards`} className="add-estate-popup__edit" noValidate>

          <div className="add-estate-popup__block-properties">
            <div className="add-estate-popup__block-title width30">
              <div className="add-estate-popup__block-input">
                <input type="text" value={title} onChange={handleChangeTitle} name="title"
                       className="add-estate-popup__input width100" required minLength="2" maxLength="30" />
                <label className="add-estate-popup__label">Заголовок</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="number" value={price} onChange={handleChangePrice} name="price"
                       className="add-estate-popup__input width100" required />
                <label className="add-estate-popup__label">Цена</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="text" value={address} onChange={handleChangeAddress} name="address"
                       className="add-estate-popup__input width100" required />
                <label className="add-estate-popup__label">Адрес</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="number" value={square} onChange={handleChangeSquare} name="square"
                       className="add-estate-popup__input width100" required />
                <label className="add-estate-popup__label">Общая площадь</label>
              </div>
              {/*<div className="add-estate-popup__block-input">*/}
              {/*  <input type="number" value={square} onChange={handleChangeSquare} name="square"*/}
              {/*         className="add-estate-popup__input width100" required />*/}
              {/*  <label className="add-estate-popup__label"></label>*/}
              {/*</div>*/}
              <div className="add-estate-popup__block-input">
                <input type="checkbox" checked={target} onChange={handleChangeTarget}
                       className="add-estate-popup__checkbox" name="target"/>
                  <label className="add-estate-popup__label" htmlFor="target">Показывать на главной</label>
              </div>
              <div className="add-estate-popup__dummy"></div>
            </div>
            {/**/}
            <div className={`add-estate-popup__block-properties_column ${typeEstate==="apartment"  ? '': 'invisible' } width30`}>
              <div className="add-estate-popup__block-input">
                <input type="number" value={rooms} onChange={handleChangeRooms} name="rooms"
                       className="add-estate-popup__input width100" required />
                <label className="add-estate-popup__label">Количество комнат</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="number" value={kitchen_square} onChange={handleChangeKitchenSquare} name="kitchen_square"
                       className="add-estate-popup__input width100" required />
                <label className="add-estate-popup__label">Площадь кухни</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="number" value={living_space} onChange={handleChangeLivingSpace} name="living_space"
                       className="add-estate-popup__input width100" required />
                <label className="add-estate-popup__label">Жилая площадь</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="number" value={floor} onChange={handleChangeFloor} name="floor"
                       className="add-estate-popup__input width100" required/>
                <label className="add-estate-popup__label">Этаж</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="number" value={total_floors} onChange={handleChangeTotalFloors} name="total_floors"
                       className="add-estate-popup__input width100" required/>
                <label className="add-estate-popup__label">Всего этажей</label>
              </div>
            </div>
            <div className={`add-estate-popup__block-properties_column ${typeEstate==="apartment" ? '': 'invisible' } width30`}>
              <div className="add-estate-popup__block-input">
                <input type="number" value={height} onChange={handleChangeHeight} name="height"
                       className="add-estate-popup__input width100" required />
                <label className="add-estate-popup__label">Высота потолка</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="text" value={bathroom} onChange={handleChangeBathroom} name="bathroom"
                       className="add-estate-popup__input width100" required minLength="2" maxLength="30" />
                <label className="add-estate-popup__label">Санузел</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="text" value={furniture} onChange={handleChangeFurniture} name="furniture"
                       className="add-estate-popup__input width100" required minLength="2" maxLength="30" />
                <label className="add-estate-popup__label">Мебель</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="text" value={repair} onChange={handleChangeRepair} name="repair"
                       className="add-estate-popup__input width100" required minLength="2" maxLength="30" />
                <label className="add-estate-popup__label">Ремонт</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="text" value={status} onChange={handleChangeStatus} name="status"
                       className="add-estate-popup__input width100" required minLength="2" maxLength="30" />
                <label className="add-estate-popup__label">Состояние</label>
              </div>
            </div>
            {/**/}
            <div className={`add-estate-popup__block-properties_column ${typeEstate==="office" ? '': 'invisible' } width30`}>
              <div className="add-estate-popup__block-input">
                <input type="number" value={floor} onChange={handleChangeFloor} name="floor"
                       className="add-estate-popup__input width100" required />
                <label className="add-estate-popup__label">Этаж"</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="number" value={power_grid_capacity} onChange={handleChangePowerGridCapacity} name="power_grid_capacity"
                       className="add-estate-popup__input width100" required />
                <label className="add-estate-popup__label">Максимальная мощность электросети</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="text" value={purpose} onChange={handleChangePurpose} name="purpose"
                       className="add-estate-popup__input width100" required minLength="2" maxLength="30" />
                <label className="add-estate-popup__label">Назначение помещения</label>
              </div>
            </div>
            <div className={`add-estate-popup__block-properties_column ${typeEstate==="office"  ? '': 'invisible' } width30`}>
              <div className="add-estate-popup__block-input">
                <input type="text" value={room_layout} onChange={handleChangeRoomLayout} name="room_layout"
                       className="add-estate-popup__input width100" required/>
                <label className="add-estate-popup__label">Планировка</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="text" value={heating} onChange={handleChangeHeating} name="heating"
                       className="add-estate-popup__input width100" required/>
                <label className="add-estate-popup__label">Отопление</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="checkbox" checked={separate_entrance} onChange={handleChangeSeparateEntrance} name="separate_entrance"
                       className="add-estate-popup__input width100" required/>
                <label className="add-estate-popup__label">Отдельный вход</label>
              </div>
            </div>
            {/**/}
            <div className={`add-estate-popup__block-properties_column ${typeEstate==="home"  ? '': 'invisible' } width30`}>
              <div className="add-estate-popup__block-input">
                <input type="number" value={rooms} onChange={handleChangeRooms} name="rooms"
                       className="add-estate-popup__input width100" required />
                <label className="add-estate-popup__label">Количество комнат</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="number" value={plot_area} onChange={handleChangePlotArea} name="plot_area"
                       className="add-estate-popup__input width100" required />
                <label className="add-estate-popup__label">Площадь участка</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="number" value={house_floors} onChange={handleChangeHouseFloors} name="house_floors"
                       className="add-estate-popup__input width100" required />
                <label className="add-estate-popup__label">Этажность дома</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="number" value={year_built} onChange={handleChangeYearBuilt} name="year_built"
                       className="add-estate-popup__input width100" required />
                <label className="add-estate-popup__label">Год постройки</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="text" value={land_category} onChange={handleChangeLandCategory} name="land_category"
                       className="add-estate-popup__input width100" required/>
                <label className="add-estate-popup__label">Тип земли</label>
              </div>
            </div>
            <div className={`add-estate-popup__block-properties_column ${typeEstate==="home" ? '': 'invisible' } width30`}>
              <div className="add-estate-popup__block-input">
                <input type="text" value={wall_material} onChange={handleChangeWallMaterial} name="wall_material"
                       className="add-estate-popup__input width100" required/>
                <label className="add-estate-popup__label">Материал стен</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="text" value={heating} onChange={handleChangeHeating} name="heating"
                       className="add-estate-popup__input width100" required />
                <label className="add-estate-popup__label">Отопление</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="text" value={toilet} onChange={handleChangeToilet} name="toilet"
                       className="add-estate-popup__input width100" required />
                <label className="add-estate-popup__label">Туалет</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="text" value={water_supply} onChange={handleChangeWaterSupply} name="water_supply"
                       className="add-estate-popup__input width100" required />
                <label className="add-estate-popup__label">Водоснабжение</label>
              </div>
              <div className="add-estate-popup__block-input">
                <input type="checkbox" checked={electricity} onChange={handleChangeElectricity} name="electricity"
                       className="add-estate-popup__input width100" required minLength="2" maxLength="30" />
                <label className="add-estate-popup__label">Электричество</label>
              </div>
            </div>
            {/**/}
          </div>

          <div className="add-estate-popup__block-photo">
            <div className="add-estate-popup__block-input">
              <input type="file" onChange={handleChangeImages} name="images" id="link-input2" multiple="multiple"
                     className="add-estate-popup__input popup__input_profile_info" required />
              {/*<label className="add-estate-popup__label">Выбрать фото</label>*/}
            </div>
          </div>

          <div className="add-estate-popup__block-info">
            <textarea className="add-estate-popup__textarea" value={info} onChange={handleChangeInfo}></textarea>
          </div>

          <button type="submit" onClick={handleSubmit} className="add-estate-popup__button-save" >{!isLoading ? "Создать" : 'Сохранение...'}</button>
        </form>
        <button type="button" className="add-estate-popup__button-close" onClick={onClickClosePopups}></button>
      </div>
    </div>
  );
}

export default AddEstatePopup;
