import './App.css';
import { Card, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';

function App() {

  const [amount, setAmount] = useState("0")
  const [convertedAmount, setConvertedAmount] = useState("0")
  
  const currencyCoverter = (currency) => {
    if(currency === 'USD') {
      let conValue = (parseInt(amount) * 0.013).toFixed(2) 
      setConvertedAmount("$"+ conValue)
    } else if(currency === 'GBP') {
      let conValue = (parseInt(amount) * 0.012).toFixed(2)
      setConvertedAmount("€" + conValue)
    }
  }
  return (
    <div className="App">
      <div className="row">
      <div className="col-sm-8 col-md-6 mx-auto p-4">
        <Card className="px-4 py-1 mx-4">
          <h2 className="text-center mb-3">Currency Converter</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Currency in ₹</Form.Label>
              <Form.Control type="text" placeholder="ex. 1" value={amount} onChange={e=> setAmount(e.target.value)} />
              <Form.Text className="text-muted">
                Just select from below options to convert the number in $ or €.
              </Form.Text>
            </Form.Group>
          </Form>
        </Card>
        <div className="m-3">
          <Button onClick={()=> currencyCoverter('USD')} variant="primary">Dollar</Button>{' '}
          <Button onClick={()=> currencyCoverter('GBP')} variant="primary">Pounds</Button>
        </div>
        <Card className="px-4 py-1 mx-4">
          <h2>{convertedAmount}</h2>
        </Card>
      </div>
      </div>
    </div>
  );
}

export default App;
