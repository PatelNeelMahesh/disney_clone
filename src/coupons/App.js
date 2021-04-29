import React, { useEffect, useState } from 'react';
import Coupons from './Coupons';
import styled from 'styled-components';

const App = () => {

    const [search, setSearch] = useState('');

    const [query, setQuery] = useState('flip');

    const [coupons , setCoupons] = useState([]);

    const getCoupons = async () => {
        const response = await fetch(`http://localhost:555/api/s/${query}`);

        const data = await response.json();
        setCoupons(data);

        // if(data.length<1){
        //     console.log(data)
        //     return(
        //     <h5 style={{ textTransform: 'none' }}>
        //     Sorry, no products matched your search...
        //     </h5>
        //     )
        // }

        // console.log(data.length);
    }
    
    // console.log({coupons})

    const updateSearch = e => {
        setSearch(e.target.value)
        // console.log(e.target.value)
        // console.log(search)
    };
    
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        //it will make it to empty string again
        setSearch('');
    }

    useEffect(() => {
        getCoupons();
    }, [query])

    return (
        <div>
            <Wrapper>
            <form className="search-form" onSubmit={getSearch}>
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit">
                Search
                </button>
            </form>
            </Wrapper>
        <div>

            {coupons.map(data => ( 
            <Coupons
                key = {data.id}
                title = {data.title}
                from = {data.from}
                offer = {data.offer}
                line1 = {data.line1}
                line2 = {data.line2}
                line3 = {data.line3}
                storurl = {data.storurl}
                couponcode = {data.couponcode}
                imgurl = {data.imgurl}
            />
            ))}
        </div>
        </div>
    )
}

const Wrapper = styled.section`
* {
    margin: 0;
    padding: 0;
  }

.search-form {
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  
  .search-bar {
    width: 50%;
    border: none;
    padding: 10px;
    background-color: #f1f1f1;
  }
  
  .search-button {
    background: #090b13;
    // background: #ccc;
    border: none;
    padding: 10px 20px;
    color: white;
  }`

export default App
