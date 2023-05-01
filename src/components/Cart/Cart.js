import React, { useContext, useEffect, useCallback, useState } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTypography,
    MDBCardImage,
} from "mdb-react-ui-kit";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
    const [carts, setCarts] = useState([]);

    const cartcntx = useContext(CartContext);
    const email = cartcntx.email;

    const fetchCart = useCallback(async () => {
        try {

            const response = await fetch(`https://crudcrud.com/api/5dff005c87694e679d2cfad189a188e5/${email}`);
            const data = await response.json();
            const loadedCart = [];

            for (const key in data) {
                loadedCart.push({
                    id: data[key].props.id,
                    title: data[key].props.title,
                    imageUrl: data[key].props.imageUrl,
                    price: data[key].props.price,
                    quantity: data[key].quantity
                });
            }
            setCarts(loadedCart);
        }
        catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        fetchCart()
    }, [fetchCart]);

    const map = new Map();
    carts.forEach((item) => {
        if (map.has(item.id)) {
            let it = map.get(item.id)
            map.set(item.id, { id: it.id, title: it.title, imageUrl: it.imageUrl, price: it.price, quantity: Number(it.quantity) + Number(item.quantity) });
        }
        else {
            map.set(item.id, item)
        }
    });

    let cart = []
    map.forEach((item, key) => {
        cart.push(item)
    });
   

    const cartItems = (
        cart.map((item) => (
            <MDBRow key={item.id} className="mb-4 d-flex justify-content-between align-items-center">
                <MDBCol md="2" lg="2" xl="2">
                    <MDBCardImage
                        src={item.imageUrl}
                        fluid className="rounded-3" />
                </MDBCol>
                <MDBCol md="3" lg="3" xl="3">
                    <MDBTypography tag="h6" className="text-black mb-0">
                        {item.title}
                    </MDBTypography>
                </MDBCol>

                <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
         
                    <MDBBtn type="number"  >{item.quantity} </MDBBtn>
                    
                </MDBCol>
                <MDBCol md="3" lg="2" xl="2" className="text-end">
                    <MDBTypography tag="h6" className="mb-0">
                        ₹{item.price}
                    </MDBTypography>
                </MDBCol>
                
            </MDBRow>

        ))

    );

    let total = 0;
    carts.forEach((item) => {
        total += Number(item.price * item.quantity);
    })
    let quantity = 0;
    carts.forEach((item) => {
        quantity += Number(item.quantity);
    })
    localStorage.setItem('quantity', quantity)

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol size="12">
                        <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                            <MDBCardBody className="p-0">
                                <MDBRow className="g-0">
                                    <MDBCol lg="8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                                                    Shopping Cart
                                                </MDBTypography>
                                                <MDBTypography tag="h2" className="fw-bold mb-0 text-black">
                                                    Total Amount - ₹{total.toFixed(2)}
                                                </MDBTypography>
                                            </div>

                                            <hr className="my-4" />


                                            {cartItems}
                                            <hr className="my-4" />

                                            <div className="pt-5">
                                                <MDBTypography tag="h6" className="mb-0">
                                                    <MDBBtn color="dark" block size="lg" onClick={props.closeCartItem}>
                                                        Back to shop
                                                    </MDBBtn>
                                                
                                                </MDBTypography>
                                            </div>
                                        </div>
                                    </MDBCol>

                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

export default Cart;