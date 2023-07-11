import "./form.css";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo.png'

function reservation(){
 

    return(
        <div className="container">
            <div className="container1">
            <img src={logo}></img>
            <div className="forms">
                <div className="form">
                <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your full name" />
       
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control type="email" 
                        placeholder="name@gmail.com" />
          <Form.Label>Enter your phone  number:</Form.Label>
          <Form.Control type="number" 
                        placeholder="123456" />
                </Form.Group>
                </div>

                <div className="form">
                    <Form.Group>
                    <Form.Label>Occasion (optional):</Form.Label>
           <Form.Select aria-label="Default select example">
               <option>select Occasion</option>
               <option value="1">birthday</option>
               <option value="2">anniversary</option>
               <option value="3">graduation</option>
           </Form.Select>

           <Form.Label>Enter your phone  number:</Form.Label>
          <Form.Control type="number" 
                        placeholder="2"  min="1"  max="20" />
                 
           <Form.Label>Date & time</Form.Label>
          <Form.Control type="date" 
                        placeholder="mm/dd/yyy" />
              

               
                    </Form.Group>
                    
                </div>
                  
            </div>
            <button className="formbutton">Reserv</button>

            </div>
           
        
        </div>
       
    )


}
export default reservation;