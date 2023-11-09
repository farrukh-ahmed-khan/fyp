import React, { useState } from 'react';
import Navbr from '../Components/CommonComponent/Nav';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import '../Assets/css/service.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const services = [
  'Photography/Videography',
  'Decoration',
  'Makeup',
  
];

const Service = () => {
  

  return (
    <>
      <div>
        <Navbr />
      </div>
      <div className="service-head">
        <h4>Services</h4>
        <p>You can select One or Multiple services with your Location.</p>
      </div>
      <div>
       
      </div>
    </>
  );
};

export default Service;
