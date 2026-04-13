
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { RegistrationPage } from './pages/RegistrationPage'
import { LoginPage } from './pages/LoginPage'
import { ToDo } from './pages/Todo'
import { PrivateRouter } from './components/PrivateRouter'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/registration' element={<RegistrationPage/> } />
        <Route path='/login' element={<LoginPage/> } />
        <Route path='/' element={<LoginPage />} />
        <Route element={<PrivateRouter/>}> 
          <Route path='/home' element={<ToDo/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
