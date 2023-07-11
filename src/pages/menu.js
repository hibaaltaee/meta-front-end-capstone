import salad from '../assets/greek-salad.jpg'
import bruschetta from '../assets/bruschetta.jpg'
import desert from '../assets/lemon-dessert.jpg'


function menu(){
    return(
        <div className="hero1">
         <div className="sp">
            <h1>Our menu</h1>
         </div>
          <div className="cards">

          <div className='card1'>
                <img src={salad}></img>
                <h4>Greek salad</h4>
                <p>8.99 $</p>
                <p>The famous greek salad of crispy <br></br>
                    lettuce, peppers, olives and <br></br>
                    our Chicago style feta cheese,<br></br>
                   garnished with crunchy garlic. <br></br>
                   </p>
                <button>Order for delivery</button>
            </div>
            <div className='card1'>
                <img src={bruschetta}></img>
                <h4>Bruschetta</h4>
                <p>10.99 $</p>
                <p>Our Bruschetta is made from grilled <br></br>
                bread that has been smeared with <br></br>garlic 
                and seasoned with salt and <br></br>olive oil.</p>
                <button>Order for delivery</button>
            </div>
            <div className='card1'>
                <img src={desert}></img>
                <h4>Lemon dessert</h4>
                <p>12.99 $</p>
                <p>This comes straight from grandma's <br></br>recipe
                book, every last ingredient  <br></br> has been 
                sourced and is as <br></br> authentic as can be imagined.</p>
                <button>Order for delivery</button>
               
            </div>

          </div>


          <div className="cards">

          <div className='card1'>
                <img src={salad}></img>
                <h4>Greek salad</h4>
                <p>8.99 $</p>
                <p>The famous greek salad of crispy <br></br>
                    lettuce, peppers, olives and <br></br>
                    our Chicago style feta cheese,<br></br>
                   garnished with crunchy garlic. <br></br>
                   </p>
                <button>Order for delivery</button>
            </div>
            <div className='card1'>
                <img src={bruschetta}></img>
                <h4>Bruschetta</h4>
                <p>10.99 $</p>
                <p>Our Bruschetta is made from grilled <br></br>
                bread that has been smeared with <br></br>garlic 
                and seasoned with salt and <br></br>olive oil.</p>
                <button>Order for delivery</button>
            </div>
            <div className='card1'>
                <img src={desert}></img>
                <h4>Lemone desert</h4>
                <p>12.99 $</p>
                <p>This comes straight from grandma's <br></br>recipe
                book, every last ingredient  <br></br> has been 
                sourced and is as <br></br> authentic as can be imagined.</p>
                <button>Order for delivery</button>
               
            </div>


          </div>
                  


        </div>
    )
}
export default menu;