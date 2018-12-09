import React, { Component } from 'react';
import { Redirect } from 'react-router';

class ShopSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLink: false,
    }
  };

  shopClicker = () => {
    this.setState({
      toLink: true
    });
    window.scrollTo(0, 0);
  };

  render() {
    if (this.state.toLink === true) {
      return <Redirect push to={this.props.loc} />
    }

    return (
      <div className='shopSection' onClick={this.shopClicker}>
        <img className='shopSectionImage' src={this.props.image} />
        <h3 className='shopSectionTitle'>{this.props.title}</h3>
        <p className='shopSectionText'>{this.props.text}</p>
        <div className='shopSectionLinkContainer'>
          <p className='shopSectionLink'>{this.props.linkText}</p>
        </div>
      </div>
    );
  };
};

export default ShopSection;




// const ShopSection = props => {
//   return (
//     <div className='shopSection' onClick={shopClicker(props.loc)}>
//       <img className='shopSectionImage' src={props.image} />
//       <h3 className='shopSectionTitle'>{props.title}</h3>
//       <p className='shopSectionText'>{props.text}</p>
//       <div className='shopSectionLinkContainer'>
//         <Link to={props.loc} style={linkUnderline}>{props.linkText}</Link>
//       </div>
//     </div>
//   );
// };

// export default ShopSection;
