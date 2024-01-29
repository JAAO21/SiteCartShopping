import { useEffect, useState } from 'react';
import Api from '../../services/fakeStore.api'
const FilterCategories = ({ setData }) => {
    const [dataCategory, setDataCategory] = useState([]);
    useEffect(() => {
        Api('categories').then(data => setDataCategory(data))
    }, [setDataCategory])

    const handleCategory = (e) => {
        Api(`category/${e.target.textContent}`).then(d => setData(d))
    }


    return <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>{dataCategory?.map((data, index) => (
        <div style={{ border: '1px solid black', margin: '5px' }} onClick={handleCategory} key={index}><p>{data}</p></div>
    ))}</div>
}



export default FilterCategories;
