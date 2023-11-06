import React from 'react';
import makeup1 from '../../Assets/images/makeup-docor/makeup1.png';
import makeup2 from '../../Assets/images/makeup-docor/makeup2.png';
import makeup3 from '../../Assets/images/makeup-docor/makeup3.png';
import decor1 from '../../Assets/images/makeup-docor/decor1.png';
import decor2 from '../../Assets/images/makeup-docor/decor2.png';
import decor3 from '../../Assets/images/makeup-docor/decor3.png';
import '../../Assets/css/makeupdecoration.css';

let makeupdata = [
  { img: <img src={makeup3} /> },
  { img: <img src={makeup2} /> },
  { img: <img src={makeup1} /> },
];
let decorate = [
  { img: <img src={decor1} /> },
  { img: <img src={decor2} /> },
  { img: <img src={decor3} /> },
];
const MakeUpDecoration = () => {
  return (
    <div className="makeup-decoration">
      <div className="makeup-portion">
        <div className="makeup-decor-heading">Makeup</div>
        <div className="makeup-decor-images">
          {makeupdata.map((images) => {
            {
              return <div>{images.img}</div>;
            }
          })}
        </div>
      </div>
      <div className="decoration-portion" style={{ marginTop: '4.6vh' }}>
        <div className="makeup-decor-heading">Decoration</div>
        <div className="makeup-decor-images">
        {decorate.map((images) => {
          {
            return <div>{images.img}</div>;
          }
        })}
        </div>
      </div>
    </div>
  );
};

export default MakeUpDecoration;
