import React, { Component } from 'react';
import classNames from 'classnames';

import Menulink from '../menulinks/Menulink';

// class Menu extends Component {
//   constructor() {
//     super()
//     this.state = {
//       menuToggle: false
//     };
//   };

//   menuToggle = () => {
//     this.setState({
//       menuToggle: !this.state.menuToggle
//     });
//   };

//   menuOn = () => {
//     this.setState({
//       menuToggle: false
//     });
//   };

//   render() {
//     const { menuToggle } = this.state;
//     const menuTog = menuToggle ? 'none' : 'block';

//     return (
//       <div className='shopMenu'>
//         <ul className='ulShopMenu'>
//           <Menulink label='Home' linkTo='/' />
//           <Menulink label='About' linkTo='/about' />
//           <Menulink label='Blog' linkTo='/blog' />
//           <Menulink label='Shop' linkTo='/shop' />
//           <Menulink label='Gallery' linkTo='/gallery' />
//         </ul>
//       </div>
//     );
//   };
// };

// export default Menu;

const Menu = () => {
  return (
    <div className='shopMenu'>
      <ul className='ulShopMenu'>
        <Menulink label='Home' linkTo='/' />
        <Menulink label='About' linkTo='/about' />
        <Menulink label='Blog' linkTo='/blog' />
        <Menulink label='Shop' linkTo='/shop' />
        <Menulink label='Gallery' linkTo='/gallery' />
      </ul>

      {/* <style jsx>
        {`
          .ulShopMenu {
            padding: 20px;
            margin: 0px;
            box-sizing: border-box;
          }
        `}
      </style> */}
    </div>
  );
};

export default Menu;
