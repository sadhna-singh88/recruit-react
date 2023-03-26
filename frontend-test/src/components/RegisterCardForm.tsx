import React from 'react'


//Define interface for all form values 
interface FormValues {
  creditCard:number;
  cvv:number;
  expiryDate:string;
}




const RegisterCardForm: React.FC= () => {
  
  return (
    
      <form>
        <div>
          <label htmlFor="creditCard">Credit Card</label>
          <input type="number" id="creditCard" name="creditCard" placeholder="Credit Card Number" />
        </div>
        <div>
        <label htmlFor="cvv">CVV</label>
        <input type="number" id="cvv" name="cvv" placeholder="CVV" />
        </div>
        <div>
        <label htmlFor="expiryDate">Expiry Date</label>
        <input type="text" id="expiryDate" name="expiryDate" placeholder="Expiry Date" />
        </div>
        <button type="submit">Submit</button>
      </form>
    
  )

 
  
}

export default RegisterCardForm