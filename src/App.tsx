
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router/routes'
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from './components/theme-provider';

function App() {
  

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Provider store={store}>


      
<RouterProvider router={routes}/>



  </Provider>
  </ThemeProvider>
  )
  
  

}

export default App
