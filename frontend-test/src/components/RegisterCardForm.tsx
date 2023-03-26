import React, {useState} from 'react';


//Define interface for all form values 
interface FormValues {
  creditCard:number;
  cvc:number;
  expiryDate:string;
}

const RegisterCardForm: React.FC= () => {

  //using useState hook to store FormValues

  const [formValues, setFormValues] = useState<FormValues>({
    creditCard:0,
    cvc:0,
    expiryDate:''
  })

  //function to handle form submission
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //validate form input
    if(validateInput()){
    console.log(formValues)
    }
  }

  //function to handle form input changes
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value})
  }

//Creating a input validation funtion for form 
  const validateInput = () => {
    const {creditCard, cvc, expiryDate} = formValues
    let isValid = true;
    // credit card validation
    if (isNaN (creditCard)) {
      isValid = false;
      console.log('Credit card number is not a number')
    }
    // cvv validation
    if (isNaN (cvc)) {
      isValid = false;
      console.log('CVC is not a number')
    }
    // expiry date validation
    if (isNaN (Date.parse(expiryDate))) {
      isValid = false;
      console.log('Expiry date is not a valid date')
    }
    return isValid;
  }
    


  return (
    
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="creditCard">Credit Card</label>
          <input type="number" id="creditCard" name="creditCard" placeholder="Credit Card Number" 
          value={formValues.creditCard } 
          onChange={handleChange} required/>
        </div>
        <div>
        <label htmlFor="cvc">CVC</label>
        <input type="number" id="cvc" name="cvc" placeholder="CVC" value={formValues.cvc} 
        onChange={handleChange} required/>
        </div>
        <div>
        <label htmlFor="expiryDate">Expiry Date</label>
        <input type="date" id="expiryDate" name="expiryDate" placeholder="Expiry Date" value={formValues.expiryDate} 
        onChange={handleChange} required/>
        </div>
        <button type="submit">Submit</button>
      </form>
    
  )

 
  
}

export default RegisterCardForm