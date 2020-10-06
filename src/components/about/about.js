import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  CssBaseline,
  Container,
  makeStyles,
  Typography,
  Paper,
  Grid,
  Avatar,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Link,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withStyles,
  Tooltip,
  Snackbar
} from '@material-ui/core'
import { ExpandMore, CloudDownload } from '@material-ui/icons'
import MuiAlert from '@material-ui/lab/Alert'

import Profile from '../../image/profile.png'
import Education from '../../image/education.png'
import WorkExperience from '../../image/work.png'
import Download from '../../image/download.png'

import pdf from '../../export/sample.pdf'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#eeeeee'
  },
  texttopic: {
    textAlign: 'center',
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.common.white
  },
  aboutme: {
    textAlign: 'center',
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  profile: {
    flexGrow: 1,
    margin: 'auto',
    width: theme.spacing(25),
    height: theme.spacing(25)
  },
  aboutcontext: {
    flexGrow: 1,
    textAlign: 'center',
    marginTop: theme.spacing(3.5)

  },
  aboutcontext2: {
    flexGrow: 1,
    textAlign: 'center'
  },
  educationphoto: {
    flexGrow: 1,
    margin: 'auto',
    marginTop: theme.spacing(1.5),
    width: theme.spacing(25),
    height: theme.spacing(25)
  },
  educationcontext: {
    margin: 'auto',
    textAlign: 'center'
  },
  workexperience: {
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  workexperiencephoto: {
    flexGrow: 1,
    margin: 'auto',
    width: theme.spacing(30),
    height: theme.spacing(27)
  },
  experienceheading: {
    fontWeight: theme.typography.fontWeightRegular
  },
  download: {
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(1)
  },
  downloadphoto: {
    flexGrow: 1,
    margin: 'auto',
    marginTop: theme.spacing(3.5),
    marginBottom: theme.spacing(2),
    width: theme.spacing(24),
    height: theme.spacing(24)
  },
  downloadcontext: {
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(1)
  },
  expansionPanel: {
    marginTop: theme.spacing(0.5),
    backgroundColor: '#eeeeee',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#fafafa',
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },
  alert: {
    fontSize: 16
  }
}))

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 14
  }
}))(Tooltip)

const Alert = (props) => {
  return <MuiAlert elevation={10} variant="filled" {...props} />
}

const About = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [openSnackbar, setOpenSnackbar] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickSnackbar = () => {
    setOpen(false)
    setOpenSnackbar(true)
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSnackbar(false)
    setOpen(false)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography component="h2" variant="h4" className={classes.texttopic}>
                {t('ABOUT_TOPIC')}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <Typography variant="h5" color="inherit" className={classes.aboutme}>
                  {t('ABOUT_ME')}
                </Typography>
                <Avatar variant="rounded" alt="profile" src={Profile} className={classes.profile} />
                <Typography variant="h6" color="inherit" className={classes.aboutcontext}>
                  {t('NAME')}
                </Typography>
                <Typography variant="subtitle1" color="inherit" className={classes.aboutcontext2}>
                  {t('POSITION')}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <Typography variant="h5" color="inherit" className={classes.educationcontext}>
                  {t('ABOUT_EDUCATION')}
                </Typography>
                <Avatar alt="education" variant="square" src={Education} className={classes.educationphoto} />
                <Typography variant="h6" color="inherit" className={classes.educationcontext}>
                  {t('BACHELOR_DEGREES')}
                </Typography>
                <Typography variant="subtitle1" color="inherit" className={classes.educationcontext}>
                  {t('EDUCATION')}
                </Typography>
                <Typography variant="subtitle1" color="inherit" className={classes.educationcontext}>
                  {t('INSTITUUTION')}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <Typography variant="h5" color="inherit" className={classes.workexperience}>
                  {t('ABOUT_EXPERIENCE')}
                </Typography>
                <Avatar alt="education" variant="square" src={WorkExperience} className={classes.workexperiencephoto} />
                <ExpansionPanel className={classes.expansionPanel}>
                  <ExpansionPanelSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content"id="panel1a-header">
                    <Typography variant="subtitle2" color="inherit" className={classes.experienceheading}>
                      {t('EXPERIENCE2')}
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography variant="body2" color="inherit">
                      <b>{t('EXP2')}</b>
                      <br/>
                      {t('EXPDETAIL2')}
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
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel className={classes.expansionPanel}>
                  <ExpansionPanelSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography variant="subtitle2" color="inherit" className={classes.experienceheading}>
                      {t('EXPERIENCE1')}
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography variant="body2" color="inherit">
                      <b>{t('EXP1')}</b>
                      <br/>
                      {t('EXPDETAIL1')}
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
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <Typography variant="h5" color="inherit" className={classes.download}>
                  {t('DOWNLOAD')}
                </Typography>
                <Avatar alt="education" variant="square" src={Download} className={classes.downloadphoto} />
                <Typography variant="h6" color="inherit" className={classes.downloadcontext}>
                  {t('DOWNLOAD_CONTEXT')}
                </Typography>
                <Typography variant="h4" color="inherit" className={classes.downloadcontext}>
                  <Button variant="contained" color="primary" onClick={handleClickOpen}>
                    <CloudDownload/>&nbsp;{t('BUTTON_DOWNLOAD')}
                  </Button>
                </Typography>
                <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                  <DialogTitle id="alert-dialog-title">
                    <Typography variant="body2" color="inherit">
                      {t('ALERT_DOWNLOAD_HEADER')}
                    </Typography>
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <Typography variant="body2" color="inherit">
                        {t('ALERT_DOWNLOAD_CONTEXT')}
                      </Typography>
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" className={classes.downloadcontext}>
                      <Button variant="contained" color="primary" onClick={handleClickSnackbar} href={pdf} download>
                        {t('BUTTON_EN')}
                      </Button>
                    &nbsp;
                      <Button variant="contained" color="primary" onClick={handleClickSnackbar} href={pdf} download>
                        {t('BUTTON_TH')}
                      </Button>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                      {t('BUTTON_CLOSE')}
                    </Button>
                  </DialogActions>
                </Dialog>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" message="Note archived">
          <Typography variant="caption" color="inherit" className={classes.alert}>
            {t('BUTTON_DOWNLOAD')}
          </Typography>
        </Alert>
      </Snackbar>
    </React.Fragment>
  )
}

export default About
