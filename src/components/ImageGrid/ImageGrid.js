import React from 'react'

// Components
import ImageComponent from './ImageComponent'


// Provider function
import { getImages } from './ImageGridProvider'

// Styles
import './ImageGrid.css'

// Plugins
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';
import InfiniteScroll from 'react-infinite-scroll-component';

// Data
import photos from './photos.json'

class ImageGrid extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      photosPerPage: 12,
      images: photos,
      isOpen: false,
      selectedIndex: 0,
    }
    console.log(this.state);
  }

  // See ImageGridProvider.js for API implmentation
  fetchData() {
    let newList = this.state.images.concat(photos);
    this.setState({
      page: this.state.page + 1,
      images: newList
    })
  }

  openLightBox(event, index) {
    this.setState({
      isOpen: true,
      selectedIndex: index
    })
  }

  closeLightBox() {
    this.setState({
      isOpen: false
    })
  }


  render() {

    const { isOpen, selectedIndex, images } = this.state;
    var imageElements = this.state.images.map((element, index) => {
      return (
        <ImageComponent
          click={this.openLightBox.bind(this, element, index)}
          key={index}
          data={element}
        />
      )
    })

    return (
      <div className='ImageGrid-root'>
        <div><h2>ImageGrid</h2></div>
        <div className='imagesContainer'>
          { imageElements }
        </div>
        { isOpen ?
          <Lightbox
            mainSrc={images[selectedIndex].urls.regular}
            nextSrc={images[selectedIndex + 1 % images.length] }
            prevSrc={images[selectedIndex - 1 % images.length]}

            onMovePrevRequest={() =>
              this.setState({
                selectedIndex: (selectedIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                selectedIndex: (selectedIndex + 1) % images.length,
              })
            }
            onCloseRequest={ () => this.closeLightBox() }
          />
          : null
        }
        <InfiniteScroll
          dataLength={images.length} //This is important field to render the next data
          next={() => this.fetchData()}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        />

      </div>
    )
  }
}

export default ImageGrid
