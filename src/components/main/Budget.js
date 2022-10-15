import './Budget.css';
import Balance from './Balance';
import Transaction from './Transaction';
import Footer from './Footer';

const Budget = () => {

  return (
      <div className="App">
          <h2 style={{color : 'white' }}>Expenditure Tracker</h2>
          <h3 style={{color : 'white' }}>By Nishant Sharma (2010991958)</h3>
    <div className="full">
        <Balance />
        <hr className='hr' />
        <Transaction />
        <Footer />
    </div>
    </div>
  )
}

export default Budget;