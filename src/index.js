import React from 'react';
import ReactDOM from 'react-dom';

import {AppContainer} from 'react-hot-loader';
import App from './App'; 

export default App

if (typeof document !== 'undefined') {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render
  // const render = Comp => {
  //   renderMethod(
  //     <AppContainer>
  //       <Comp />
  //     </AppContainer>,
  //     document.getElementById('root')
  //   )
  // }

  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }  

  // Render!
  render(App)
  
  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./App', () => render(require('./App').default))
  }
}