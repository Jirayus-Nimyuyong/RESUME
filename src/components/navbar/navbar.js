import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Menu,
  MenuItem,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tabs,
  SwipeableDrawer,
  Box,
  Tab,
  IconButton,
  List,
  ListItem,
  Divider,
  useScrollTrigger,
  Zoom,
  CssBaseline,
  Fab,
  Tooltip,
  withStyles
} from '@material-ui/core'
import {
  MoreVert,
  Translate,
  Menu as MenuIcon,
  ExpandMore,
  ChevronRight,
  KeyboardArrowUp
} from '@material-ui/icons'
import { TreeView, TreeItem } from '@material-ui/lab'

import Banner from '../banner/banner'
import About from '../about/about'
import Skills from '../skills/skill'
import Portfolio from '../portfolio/portfolio'
import Contact from '../contact/contact'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  appbar: {
    background: '#000000'
  },
  title: {
    flexGrow: 1
  },
  buttonCollapse: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  navvertical: {
    margin: 'auto'
  },
  navtab: {
    textAlign: 'center',
    margin: 'auto'
  },
  banner: {
    display: 'none'
  },
  buttonBar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  textnav: {
    '&:hover': {
      color: '#f50057'
    }
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

const ScrollTop = (props) => {
  const { children, window } = props
  const classes = useStyles()
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  })
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.fab}>
        {children}
      </div>
    </Zoom>
  )
}

const TabPanel = (props) => {
  const {
    children,
    value,
    index,
    ...other
  } = props
  return (
    <Typography component="div" role="tabpanel" hidden={value !== index} id={`nav-tabpanel-${index}`} aria-labelledby={`nav-tab-${index}`} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

const a11yProps = (index) => {
  return { id: `nav-tab-${index}`, 'aria-controls': `nav-tabpanel-${index}` }
}

const LinkTab = (props) => {
  return (<Tab component="a" onClick={(event) => { event.preventDefault() }} {...props}/>)
}

const Navbar = (props) => {
  const { t, i18n } = useTranslation()
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [value, setValue] = React.useState(0)
  const [state, setState] = React.useState({
    right: false
  })

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const changeLanguageEn = () => {
    setAnchorEl(null)
    i18n.changeLanguage('en')
  }

  const changeLanguageTh = () => {
    setAnchorEl(null)
    i18n.changeLanguage('th')
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <Tabs value={value} onChange={handleChange} className={classes.title}>
            <LinkTab label={t('MYRESUME')} {...a11yProps(0)} className={classes.textnav}/>
          </Tabs>
          {['right'].map((anchor) => (
            <React.Fragment key={anchor} >
              <IconButton onClick={toggleDrawer(anchor, true)} className={classes.buttonCollapse} color="inherit"><MenuIcon /></IconButton>
              <SwipeableDrawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} onOpen={toggleDrawer(anchor, true)}>
                <List className={classes.navvertical}>
                  <ListItem>
                    <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs example" className={classes.navtab}>
                      <Tab label={t('MYRESUME')} {...a11yProps(0)} onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}/>
                      <Tab label={t('NAV_ABOUTME')} {...a11yProps(1)} onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)} />
                      <Tab label={t('NAV_SKILLS')} {...a11yProps(2)} onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)} />
                      <Tab label={t('NAV_PORTFOLIO')} {...a11yProps(3)} onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)} />
                      <Tab label={t('NAV_CONTACT')} {...a11yProps(4)} onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)} />
                    </Tabs>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <TreeView defaultCollapseIcon={<ExpandMore />} defaultExpandIcon={<ChevronRight />}>
                      <TreeItem nodeId="1" label={t('NAV_VERTICAL_LANGUAGE')}>
                        <ListItem>
                          <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={changeLanguageEn} >
                            {t('NAV_VERTICAL_EN')}
                          </Button>
                          <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={changeLanguageTh} >
                            {t('NAV_VERTICAL_TH')}
                          </Button>
                        </ListItem>
                      </TreeItem>
                    </TreeView>
                  </ListItem>
                </List>
              </SwipeableDrawer>
            </React.Fragment>
          ))}
          <div className={classes.buttonBar} id="appbar-collapse">
            <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs example">
              <LinkTab {...a11yProps(0)} disabled className={classes.banner} />
              <LinkTab label={t('NAV_ABOUTME')} {...a11yProps(1)} className={classes.textnav}/>
              <LinkTab label={t('NAV_SKILLS')} {...a11yProps(2)} className={classes.textnav}/>
              <LinkTab label={t('NAV_PORTFOLIO')} {...a11yProps(3)} className={classes.textnav}/>
              <LinkTab label={t('NAV_CONTACT')} {...a11yProps(4)} className={classes.textnav}/>
              <LightTooltip title={t('NAV_CHANGE_LANG')} arrow>
                <Button
                  color="inherit"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  className={classes.textnav}
                >
                  <Translate/>&nbsp;{t('NAV_LANGUAGE')}<MoreVert/>
                </Button>
              </LightTooltip>
            </Tabs>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)}>
        <MenuItem onClick={changeLanguageEn}>
          {t('lang_en')}
        </MenuItem>
        <MenuItem onClick={changeLanguageTh}>
          {t('lang_th')}
        </MenuItem>
      </Menu>
      <TabPanel value={value} index={0}>
        <Banner />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Skills/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Portfolio/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Contact/>
      </TabPanel>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  )
}

export default Navbar
