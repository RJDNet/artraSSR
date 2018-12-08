import React from 'react';
import { Link } from 'react-router-dom';

import Aux from '../../../hoc/auxhoc/Auxhoc';

const linkUnderline = {
  position: 'relative',
  display: 'block',
  height: '17px',
  marginLeft: '20px',
  paddingTop: '11px',
  paddingBottom: '11px',

  fontFamily: 'Poppins, sans-serif',
  fontSize: '14px',
  fontWeight: '700',
  textDecoration: 'none',
  color: 'rgb(59, 65, 83)',
  lineHeight: '16px',

  whiteSpace: 'nowrap',

  transition: 'ease-out 0.2s',
};

const Sidelink = props => {
  return (
    <Aux>
      <li className='sideLinker'>
        <Link exact='true' to={props.linkTo} style={linkUnderline} onClick={props.clicker}>{props.label}</Link>
      </li>

      <style jsx>
        {`
          .sideLinker {
            position: relative;
            display: block;
            width: 100%;
            list-style-type: none;
            color: white;
            white-space: nowrap;
            transition: 0.1s;
          }

          .sideLinker:hover {
            background-color: rgba(0,0,0,0.08);
            padding-left: 15px;
            transition: 0.1s;
          }
        `}
      </style>
    </Aux>
  );
};

export default Sidelink;
