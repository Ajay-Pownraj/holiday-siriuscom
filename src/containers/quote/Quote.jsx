import React from 'react'
import './Quote.css'
import { quote } from '../../holiday'
import Button from '../../components/customButton/Button'
import useForm from '../../components/customHooks/useForm'
import validate from '../../components/customHooks/validate'
const Success = () => <div className="success-msg">We hear you! we will get back to you for planning vacation</div>;

const Quote = () => {
    // console.log("Quote-->", quote)
    const { inputs, handleInputChange, handleSubmit, errors, success } = useForm({ name: '', email: '', tel: '' }, validate);
    return (
        <div className="quote">
            <div className="quote-title">{quote.title}</div>
            <form className="quote-input-content" onSubmit={handleSubmit}>
                <div>
                    <label className="quote-label">Your Name</label>
                    <input className="quote-input" type="text" name="name" onChange={handleInputChange} value={inputs.name} required="" />
                    <div className="error">{errors.name}</div>
                </div>
                <div>
                    <label className="quote-label">Contact No.</label>
                    <input className="quote-input" type="text" name="tel" onChange={handleInputChange} value={inputs.tel} required="" />
                    <div className="error">{errors.tel}</div>
                </div>
                <div>
                    <label className="quote-label">Email Address</label>
                    <input className="quote-input" type="email" name="email" onChange={handleInputChange} value={inputs.email} required="" />
                    <div className="error">{errors.email}</div>
                </div>
                {/* {success && <span className="success" >{success}</span>} */}
                {success !== true ? <Success /> : ''}
                <Button name="SUBMIT" type="submit"></Button>
            </form>
        </div>
    )
}

export default Quote
