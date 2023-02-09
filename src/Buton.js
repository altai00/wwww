import React from 'react';
import './index.css'
import  './Header.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';

function Buton () {
  return (
    <Dropdown>
      <Dropdown.Toggle  variant="success" id="dropdown-basic" className='buton'>
        PAGES
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">ABOUTE</Dropdown.Item>
        <Dropdown.Item href="#/action-2">SHOP</Dropdown.Item>
        <Dropdown.Item href="#/action-3">SHOP-SINGLE</Dropdown.Item>
        <Dropdown.Item href="#/action-4">EVENT</Dropdown.Item>
        <Dropdown.Item href="#/action-5">EVENT-SINGLE</Dropdown.Item>
        <Dropdown.Item href="#/action-6">GALERRY</Dropdown.Item>
        <Dropdown.Item href="#/action-7">BLOG</Dropdown.Item>
        <Dropdown.Item href="#/action-8">BLOG-SINGLE</Dropdown.Item>
        <Dropdown.Item href="#/action-9">CONTACT</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Buton;