import React, {useState} from 'react';


//Define interface for all form values 
interface FormValues {
  creditCard:number;
  cvv:number;
  expiryDate:string;
}




const RegisterCardForm: React.FC= () => {

  //using useState hook to store FormValues

  const [formValues, setFormValues] = useState<FormValues>({
    creditCard:0,
    cvv:0,
    expiryDate:''
  })

  //function to handle form submission
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues)
  }

  //function to handle form input changes
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value})
  }
  return (
    
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="creditCard">Credit Card</label>
          <input type="number" id="creditCard" name="creditCard" placeholder="Credit Card Number" 
          value={formValues.creditCard } 
          onChange={handleChange}/>
        </div>
        <div>
        <label htmlFor="cvv">CVV</label>
        <input type="number" id="cvv" name="cvv" placeholder="CVV" value={formValues.cvv} 
        onChange={handleChange}/>
        </div>
        <div>
        <label htmlFor="expiryDate">Expiry Date</label>
        <input type="date" id="expiryDate" name="expiryDate" placeholder="Expiry Date" value={formValues.expiryDate} 
        onChange={handleChange}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    
  )

 
  
}

export default RegisterCardForm