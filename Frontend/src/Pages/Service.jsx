import React, { useState } from "react";
import Navbr from "../Components/CommonComponent/Nav";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import photographyimage from "../Assets/images/card-image1.png";
import decorationimage from "../Assets/images/card-image2.png";
import makeupimage from "../Assets/images/card-image3.png";
import image1 from "../Assets/images/about-us.png";
import image2 from "../Assets/images/makeup-docor/makeup2.png";
import image3 from "../Assets/images/makeup-docor/decor2.png";
import "../Assets/css/service.css";
import Footer from "../Components/CommonComponent/Footer";

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

const services = ["Photography/Videography", "Decoration", "Makeup"];

const Service = () => {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
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
      <div className="container">
        <div className="filter-wrapper">
          <div className="row mb-50">
            <div className="col-lg-3">
              <div className="filter">
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Services
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
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
            </div>
            <div className="col-lg-3">
              <div className="inp-wrapper">

                <input type="text" name="" id="" placeholder="Enter Your City" 
                className="form-control"
                />
              </div>

            </div>
            <div className="col-lg-3">
              <div className="inp-wrapper form-group">

                <input type="date" name="" id="" placeholder="Enter Your start date" 
                className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="inp-wrapper">

                <input type="date" name="" id="" placeholder="Enter Your end date" 
                className="form-control"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="service-card">
          <div>
            <img src={photographyimage} />
            <h3>Photography/Videography</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, labore in quisquam amet saepe ut omnis quas. Ullam sunt odit eum, iste animi est! Ad mollitia asperiores perspiciatis placeat recusandae.</p>
          </div>
          <div>
            <img className="service-img" src={image1} />
          </div>
        </div>
        <div className="service-card">

          <div>
            <img className="service-img" src={image2} />
          </div>
          <div>
            <img src={makeupimage} />
            <h3>Photography/Videography</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, labore in quisquam amet saepe ut omnis quas. Ullam sunt odit eum, iste animi est! Ad mollitia asperiores perspiciatis placeat recusandae.</p>
          </div>
        </div>

        <div className="service-card">
          <div>
            <img src={decorationimage} />
            <h3>Photography/Videography</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, labore in quisquam amet saepe ut omnis quas. Ullam sunt odit eum, iste animi est! Ad mollitia asperiores perspiciatis placeat recusandae.</p>
          </div>
          <div>
            <img className="service-img" src={image3} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
