import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import RouterApp from './routerapp'
import * as serviceWorker from './serviceWorker'
import './i18n'
import './index.css'
import Font from './font/Prompt-Regular.ttf'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const Loader = () => <div> loading... </div>

const MyFont = {
  fontFamily: 'Prompt-Regular',
  src: `
    local('Prompt-Regular'),
    url(${Font}) 
  `
}

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Prompt-Regular',
    fontSize: 20
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [MyFont]
      }
    }
  }
})

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <ThemeProvider theme={theme}>
      <RouterApp />
    </ThemeProvider>
  </Suspense>,
  document.getElementById('root'))

serviceWorker.unregister()
