import { useEffect, useState } from "react"

const useCurrency = (amount, currency) => {

  const [convertedAmount, setConvertedAmount] = useState(amount)
	
	useEffect(() => {
		if(currency === 'USD') {
			let conValue = (parseInt(amount) * 0.013).toFixed(2) 
			setConvertedAmount("$"+ conValue)
		} else if(currency === 'GBP') {
			let conValue = (parseInt(amount) * 0.012).toFixed(2)
			setConvertedAmount("€" + conValue)
		} 
	}, [currency, convertedAmount])

	return convertedAmount
}

export default useCurrency