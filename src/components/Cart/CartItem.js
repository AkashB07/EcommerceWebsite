import {
    MDBBtn,
    MDBCardImage,
    MDBCol,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography
} from "mdb-react-ui-kit";
import React from "react";

const CartItem = (props) => {
    return (
        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
            <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage
                    src={props.imageUrl}
                    fluid className="rounded-3" />
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3">
                <MDBTypography tag="h6" className="text-black mb-0">
                {props.title}
                </MDBTypography>
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                <MDBBtn color="link" className="px-2">
                    <MDBIcon fas icon="minus" />
                </MDBBtn>

                <MDBInput type="number" min="0" defaultValue={1} size="sm" />

                <MDBBtn color="link" className="px-2">
                    <MDBIcon fas icon="plus" />
                </MDBBtn>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="text-end">
                <MDBTypography tag="h6" className="mb-0">
                ₹{props.price}
                </MDBTypography>
            </MDBCol>
            <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-muted">
                    <MDBIcon fas icon="times" />
                </a>
            </MDBCol>
        </MDBRow>

    );
}

export default CartItem;