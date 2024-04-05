
import { useState } from 'react'
import {InputBox } from './components'
import usecurrencyinfo from './hooks/usecurrencyinfo'
// import './App.css'

function App() {
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [To, setTo] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState()

  const CurrencyInfo = usecurrencyinfo(from)

  const options = Object.keys(CurrencyInfo)

  const swap = () => {
  setFrom(To)
  setTo(from)
  setAmount(convertedAmount)
  setConvertedAmount(amount) //to avoid infinite loop
  }

  const convert = () => {
    setConvertedAmount(amount * CurrencyInfo[To])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                       }
                       
                    }
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOption={options}
                            selectCurrency={from}
                            onCurrencyChange={(currency) => {
                              setFrom(currency)
                            }}
                            onAmountChange={(amount) => {
                              setAmount(amount)
                            }}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOption={options}
                            selectCurrency={To}
                            amountDisable
                            onCurrencyChange={(currency) => {
                              setTo(currency)
                            }
                          }

                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {To.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
