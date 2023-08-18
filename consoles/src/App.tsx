import Playstation4Image from './assets/playstation 4.jpeg'
import XboxOneImage from './assets/xbox one s.jpg'
import NintendoSwitchImage from './assets/nintendo switch.jpg'
import ProductCard from './Components/ProductCard/ProductCard'
import './App.css'

const App = () => {
  return (
    <>
      <div className='products-display'>
      <ProductCard
        image={Playstation4Image}
        description="R$ 2.849"
        whereToGo="Comprar"
        cardTitle="Playstation 4"
      />
      <ProductCard
        image={XboxOneImage}
        description="R$ 1.998"
        whereToGo="Comprar"
        cardTitle="Xbox One S"
      />
      <ProductCard
        image={NintendoSwitchImage}
        description="R$ 2.207"
        whereToGo="Comprar"
        cardTitle="Nintendo Switch"
      />
    </div>
    </>
  )
}

export default App
