
import './Payment.css';
import { Link } from 'react-router-dom';

const CheckoutForm = () => {
 

  return (
    <div className="checkout-form">
      <h1>Checkout</h1>
      <form>
      <label for="name">Name:</label>
        <input type="text" id="name" name="name" required/>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>

        <label for="gender">Gender:</label>
        <select id="gender" name="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>

        <Link to="/paymentsucess" type="button" className="payment-btn">
          Payment
        </Link>
      </form>
    </div>
  );
};

export default CheckoutForm;
