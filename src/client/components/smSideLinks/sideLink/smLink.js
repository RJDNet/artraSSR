import React from 'react';

// import React, { Component } from 'react';
// import classNames from 'classnames';

// class SMLink extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       toggler: false
//     };

//   };

//   mouseToggler = () => {
//     this.setState({
//       toggler: !this.state.toggler
//     });
//   };

//   render() {
//     const { toggler } = this.state;

//     return (
//       <div className={classNames('smLink', { 'toggler': toggler })} onMouseOver={this.mouseToggler}>
//         <img className='smLinkBut' src={this.props.img} />

//         <style jsx>
//           {`
//           .smLink {
//             height: 32px;
//             width: 32px;
//             transition: ease 1s;
//           }

//           .smLinkBut {
//             float: left;
//           }

//           .smLink.toggler {
//             width: 120px;
//             transition: ease 1s;
//           }
//         `}
//         </style>
//       </div>
//     )
//   }
// }

// export default SMLink;

const smLink = props => {
  return (
    <a href='/'>
      <div id='smLink' style={{ backgroundColor: props.color }}>
        <div className='smIconContainer'>
          <img className='smLinkBut' src={props.img} />
        </div>
        <span className='smLinkText'>{props.label}</span>

        {/* <style jsx>
        {`
          #smLink {
            height: 32px;
            width: 32px;
            margin-top: 5px;
            transition: ease 1s;
          }

          .smLinkBut {
            float: left;
          }

          #smLink:hover {
            width: 120px;
            transition: ease 1s;
          }
        `}
      </style> */}
      </div>
    </a>
  );
};

export default smLink;