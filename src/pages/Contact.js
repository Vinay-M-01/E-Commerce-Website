import { Route } from "react-router-dom";
import './Contact.css'

const Contact = (props) => {
    async function formSubmitHandler(event) {
        event.preventDefault();
        const user = {
            Name: event.target[0].value,
            Email: event.target[1].value,
            Phone: event.target[2].value,
        };

        const response = await fetch('https://movies-app-d5ee6-default-rtdb.firebaseio.com/users.json',{
          method:'POST',
          body:JSON.stringify(user)
    
        })
        console.log(response)
    };

  return (
    <Route path="/Contact">
      <form onSubmit={formSubmitHandler} className="mainForm">
        <div className="inputName">
          <label htmlFor="name"> Name: </label>
          <input type="text" className="name" />
        </div>

        <div className="inputEmail">
          <label htmlFor="email"> Email ID: </label>
          <input type="text" className="email" />
        </div>

        <div className="inputPhone">
          <label htmlFor="phoneNumber"> Phone Number: </label>  
          <input type="number" className="phoneNumber" />
        </div>

        <button type='submit' className="submit"> Submit</button>
      </form>
    </Route>
  );
};

export default Contact;
