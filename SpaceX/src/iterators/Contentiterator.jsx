import React from 'react'
const Contentiterator = (props) => {
    console.log(props);
    const {launchupdate,ship_name,btn_text}=props.data
  return (
    <div className="content">
       {launchupdate!=null? <h4>{launchupdate}</h4>:""}
        <h1>{ship_name}</h1>
        <button>{btn_text}</button>
      </div>
  )
}
export default Contentiterator