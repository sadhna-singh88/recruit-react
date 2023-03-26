import React, {useState} from 'react';


//Define interface for all form values 
interface FormValues {
  creditCard:string;
  cvc:string;
  expiryDate:string;
}

interface Props {
  username: string;
}

const RegisterCardForm: React.FC<Props>= ({username}) => {

  //using useState hook to store FormValues

  const [formValues, setFormValues] = useState<FormValues>({
    creditCard:'',
    cvc:'',
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
    if (isNaN (Number(creditCard))) {
      isValid = false;
      console.log('Credit card number is not a number')
    }
    // cvv validation
    if (isNaN (Number(cvc))) {
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
    <div className="register-card-form"> <h2>Welcome {username}</h2> 
      <form   onSubmit={handleSubmit}>
        <div className='form-group'>
        
          <input type="text" id="creditCard" name="creditCard" placeholder="Credit Card Number" 
          value={formValues.creditCard } 
          onChange={handleChange} required />
          
        </div>
        <div className='form-group'>
        
        <input type="text" id="cvc" name="cvc" placeholder="CVC" value={formValues.cvc} 
        onChange={handleChange} required/>
        
       
        <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" value={formValues.expiryDate} 
        onChange={handleChange} required/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )

 
  
}

export default RegisterCardForm