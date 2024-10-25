
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router/routes'
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
function App() {
  

  return (
    <Provider store={store}>
      <PersistGate loading={<div>Chargement...</div>} persistor={persistor}>

      
<RouterProvider router={routes}/>
</PersistGate>


  </Provider>
  )
  
  

}

export default App
