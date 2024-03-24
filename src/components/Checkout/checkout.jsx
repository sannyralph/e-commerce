import { Button, Container, Grid } from "@mui/material";
import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useContext } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import SettingsContext from "../../context/settings";

const stripe = loadStripe("pk_test_51OqZUZKSvhzzXh1bKTwulDkTHxj1d8Hh5OJrApEqX1j1deJbxPyBVp20P8RmbohH49Az05o9GeoTeSNcTzxOIusw00EZiP97YL")

    const loader = "auto"

const Checkout = () => {
    const {id} = useParams()
    let clientSecret = id
        if(id) {
            return  (
                <Elements stripe={stripe} options={{clientSecret, loader}}>
                    <CheckoutForm />
                </Elements>
            )
        }
}

function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const navegate = useNavigate();

    const {product} = useContext(SettingsContext)
    const handleSubmit = async(e) => {
        e.preventDefault() 
    
        const {error} = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:3000/paymant/success"
            }
        })
        if(error) {
            navegate("/cart")
        }
    }

    return(
        <Container>
            <Grid>
                <div>
                    <Form>
                        <h3>Select payment method</h3>
                        <PaymentElement />
                        <Button onClick={() => navegate('/cart')}>Back</Button>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </Form>
                </div>
            </Grid>
        </Container>
    )
}

export default Checkout