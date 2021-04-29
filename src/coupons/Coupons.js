import React from 'react';
import styled from 'styled-components'

const Coupons = ({title,from,imgurl,offer,line1,line2,line3,storurl,couponcode}) => {
    return (
    <Wrapper>
       
        <div className="coupon">
            <div>
            <img src={imgurl}/>
            <div className="img_container">
                <h2>{title}</h2>
            </div>
            </div>

            <div className="container">
                {/* <h2><b>20% OFF YOUR PURCHASE</b></h2>
                <p>Lorem ipsum..</p> */}
                <h3>{offer}</h3>
                <ul>
                    <li>{line1}</li>
                    <li>{line2}</li>
                    <li>{line3}</li>
                </ul>
            </div>

            <div className="container">
                <a href={storurl} target="_blank">
                    <button>visit {from}</button>
                </a>
                <h3>Use Promo Code: <span className="promo">{couponcode}</span></h3>
                <p className="expire">Expires: Feb 31, 2022</p>
            </div>
        </div>
    </Wrapper>
    )
}

const Wrapper = styled.div`
img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
}
button{
    // background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    // border: 1px solid #f9f9f9;
    border-radius: 4px;
    // transition: all 0.2s ease 0s;
    // color:#12141D;

  &:hover {
    background-color: #12141D;
    color: white;
    border-color: white;
  }
}
// div{
//     // display: flex;
//     justify-content: space-evenly;
//     // flex-direction : column;
// }
.coupon {
    text-align:center;
    // border: 5px solid #bbb; /* Dotted border */
    width: 80%;
    border-radius: 15px; /* Rounded border */
    margin: 0 auto; /* Center the coupon */
    max-width: 600px;
    margin-bottom:50px;
    color:white;
    background: #090b13;
}
.img_container{
    text-align:center;
}
.container {
    padding: 2px 16px;
    background-color: #090b13;
    h3{
        margin: 15px 0 10px 0;
    }
    ul{
        list-style:none;
        margin: 5px 0 5px 0;
    }
}
  
.promo {
    background: #fff;
    padding: 3px;
    color: #090B13;
}
  
.expire {
    color: red;
}

button{
    background-color:white;
    color:black;
}
`

export default Coupons
