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
  // 'Ralph Hubbard',
  // 'Omar Alexander',
  // 'Carlos Abbott',
  // 'Miriam Wagner',
  // 'Bradley Wilkerson',
  // 'Virginia Andrews',
  // 'Kelly Snyder',
];

const Service = () => {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

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
        <FormControl sx={{ m: 1, width: 300, '.MuiOutlinedInput-notchedOutline': { border: 0 } }} style={{borderBottom:"1px solid red"}}>
          <InputLabel id="demo-multiple-checkbox-label">Select Services</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            
          >
            {services.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default Service;
