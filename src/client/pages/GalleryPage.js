import React, { Component } from 'react';

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import gallerypic1 from '../images/gallery/gallerypic1.jpeg';
import gallerypic2 from '../images/gallery/gallerypic2.jpeg';
import gallerypic3 from '../images/gallery/gallerypic3.jpeg';
import gallerypic4 from '../images/gallery/gallerypic4.jpeg';
import gallerypic5 from '../images/gallery/gallerypic5.jpeg';
import gallerypic6 from '../images/gallery/gallerypic6.jpeg';
import gallerypic7 from '../images/gallery/gallerypic7.jpeg';
import gallerypic8 from '../images/gallery/gallerypic8.jpeg';

const PHOTO_SET = [
  { src: gallerypic1, width: 4, height: 3 },
  { src: gallerypic2, width: 3, height: 3 },
  { src: gallerypic3, width: 2, height: 1 },
  { src: gallerypic4, width: 4, height: 3 },
  { src: gallerypic5, width: 3, height: 2 },
  { src: gallerypic6, width: 2, height: 1 },
  { src: gallerypic7, width: 3, height: 2 },
  { src: gallerypic8, width: 3, height: 2 }
];

class GalleryPage extends Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  };

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  render() {
    return (
      <div className='galleryPageContainer'>
        <h1 className='galleryTitle'>The Gallery</h1>
        <div className='galleryContainer'>
          <Gallery photos={PHOTO_SET} direction={"column"} onClick={this.openLightbox} />
          <Lightbox
            images={PHOTO_SET}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        </div>
      </div>
    )
  };
};

export default GalleryPage;
