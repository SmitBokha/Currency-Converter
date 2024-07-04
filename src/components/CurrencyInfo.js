import { useEffect, useState } from "react"

const CurrencyInfo = () => {

    const apiURL = 'https://api.exchangerate-api.com/v4/latest/inr'
    const [data, setdata] = useState({})
    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(apiURL);
            const data = await response.json();
            setdata(data);
        };
        fetchData();
    }, [])
    return data
}

export default CurrencyInfo;