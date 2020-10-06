import React from 'react'
import {
  withStyles
} from '@material-ui/core'
import ProductHeroLayout from './layout'
import Banner from '../../image/banner.jpg'

const styles = theme => ({
  background: {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'center'
  },
  button: {
    minWidth: 200
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  }
})

function ProductHero (props) {
  const { classes } = props

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>

    </ProductHeroLayout>
  )
}

export default withStyles(styles)(ProductHero)
