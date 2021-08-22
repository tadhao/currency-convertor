import { useEffect } from 'react';
import useCurrency from './use-currency';

const DisplayScreen = (props) => {
    let convertedAmount = useCurrency(props.amount, props.amountType)
    useEffect(()=>{
        props.setAmountType('')
    })
    return(
        <div>{convertedAmount}</div>
    )
}

export default DisplayScreen