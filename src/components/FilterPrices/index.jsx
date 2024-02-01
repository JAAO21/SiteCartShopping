import { useState, useEffect } from "react"

import Api from '../../services/fakeStore.api'
const FilterPrices = ({ setData }) => {
    const [dataPrice, setDataPrice] = useState([{}]);

    useEffect(() => {
        Api().then(data => setDataPrice(data));
    }, [setDataPrice]);

    const handlePrices = (e) => {
        console.log(e.target.value)
        const isChecked = e.target.checked;
        console.log(isChecked)
        const newArray = dataPrice.filter((data) => data.price == e.target.value);
        console.log(newArray, 'aarr')
        /*   setData(e.target.value != undefined ? e.target.value : 109.95) */
    }

    console.log(dataPrice)
    return <div style={{ display: 'grid', flexDirection: 'row', justifyContent: 'center' }}>{dataPrice?.map((data, index) => (
        <form style={{ border: '1px solid black', margin: '5px' }} key={index}>
            <input
                type="checkbox"
                id={data.price}
                name={data.price}
                value={data.price}
                onChange={handlePrices} />
            checked={dataPrice.includes(data.price)}
            <label htmlFor={data.price}>{data.price}</label>
        </form>
    ))}</div>
}

export default FilterPrices;

