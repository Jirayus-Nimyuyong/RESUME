import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '5vh',
    paddingTop: 1
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: '#000000',
    textAlign: 'center',
    position: 'buttom'
  },
  context: {
    color: theme.palette.common.white
  }
}))

const Copyright = () => {
  const classes = useStyles()
  return (
    <Typography variant="body2" color="textSecondary" className={classes.context}>
      {'Copyright © '}
      {new Date().getFullYear()}
      &nbsp;
      Jirayus Resume . All Rights Reserved | Design by GOTHAM
      {'.'}
    </Typography>
  )
}

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Copyright />
    </footer>

  )
}

export default Footer
