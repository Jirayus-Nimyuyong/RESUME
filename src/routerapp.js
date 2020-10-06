import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'

const useStyles = makeStyles(() => ({
  background: {
    backgroundColor: '#000000'
  }
}))

const Router = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className={classes.background}>
        <Navbar/>
        <Footer/>
      </div>
    </React.Fragment>
  )
}

export default Router
