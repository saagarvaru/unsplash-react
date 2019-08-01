import React from 'react'


const ImageComponent = (props) => {
  var { data } = props;
  return (
    <div className='image' onClick={() => props.click()}>
      <img alt='this is a cool photo' src={data.urls.regular}/>
    </div>
  )
}

export default ImageComponent
