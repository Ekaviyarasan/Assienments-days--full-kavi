


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Navebar from './Nave/Navebar'
import Content from './component/Content'
import Array from './component/Array'
import Object from './component/Object'
import Taggle from './component/Taggle'
import Form from './component/Form'
import Input from './component/Input'
import Prev from './component/Prev'
// import Use from './component/Use'

function App() {
  return (

    <>
      <BrowserRouter>
        <Navebar />
        <Array />
        <Object />
        <Taggle />
        <Input />
        <Prev/>
        {/* <Use/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/content" element={<Content />} />
          <Route path="/form" element={<Form />} />



        </Routes>
      </BrowserRouter>




    </>


  )
}

export default App


