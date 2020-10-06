import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  CssBaseline,
  Container,
  makeStyles,
  Typography,
  Paper,
  Avatar,
  Grid,
  Card,
  CardContent,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from '@material-ui/core'
import { Add, Code, Storage, ScatterPlot, Build } from '@material-ui/icons'

import TECH from '../../image/build.png'
import HTML from '../../image/html.png'
import CSS from '../../image/css.png'
import JS from '../../image/javascript.png'
import ES6 from '../../image/es6.png'
import PHP from '../../image/php.png'
import SQL from '../../image/sql.png'
import TS from '../../image/typescript.png'
import PG from '../../image/postgresql.png'
import MG from '../../image/mongodb.png'
import MS from '../../image/mysql.png'
import BT from '../../image/bootstrap.png'
import NODE from '../../image/nodejs.png'
import EX from '../../image/expressjs.png'
import RE from '../../image/react.png'
import MT from '../../image/material.png'
import GQL from '../../image/graphql.png'
import ANTD from '../../image/ant.png'
import IO from '../../image/ionic.png'
import DK from '../../image/docker.png'
import GIT from '../../image/git.png'
import PM from '../../image/postman.png'
import UBT from '../../image/ubuntu.png'
import GT from '../../image/gitlap.png'
import MSW from '../../image/word.png'
import MSE from '../../image/excel.png'
import MSP from '../../image/powerpoint.png'
import PS from '../../image/photoshop.png'

