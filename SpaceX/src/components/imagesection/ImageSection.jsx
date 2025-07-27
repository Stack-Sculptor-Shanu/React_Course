import React from 'react'
import Contentiterator from '../../iterators/Contentiterator'

const ImageSection = (props) => {
    
const {image,content}=props.data
  return (
    <div className="image-container">
        <img src={image} alt="" width="100%" height="100%"/>
      <Contentiterator data={content}/>
    </div>
  )
}

export default ImageSection