import './Enter.css';
import { NavLink } from 'react-router-dom';

  const Enter = ({ amount, setAmount, detail, setDetail, handleBudget}) => {


  return (
    <>
    <form onSubmit={handleBudget}>

      <h2>Amount</h2>

      <input type="number"
      placeholder='Enter Amount'
      className='amount_field'
      onChange = {(e) => setAmount(parseInt(e.target.value))}
      value={amount}
      required
      />

      <h2>Details</h2>

      <input type="text"
      placeholder='Enter Details'
      className='details_field'
      onChange = {(e) => setDetail(e.target.value)}
      value={detail}
      required
      />

      <br />

     <NavLink to = '/'><button className='close'>View</button></NavLink>

      <button type = "submit" value="Save" className='save'>Save</button>
      
    </form>
    
    
    </>
  )
}

export default Enter;