const useStyles = makeStyles(theme => ({
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
    backgroundColor: '#eeeeee'
  },
  expansionPanel: {
    backgroundColor: '#eeeeee',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#fafafa',
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },
  language: {
    textAlign: 'center',
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  lang: {
    textAlign: 'center',
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  tech: {
    textAlign: 'center',
    flexGrow: 1,
    marginTop: theme.spacing(1)
  },
  techphoto: {
    flexGrow: 1,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(35),
      height: theme.spacing(20),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(50),
      height: theme.spacing(30),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    [theme.breakpoints.up('lg')]: {
      width: theme.spacing(80),
      height: theme.spacing(40),
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5)
    }
  },
  headingpanel: {
    textAlign: 'left',
    flexGrow: 1
  },
  card: {
    backgroundColor: theme.palette.action.hover,
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#fafafa',
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },
  cardphoto: {
    flexGrow: 1,
    margin: 'auto',
    width: theme.spacing(11),
    height: theme.spacing(11)
  },
  cardcontext: {
    textAlign: 'center',
    flexGrow: 1,
    marginTop: theme.spacing(1)
  },
  other: {
    textAlign: 'left',
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  softskill: {
    flexGrow: 1,
    margin: theme.spacing(2)
  }
}))

const Skill = () => {
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
                {t('SKILL_TOPIC')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h5" className={classes.tech}>
                  {t('SEILL_STACK')}
                </Typography>
                <Avatar alt="education" variant="square" src={TECH} className={classes.techphoto} />
                <ExpansionPanel className={classes.expansionPanel}>
                  <ExpansionPanelSummary expandIcon={<Add />} aria-controls="panel1a-content" id="panel1a-header">
                    <Code/>&nbsp;<Typography variant="subtitle1" className={classes.headingpanel}>{t('PROGRAMMING_LANGUAGES')}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={HTML} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('HTML')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={CSS} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('CSS')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={JS} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('JS')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={ES6} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('ES6')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={PHP} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('PHP')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={SQL} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('SQL')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={TS} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('TS')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel className={classes.expansionPanel}>
                  <ExpansionPanelSummary expandIcon={<Add />} aria-controls="panel1a-content" id="panel1a-header">
                    <Storage/>&nbsp;<Typography variant="subtitle1" className={classes.headingpanel}>{t('DB')}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={PG} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('POSTGRESQL')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={MG} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('MONGODB')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={MS} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('MYSQL')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel className={classes.expansionPanel}>
                  <ExpansionPanelSummary expandIcon={<Add />} aria-controls="panel1a-content" id="panel1a-header">
                    <ScatterPlot/>&nbsp;<Typography variant="subtitle1" className={classes.headingpanel}>{t('FRAMEWORK')}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={BT} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('BOOTSTRAP')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={NODE} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('NODEJS')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={EX} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('EXPRESS')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={RE} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('REACT')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={MT} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('MATERIAL')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={GQL} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('GRAPHQL')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={ANTD} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('ANT')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={IO} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('IONIC')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel className={classes.expansionPanel}>
                  <ExpansionPanelSummary expandIcon={<Add />} aria-controls="panel1a-content" id="panel1a-header">
                    <Build/>&nbsp;<Typography variant="subtitle1" className={classes.headingpanel}>{t('OTHER')}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={GIT} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('GIT')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={PM} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('POSTMAN')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={UBT} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('UBUNTU')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={GT} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('GETLAB')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Avatar alt="education" variant="square" src={DK} className={classes.cardphoto} />
                            <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                              {t('DOCKER')}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h5" color="inherit" className={classes.language}>
                  {t('SKILL_LANGUAGE')}
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6} alignItems="center" justify="center" direction="column">
                    <Card>
                      <Typography variant="h6" color="inherit" className={classes.lang}>
                        {t('SKILL_EN')}
                      </Typography>
                      <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                          <TableBody>
                            <TableRow>
                              <TableCell align="center" component="th" scope="row">{t('SKILL_LISTEN')}</TableCell>
                              <TableCell align="center" component="th" scope="row">{t('SKILL_RANK2')}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell align="center" component="th" scope="row">{t('SKILL_SPEAK')}</TableCell>
                              <TableCell align="center" component="th" scope="row">{t('SKILL_RANK3')}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell align="center" component="th" scope="row">{t('SKILL_READ')}</TableCell>
                              <TableCell align="center" component="th" scope="row">{t('SKILL_RANK2')}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell align="center" component="th" scope="row"> {t('SKILL_WRITE')}</TableCell>
                              <TableCell align="center" component="th" scope="row">{t('SKILL_RANK3')}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card>
                      <Typography variant="h6" color="inherit" className={classes.lang}>
                        {t('SKILL_TH')}
                      </Typography>
                      <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                          <TableBody>
                            <TableRow>
                              <TableCell align="center" component="th" scope="row">{t('SKILL_LISTEN')}</TableCell>
                              <TableCell align="center" component="th" scope="row">{t('SKILL_RANK1')}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell align="center" component="th" scope="row">{t('SKILL_SPEAK')}</TableCell>
                              <TableCell align="center" component="th" scope="row">{t('SKILL_RANK1')}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell align="center" component="th" scope="row">{t('SKILL_READ')}</TableCell>
                              <TableCell align="center" component="th" scope="row">{t('SKILL_RANK1')}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell align="center" component="th" scope="row"> {t('SKILL_WRITE')}</TableCell>
                              <TableCell align="center" component="th" scope="row">{t('SKILL_RANK2')}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Card>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={5}>
              <Paper className={classes.paper}>
                <Typography variant="h5" color="inherit" className={classes.other}>
                  {t('SKILL_OTHER')}
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6}>
                    <Card className={classes.card}>
                      <CardContent>
                        <Avatar alt="education" variant="square" src={MSW} className={classes.cardphoto} />
                        <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                          {t('WORD')}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card className={classes.card}>
                      <CardContent>
                        <Avatar alt="education" variant="square" src={MSE} className={classes.cardphoto} />
                        <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                          {t('EXCEL')}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card className={classes.card}>
                      <CardContent>
                        <Avatar alt="education" variant="square" src={MSP} className={classes.cardphoto} />
                        <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                          {t('POINT')}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card className={classes.card}>
                      <CardContent>
                        <Avatar alt="education" variant="square" src={PS} className={classes.cardphoto} />
                        <Typography gutterBottom variant="h6" component="h2" className={classes.cardcontext}>
                          {t('PSD')}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={7}>
              <Paper className={classes.paper}>
                <Typography variant="h5" color="inherit">
                  {t('SKILL_QUALIFICATION')}
                </Typography>
                <Typography variant="subtitle1" className={classes.softskill}>
                  {t('QUALIFICATION1')}
                </Typography>
                <Typography variant="subtitle1" className={classes.softskill}>
                  {t('QUALIFICATION2')}
                </Typography>
                <Typography variant="subtitle1" className={classes.softskill}>
                  {t('QUALIFICATION3')}
                </Typography>
                <Typography variant="subtitle1" className={classes.softskill}>
                  {t('QUALIFICATION4')}
                </Typography>
                <Typography variant="subtitle1" className={classes.softskill}>
                  {t('QUALIFICATION5')}
                </Typography>
                <Typography variant="subtitle1" className={classes.softskill}>
                  {t('QUALIFICATION6')}
                </Typography>
                <Typography variant="subtitle1" className={classes.softskill}>
                  {t('QUALIFICATION7')}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Skill
