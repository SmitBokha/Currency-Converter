import React from 'react'
import CurrencyInfo from './components/CurrencyInfo'

function Input({ lebal, isreadOnly, textId, selectId = [], }) {
    let currencyOptions = CurrencyInfo('usd')
    return (
        <div className="w-full mb-1">
            <div className=' bg-white p-6 flex justify-between rounded-lg'>
                <div className=' flex justify-center flex-col'>
                    <label htmlFor="amount" className='text-slate-600'>{lebal}</label>
                    <div><input type="number"
                        id={textId}
                        className=' h-9 rounded-lg border-0 ps-2'
                        min={0}
                        placeholder='00'
                        readOnly={isreadOnly}
                    /></div>
                </div>
                <div className='flex items-end flex-col'>
                    <label htmlFor="selectId" className=' text-slate-600'>Currency Type</label>
                    <div>
                        <select id={selectId} name="selectId">
                            {
                                currencyOptions && currencyOptions.rates && Object.entries(currencyOptions.rates).map(([currency]) => (
                                    <Opction key={currency} currency={currency}  />
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Opction = (props) => {
    const { currency } = props
    return <option id={currency}>{currency}</option>
}

export default Input
