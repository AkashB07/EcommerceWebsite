import React from "react";
import AvailableCart from "./AvailabaleCart";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

const Cart = (props) => {
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
                                                <MDBTypography className="mb-0 text-muted">
                                                    3 items
                                                </MDBTypography>
                                            </div>

                                            <hr className="my-4" />


                                            <AvailableCart />

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