import React,{useState} from 'react'

const Checkout = () => {

  const itemName = "Product 1";
  const itemPrice = 100;
  const [quantity, setQuantity] = useState(1);


  const checkout = async() => {
    try{
      const res = await fetch('http://localhost:8081', {
        method: "POST",
        headers: {
        
          "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify({
          items:[
            {
              id: 1,
              quantity: quantity,
              price: itemPrice,
              name: itemName
          
            }
          ]
        })
        
      })
      const data = await res.json();
      window.location.href = data.url;
      
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img src="https://picsum.photos/200/300" alt="" />
              <div className="card-body">
                <h5 className="card-title">{itemName}</h5>
                <p className="card-text">Price: {itemPrice}</p>
                <p className="card-text">Quantity: {quantity}</p>
                <button className="btn btn-primary" onClick={checkout}>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout
