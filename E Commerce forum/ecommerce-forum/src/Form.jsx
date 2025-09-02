import React ,{ useState } from "react";
function Form(){
    const [email,setEmail]=useState("");
    const [quantity,setQuantity]=useState(0);
    const [comment,setComment]=useState("");
    const [payment,setPayment]=useState(" ");
    const [shipping,setShipping]=useState("");
    const handleEmailChange=(ev)=>{
         return setEmail(ev.target.value);
    };
    const handleQuantityChange=(ev)=>{
        return setQuantity(ev.target.value);
    };
    const handleCommentChange=(ev)=>{
        return setComment(ev.target.value);
    };
    const handlePaymentChange=(ev)=>{
        return setPayment(ev.target.value);
    };
    const handleShippingChange=(ev)=>{
        return setShipping(ev.target.value)
    }


    return(
        <div>

            <input type="email" value={email} onChange={handleEmailChange} placeholder="example@domain.com"/>
            <p>Email:{email}</p>

            <input value={quantity} type="number" onChange={handleQuantityChange}/>
            <p>Quantity:{quantity}</p>


        <textarea value={comment} onChange={handleCommentChange} placeholder="leave a comment "></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option >Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">MasterCard</option>
            <option value="Paypal">Paypal</option>
            <option value="giftcard">Giftcard</option>
        </select>
        <p>Payment:{payment}</p>


        <label >
            <input type="radio" value="pick up" checked={shipping==="pick up"} onChange={handleShippingChange} />Pickup
        </label>
        <br />

        <label >
            <input type="radio" value="delivered" checked={shipping==="delivered"} onChange={handleShippingChange} />Delivery
        </label>
        <p>Shipping:{shipping}</p>



        </div>
    );

}
export default Form;