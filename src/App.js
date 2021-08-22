import './App.css';
import { Card, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import DisplayScreen from './DisplayScreen'

function App() {
  const [amount, setAmount] = useState("0")
  const [amountType, setAmountType] = useState('0')
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
          <Button onClick={()=> setAmountType('USD')} variant="primary">Dollar</Button>{' '}
          <Button onClick={()=> setAmountType('GBP')} variant="primary">Pounds</Button>
        </div>
        <Card className="px-4 py-1 mx-4">
          <DisplayScreen amount={amount} amountType={amountType} setAmountType={setAmountType}/>
        </Card>
      </div>
      </div>
    </div>
  );
}

export default App;
