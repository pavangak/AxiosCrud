import Home from './Axios Crud/Home'
import Read from './Axios Crud/Read'
import Creat from './Axios Crud/Creat'
import Update from './Axios Crud/Update'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/creat' element={<Creat/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/read/:id' element={<Read/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
