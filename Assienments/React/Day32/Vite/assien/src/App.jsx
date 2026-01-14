 
import './App.css'
import Footer from './componts/Footer'
import Button from './componts/Button'
import Card from './componts/Card'
import Product from './componts/Product'

function App() {


  return (
    <>
      <Footer year={2026}/>
      
      <Card>
<h1 className='Card'>Simple</h1> 
         <p>Website in Browser</p>        
      </Card>
         
         
          <Product name="Mobile" price={25000} />
          <Product name="Car" price={1550000} />
          <Product name="Bike" price={525000} />
          <Product name="IPL TEAM" price={72500034} />












          <Button text="Surprice"/>


      
       
        
    </>
  )
}

export default App
