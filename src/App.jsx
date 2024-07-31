import Input from './Input'
import CurrencyInfo from './components/CurrencyInfo'
function App() {

    let val1
    const Currency = 'usd'
    let currencyInfo = CurrencyInfo(Currency).rates

    const Convert = () => {
        let curtyp1 = document.getElementById('select1').value
        let input = document.getElementById('value1').value
        let curtyp2 = document.getElementById('select2').value
        const customArray = Object.entries(currencyInfo).map(([key, value]) => {
            return { key, value };
        });
        customArray.forEach(e => {
            if (e.key == curtyp1) {
                val1 = e.value
            }
        })
        customArray.forEach(e => {
            if (e.key == curtyp2 && val1 !== undefined) {
                let ans = input * e.value / val1
                document.getElementById('value2').value = ans
            }
        })
    }

    const valueSwep = () => {
        let curtyp1 = document.getElementById('select1').value
        let curtyp2 = document.getElementById('select2').value
        let value1 = document.getElementById('value1').value
        let value2 = document.getElementById('value2').value
        document.getElementById('select1').value = curtyp2
        document.getElementById('select2').value = curtyp1
        document.getElementById('value1').value = value2
        document.getElementById('value2').value = value1
    }

    return (
        <>
            <div
                className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                }}
            >
                <div className="w-full">
                    <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                        <h1 className=' flex justify-center items-center text-2xl mb-3 font-boldc'>Currency Converter</h1>
                        <form
                        >
                            <Input
                                lebal='From'
                                isreadOnly={false}
                                textId='value1'
                                selectId='select1'
                            />
                            <div className="relative w-full h-0.5">
                                <button
                                    type="button"
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-4 py-2 p-3"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        valueSwep()
                                    }}
                                >
                                    swap
                                </button>
                            </div>

                            <Input
                                lebal='To'
                                isreadOnly={true}
                                textId='value2'
                                selectId='select2'
                            />
                            <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                                onClick={(e) => {
                                    e.preventDefault()
                                    Convert()
                                }
                                }
                            >
                                Convert
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
