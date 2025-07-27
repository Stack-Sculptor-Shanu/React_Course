import React, { Fragment } from 'react'
import NavbarContainer from '../../Components/Headers/Container'
import { Outlet } from 'react-router-dom'


const MyntraLayout = () => {
  return (
    <Fragment>
        <NavbarContainer/> {/*Static component composition in layout components*/}
        <Outlet/> {/*Dynamic route based on URL */}
    </Fragment>
  )
}

export default MyntraLayout