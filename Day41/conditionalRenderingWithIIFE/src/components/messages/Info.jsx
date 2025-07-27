import React from 'react'

const Info = ({text,status}) => {
    console.log(text,status)
  return (
    <div>
        {(function(){
            switch(status){
                case "info":
                    return text
                case "Warning":
                    return text
                case "Error":
                    return text
            }
        })()}
    </div>
  )
}

export default Info