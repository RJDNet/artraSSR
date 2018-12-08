import React from 'react';
import { Link } from 'react-router-dom';

import Aux from '../../../hoc/auxhoc/Auxhoc';

const linkUnderline = {
  position: 'relative',
  display: 'inline-block',
  height: '50px',
  paddingLeft: '.50rem',
  paddingRight: '.50rem',
  boxSizing: 'border-box',
  borderLeft: '1px solid transparent',
  borderRight: '1px solid transparent',

  fontFamily: 'Poppins, sans-serif',
  fontSize: '14px',
  fontWeight: '700',
  color: 'rgb(59, 65, 83)',
  textDecoration: 'none',
  textAlign: 'center',
  lineHeight: '45px',
};

const Navlink = props => {
  return (
    <Aux>
      <Link exact='true' to={props.linkTo} style={linkUnderline}>{props.label}</Link>
    </Aux>
  );
};

export default Navlink;
