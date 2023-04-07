import './Filter.css'
import { DownOutlined } from '@ant-design/icons';
import {Checkbox, Dropdown, InputNumber, Slider, Space, Typography} from 'antd';
import {useState} from "react";

const Filters = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const [inputValue, setInputValue] = useState([10,20]);
  const [minPrice, setMinPrice] = useState([10,20]);
  const [maxPrice, setMaxPrice] = useState([10,20]);
  const onChangeSlider = (newValue) => {
    setInputValue(newValue);
    setMinPrice(newValue[0]*1000000);
    setMaxPrice(newValue[1]*1000000);
  };
  const onChangeMinSlider = (newValue) => {
    setInputValue([newValue/1000000, inputValue[1]]);
    setMinPrice(newValue);
  };
  const onChangeMaxSlider = (newValue) => {
    setInputValue([inputValue[0], newValue/1000000]);
    setMaxPrice(newValue);
  };
  const items = [
    {
      key: '1',
      label: 'Item 1',
    },
    {
      key: '2',
      label: 'Item 2',
    },
    {
      key: '3',
      label: 'Item 3',
    },
  ];

  return (
    <section className="filters">
      <div className="filters__container">
        <div className="dropdown__box filters__container_yellow">
          <Dropdown
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: ['3'],
              multiple: true,
              // inlineCollapsed: true
            }}
          >
            <Typography.Link>
              <Space>
                Selectable
                <DownOutlined />
              </Space>
            </Typography.Link>
          </Dropdown>
          <Checkbox onChange={onChange}>Checkbox</Checkbox>
          <div>
            <Slider range min={1000} max={100000000}  defaultValue={inputValue} onChange={onChangeSlider} style={{width:200, color:"black"}} value={inputValue}/>

            <InputNumber
              min={1000}
              max={100000000}
              style={{
                margin: '0 16px',
              }}
              step={1000000}
              value={minPrice}
              onChange={onChangeMinSlider}
            />
            <InputNumber
              min={1000}
              max={100000000}
              style={{
                margin: '0 16px',
              }}
              step={1000000}
              value={maxPrice}
              onChange={onChangeMaxSlider}
            />
          </div>
        </div>
      </div>

      {/**/}
    </section>
  )
}

export default Filters


{/*<input className="dropdown__button" type="checkbox" id="dropdown__button" />*/}
{/*<label className="dropdown__button-label" htmlFor="dropdown__button">Тип недвижимости</label>*/}
{/*<div className="dropdown__section">*/}
{/*  <input className="dropdown__button-sub" type="checkbox" id="dropdown__button-sub"/>*/}
{/*  <label className="dropdown__button-sub_label" htmlFor="dropdown__button-sub">Квартиры</label>*/}
{/*  <input className="dropdown__button-sub" type="checkbox" id="dropdown__button-sub1"/>*/}
{/*  <label className="dropdown__button-sub_label" htmlFor="dropdown__button-sub1">Дома и дачи</label>*/}
{/*  <input className="dropdown__button-sub" type="checkbox" id="dropdown__button-sub2"/>*/}
{/*  <label className="dropdown__button-sub_label" htmlFor="dropdown__button-sub2">Коммерческая недвижимость</label>*/}
{/*  <input className="dropdown__button-sub" type="checkbox" id="dropdown__button-sub3"/>*/}
{/*  <label className="dropdown__button-sub_label" htmlFor="dropdown__button-sub3">Гаражи</label>*/}
{/*</div>*/}

// <div className="filters__container">*/}
// {/*  <div className="filters__container_yellow">*/}
// {/*    <div className="toggle-switches">*/}
// {/*      <form className="tabber">*/}
// {/*        <label className="toogle-switches__label" htmlFor="t1">Покупка</label>*/}
// {/*        <input className="toogle-switches__input" id="t1" name="food" type="radio" defaultChecked/>*/}
// {/*        <label className="toogle-switches__label" htmlFor="t2">Аренда</label>*/}
// {/*        <input className="toogle-switches__input" id="t2" name="food" type="radio"/>*/}
// {/*        <div className="blob"/>*/}
// {/*      </form>*/}
// {/*    </div>*/}
// {/*  </div>*/}
// {/*</div>*/}
//
// {/*<div className="filters__container">*/}
// {/*  <div className="filters__container_yellow">*/}
// {/*    <p>Цена</p>*/}
//
// {/*  </div>*/}
// {/*</div>
