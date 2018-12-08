import React from 'react';
import { Link } from 'react-router-dom';

import Aux from '../../../hoc/auxhoc/Auxhoc';

const linkUnderline = {
  position: 'relative',
  display: 'inline-block',
  height: '35px',
  paddingLeft: '.50rem',
  paddingRight: '.50rem',
  boxSizing: 'border-box',
  borderLeft: '1px solid transparent',
  borderRight: '1px solid transparent',

  fontFamily: 'Poppins, sans-serif',
  fontSize: '14px',
  fontWeight: '400',
  color: 'rgb(59, 65, 83)',
  textDecoration: 'none',
  textAlign: 'left',
  lineHeight: '32px',
};

const Menulink = props => {
  return (
    <Aux>
      <li className='liMenuLink'>
        <Link id='menuLink' exact='true' to={props.linkTo} style={linkUnderline}>{props.label}</Link>
      </li>

      {/* <style jsx>
        {`
          .liMenuLink {
            position: relative;
            display: block;
            width: 100%;
            list-style-type: none;
            color: white;
            white-space: nowrap;
            transition: 0.1s;
          }
        `}
      </style> */}
    </Aux>
  );
};

export default Menulink;
