import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { useTranslation } from 'react-i18next'
import {
  CssBaseline,
  Grid,
  Typography,
  makeStyles,
  useTheme,
  withStyles,
  MobileStepper,
  Container,
  Paper,
  Button,
  Link,
  Tooltip
} from '@material-ui/core'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

import Coomming from '../../image/coommingsoon.jpg'

import Ecer1 from '../../image/ecer1.png'
import Ecer2 from '../../image/ecer2.png'
import Ecer3 from '../../image/ecer3.png'
import Ecer4 from '../../image/ecer4.png'
import Ecer5 from '../../image/ecer5.png'
import Ecer6 from '../../image/ecer6.png'
import Ecer7 from '../../image/ecer7.png'
import Ecer8 from '../../image/ecer8.png'

import Delifruit1 from '../../image/delifruit1.png'
import Delifruit2 from '../../image/delifruit2.png'
import Delifruit3 from '../../image/delifruit3.png'
import Delifruit4 from '../../image/delifruit4.png'
import Delifruit5 from '../../image/delifruit5.png'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

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
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#000000'
  },
  textheader: {
    textAlign: 'center',
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    color: theme.palette.common.white
  },
  internshipdetail: {
    textAlign: 'center',
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: theme.palette.common.white
  },
  graduateprojectdetail: {
    textAlign: 'center',
    flexGrow: 1,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    color: theme.palette.common.white
  },
  port: {
    flexGrow: 1,
    margin: 'auto',
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1100
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: 960
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 600
    }
  },
  header: {
    background: '#000000',
    color: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    paddingLeft: theme.spacing(4)

  },
  img: {
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1100,
      height: 550
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: 960,
      height: 400
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 600,
      height: 250
    }
  },
  mobilestepper: {
    background: '#000000',
    color: theme.palette.common.white
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

const face = [
  {
    imgPath: Coomming
  }
]

const ecer = [
  {
    label: 'Event',
    imgPath: Ecer1
  },
  {
    label: 'Stemcells virtual run',
    imgPath: Ecer2
  },
  {
    label: 'PALLIATIVE CARE RUN',
    imgPath: Ecer3
  },
  {
    label: 'Women Empowered',
    imgPath: Ecer4
  },
  {
    label: 'ETC MSU Virtual Run 2019',
    imgPath: Ecer5
  },
  {
    label: 'HOKA ONE ONE Time to Fly || Virtual Run #2',
    imgPath: Ecer6
  },
  {
    label: '50yrs NBC Run For Lives',
    imgPath: Ecer7
  },
  {
    label: 'RUN DOG DOG',
    imgPath: Ecer8
  }
]

const project = [
  {
    label: '',
    imgPath: Delifruit1
  },
  {
    label: '',
    imgPath: Delifruit2
  },
  {
    label: '',
    imgPath: Delifruit3
  },
  {
    label: '',
    imgPath: Delifruit4
  },
  {
    label: '',
    imgPath: Delifruit5
  }
]

const Portfolio = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const theme = useTheme()
  const [faceStep, setfaceStep] = React.useState(0)
  const [ecerStep, setecerStep] = React.useState(0)
  const [projectStep, setprojectStep] = React.useState(0)
  const maxface = face.length
  const maxecer = ecer.length
  const maxproject = project.length

  const faceNext = () => {
    setfaceStep((prevActiveStep) => prevActiveStep + 1)
  }
  const faceBack = () => {
    setfaceStep((prevActiveStep) => prevActiveStep - 1)
  }
  const faceChange = (stepecer) => {
    setfaceStep(stepecer)
  }
  const ecerNext = () => {
    setecerStep((prevActiveStep) => prevActiveStep + 1)
  }
  const ecerBack = () => {
    setecerStep((prevActiveStep) => prevActiveStep - 1)
  }
  const ecerChange = (stepecer) => {
    setecerStep(stepecer)
  }
  const projectNext = () => {
    setprojectStep((prevActiveStep) => prevActiveStep + 1)
  }
  const projectBack = () => {
    setprojectStep((prevActiveStep) => prevActiveStep - 1)
  }
  const projectChange = (step) => {
    setprojectStep(step)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography component="h2" variant="h4" className={classes.texttopic}>
                {t('PORTFOLIO')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h6" color="inherit" className={classes.textheader}>
                  {t('SELF_CHECKIN')}
                </Typography>
                <Typography variant="subtitle2" className={classes.internshipdetail}>
                  {t('SELF_CHECKIN_DETAIL')}
                  <br/>
                  <LightTooltip title={t('GO')} arrow>
                    <Link
                      href="https://ca.dev.bearright.co/BR/login"
                      color="inherit"
                      target="_blank"
                    >
                      ca.dev.bearright.co
                    </Link>
                  </LightTooltip>
                </Typography>
                <div className={classes.port}>
                  <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={faceStep}
                    onChangeIndex={faceChange}
                    enableMouseEvents
                  >
                    {face.map((step, index) => (
                      <div key={step.label}>
                        {Math.abs(faceStep - index) <= 2 ? (
                          <img className={classes.img} src={step.imgPath} alt={step.label} />
                        ) : null}
                      </div>
                    ))}
                  </AutoPlaySwipeableViews>
                  <MobileStepper
                    steps={maxface}
                    position="static"
                    variant="text"
                    activeStep={faceStep}
                    className={classes.mobilestepper}
                    nextButton={
                      <Button size="small" onClick={faceNext} disabled={faceStep === maxface - 1} className={classes.mobilestepper}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                      </Button>
                    }
                    backButton={
                      <Button size="small" onClick={faceBack} disabled={faceStep === 0} className={classes.mobilestepper}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                      </Button>
                    }
                  />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h6" color="inherit" className={classes.textheader}>
                  {t('INTERNSHIP')}
                </Typography>
                <Typography variant="subtitle2" className={classes.internshipdetail}>
                  {t('INTERNSHIP_DETAIL')}
                  <br/>
                  <LightTooltip title={t('GO')} arrow>
                    <Link
                      href="https://ecer.thai.run"
                      color="inherit"
                      target="_blank"
                    >
                      ecer.thai.run
                    </Link>
                  </LightTooltip>
                </Typography>
                <div className={classes.port}>
                  <Paper square elevation={0} className={classes.header}>
                    <Typography>{ecer[ecerStep].label}</Typography>
                  </Paper>
                  <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={ecerStep}
                    onChangeIndex={ecerChange}
                    enableMouseEvents
                  >
                    {ecer.map((step, index) => (
                      <div key={step.label}>
                        {Math.abs(ecerStep - index) <= 2 ? (
                          <img className={classes.img} src={step.imgPath} alt={step.label} />
                        ) : null}
                      </div>
                    ))}
                  </AutoPlaySwipeableViews>
                  <MobileStepper
                    steps={maxecer}
                    position="static"
                    variant="text"
                    activeStep={ecerStep}
                    className={classes.mobilestepper}
                    nextButton={
                      <Button size="small" onClick={ecerNext} disabled={ecerStep === maxecer - 1} className={classes.mobilestepper}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                      </Button>
                    }
                    backButton={
                      <Button size="small" onClick={ecerBack} disabled={ecerStep === 0} className={classes.mobilestepper}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                      </Button>
                    }
                  />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h6" color="inherit" className={classes.textheader}>
                  {t('GRADUATE_PROJECT')}
                </Typography>
                <Typography variant="subtitle2" className={classes.graduateprojectdetail}>
                  {t('GRADUATE_PROJECT_DETAIL')}
                </Typography>
                <div className={classes.port}>
                  <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={projectStep}
                    onChangeIndex={projectChange}
                    enableMouseEvents
                  >
                    {project.map((step, index) => (
                      <div key={step.label}>
                        {Math.abs(projectStep - index) <= 2 ? (
                          <img className={classes.img} src={step.imgPath} alt={step.label} />
                        ) : null}
                      </div>
                    ))}
                  </AutoPlaySwipeableViews>
                  <MobileStepper
                    steps={maxproject}
                    position="static"
                    variant="text"
                    activeStep={projectStep}
                    className={classes.mobilestepper}
                    nextButton={
                      <Button size="small" onClick={projectNext} disabled={projectStep === maxproject - 1} className={classes.mobilestepper}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                      </Button>
                    }
                    backButton={
                      <Button size="small" onClick={projectBack} disabled={projectStep === 0} className={classes.mobilestepper}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                      </Button>
                    }
                  />
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Portfolio
