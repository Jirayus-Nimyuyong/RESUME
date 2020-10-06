import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  CssBaseline,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  withStyles,
  makeStyles,
  Tooltip,
  Container,
  Avatar
} from '@material-ui/core'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from 'react-google-maps'

import Mail from '../../image/mail.png'
import Call from '../../image/call.png'
import GitHup from '../../image/githup.png'
import Facebook from '../../image/facebook.png'
import LinkedIn from '../../image/linkedin.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  texttopic: {
    textAlign: 'center',
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.common.white
  },
  subtopic: {
    color: theme.palette.common.white,
    textAlign: 'center',
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3)
  },
  card: {
    backgroundColor: '#eeeeee'
  },
  textheader: {
    textAlign: 'center',
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  mailphoto: {
    flexGrow: 1,
    margin: 'auto',
    width: theme.spacing(25),
    height: theme.spacing(25)
  },
  context: {
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(2)
  },
  socialphoto: {
    flexGrow: 1,
    margin: 'auto',
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginBottom: theme.spacing(3)
  }
}))

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 16
  }
}))(Tooltip)

const Map = () => {
  return (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: 13.764837, lng: 100.267668 }}>
      <Marker position={{ lat: 13.764837, lng: 100.267668 }}/>
    </GoogleMap>
  )
}

const MapWrapped = withScriptjs(withGoogleMap(Map))

const Contact = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography component="h2" variant="h4" className={classes.texttopic}>
                {t('CONTACT_TOPIC')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" color="inherit" className={classes.subtopic}>
                {t('CONTACT_TEXT')}
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography variant="h5" color="inherit" className={classes.textheader}>
                        {t('CONTACT_MAIL')}
                      </Typography>
                      <LightTooltip title={t('SEND_MAIL')} arrow>
                        <Avatar href="mailto:info@example.com" alt="education" variant="square" src={Mail} className={classes.mailphoto} />
                      </LightTooltip>
                      <Typography variant="subtitle1" color="inherit" className={classes.context}>
                        {t('CONTACT_EMAIL')}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography variant="h5" color="inherit" className={classes.textheader}>
                        {t('CONTACT_PHONE')}
                      </Typography>
                      <LightTooltip title={t('CALL_PHONE')} arrow>
                        <Avatar href="tel:0944798231" alt="education" variant="square" src={Call} className={classes.mailphoto} />
                      </LightTooltip>
                      <Typography variant="subtitle1" color="inherit" className={classes.context}>
                        {t('CONTACT_PHONENO')}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card className={classes.card}>
                    <LightTooltip title={t('SEE_MORE')} arrow>
                      <CardActionArea
                        href="https://github.com/gotjirayus"
                        target="_blank"
                      >
                        <CardContent>
                          <Typography variant="h5" color="inherit" className={classes.textheader}>
                            {t('CONTACT_GITHUP')}
                          </Typography>
                          <Avatar alt="education" variant="square" src={GitHup} className={classes.socialphoto} />
                        </CardContent>
                      </CardActionArea>
                    </LightTooltip>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card className={classes.card}>
                    <LightTooltip title={t('SEE_MORE')} arrow>
                      <CardActionArea
                        href="https://www.facebook.com/godjieieiei"
                        target="_blank"
                      >
                        <CardContent>
                          <Typography variant="h5" color="inherit" className={classes.textheader}>
                            {t('CONTACT_FACEBOOK')}
                          </Typography>
                          <Avatar alt="education" variant="square" src={Facebook} className={classes.socialphoto} />
                        </CardContent>
                      </CardActionArea>
                    </LightTooltip>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card className={classes.card}>
                    <LightTooltip title={t('SEE_MORE')} arrow>
                      <CardActionArea
                        href="https://www.linkedin.com/in/jirayus-nimyuyong-6527721a6/"
                        target="_blank"
                      >
                        <CardContent>
                          <Typography variant="h5" color="inherit" className={classes.textheader}>
                            {t('CONTACT_LINKEDIN')}
                          </Typography>
                          <Avatar alt="education" variant="square" src={LinkedIn} className={classes.socialphoto} />
                        </CardContent>
                      </CardActionArea>
                    </LightTooltip>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" color="inherit" className={classes.textheader}>
                    {t('CONTACT_AT')}
                  </Typography>
                </CardContent>
                <div style={{ width: '100%', height: '70vh' }}>
                  <MapWrapped
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_KEY_MAP}`}
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: '100%' }} />}
                    mapElement={<div style={{ height: '100%' }} />}
                  />
                </div>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Contact
