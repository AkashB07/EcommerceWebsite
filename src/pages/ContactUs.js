import React, { Fragment, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactUsPage = () => {
    const history = useHistory();

    const addRequest = useCallback(async (contact) => {
        const response = await fetch("https://ecommerce-website-1c577-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json", {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {
                'content-Type': 'application/json'
            }
        })
        await response.json();
    }, [])

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const emailId = emailRef.current.value;
        const phoneno = phoneRef.current.value;

        const contact = {
            name: name,
            emailId: emailId,
            phoneno: phoneno,
        };

        addRequest(contact);
        alert('We will contact you shortly');
        history.push('/');
    };

    return (

        <Fragment><br/><br/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Name" ref={nameRef} />
                </Form.Group><br/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" ref={emailRef} />
                </Form.Group><br/>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone No</Form.Label>
                    <Form.Control name="phone" type="tel" placeholder="Phone No" ref={phoneRef} />
                </Form.Group><br/>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form><br/><br/><br/><br/><br/>
        </Fragment>


    );
}

export default ContactUsPage;