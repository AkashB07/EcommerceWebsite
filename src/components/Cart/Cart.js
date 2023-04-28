import React, { useContext } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTypography,
    MDBCardImage,
    MDBIcon,
} from "mdb-react-ui-kit";
import CartContext from "../../store/cart-context";

const Cart = (props) => {

    const cartcntx = useContext(CartContext);
    const map = new Map();
    cartcntx.items.forEach((item) => {
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

    const cartItemRemove = (id) => {
        cartcntx.removeItem(id);
    }

    const cartItemDecrementHandler = (item) => {
        cartcntx.addItem({ ...item, quantity: -1 });

    };

    const cartItemIncrementHandler = (item) => {
        cartcntx.addItem({ ...item, quantity: 1 });
    };

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
                <MDBBtn color="link" className="px-2" onClick={() => cartItemIncrementHandler(item)}>
                        <MDBIcon fas icon="plus" />
                    </MDBBtn>
                    <MDBBtn type="number"  >{item.quantity} </MDBBtn>
                    {item.quantity > 1 && <MDBBtn color="link" className="px-2" onClick={() => cartItemDecrementHandler(item)}>
                        <MDBIcon fas icon="minus" />
                    </MDBBtn>}

                    
                </MDBCol>
                <MDBCol md="3" lg="2" xl="2" className="text-end">
                    <MDBTypography tag="h6" className="mb-0">
                        ₹{item.price}
                    </MDBTypography>
                </MDBCol>
                <MDBCol md="1" lg="1" xl="1" className="text-end" >
                    <MDBBtn color="link" className="px-2" onClick={() => cartItemRemove(item.id)} >
                        <MDBIcon fas icon="times" />
                    </MDBBtn>
                </MDBCol>
            </MDBRow>

        ))

    );

    let total = 0;
    cartcntx.items.forEach((item) => {
        total += Number(item.price * item.quantity);
    })


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