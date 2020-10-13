import React from "react"
import Countries from "./abc"
const initialState = {
            firstName: "",
            lastName: "",
            age: "",
            textArea: "",
            phoneNumber: "",
            email: "",
            gender: "",
            region:"",
            country: "",
            countries:Countries
}
class Form extends React.Component{
    state = initialState
    handleChange = (event) =>{
        const {name,value} = event.target
        this.setState({
            [name] : value
        })
    }
    handleBlur = (event) =>{
        console.log(event.target.name + " : " + event.target.value)
    }

    render(){
        let x = this.state.region
        let y = this.state.countries[x]
        let z = this.state.country
        let alpha1 = "" 
        let alpha2 = ""
        let currency_name = ""
        let currency_symbol = ""
        let timeZone = ""
        let optionTemplate = x !=="" ? y.map(v => {
            if(v.name ===  z){
                currency_symbol = v.currencies[0].symbol
                console.log(v.languages[0].iso639_1)
                currency_name = v.currencies[0].name
                timeZone = v.timezones
                alpha1 = v.languages[0].iso639_1
                alpha2 = v.languages[0].iso639_2
            }
            return(<option key={y + y.indexOf(v)} value={v.name}>{v.name}</option>)
        }): null

        return(
            <div className ="form-wrapper">
                <div style ={{textAlign:"center",background:"#fff",padding:"8px"}}>
                    <h1>Book your Tourist Destination</h1>
                </div>

{/* Name of the customer */}
                
                <form className ="forms">
                <span className = "field-name">Name<span className = "req"> * </span></span> 
                    <div className ="field-space">
                        <label>
                            <input 
                                type = "text"
                                className ="field"
                                value = {this.state.firstName}
                                name = "firstName"
                                placeholder = "First name"
                                onChange = {this.handleChange}
                                onBlur = {this.handleBlur}
                                required
                            />
                        </label>
                        <label> 
                            <input 
                                type = "text"
                                className ="field"
                                value = {this.state.lastName}
                                name = "lastName"
                                placeholder = "Last name"
                                onChange = {this.handleChange}
                                onBlur = {this.handleBlur}
                                required
                            />
                        </label>
                    </div>

{/* Age block */}
                
                <label>
                    <span className = "field-name">Age<span className = "req"> * </span></span> 
                    <div className = "field-space">
                        
                            <input
                                className ="field"
                                type = "text"
                                value = {this.state.age}
                                name = "age"
                                placeholder = "Age (in years)"
                                onChange = {this.handleChange}
                                onBlur = {this.handleBlur}
                                required
                            />
                        
                    </div>
                </label>

{/* Gender block with radio buttons */}

                    <span className = "field-name">Gender<span className = "req"> * </span></span> 
                    <div className = "field-space radio-btn">
                        <label>
                            <input 
                                type="radio" 
                                name="gender"
                                value="male"
                                checked={this.state.gender === "male"}
                                onChange = {this.handleChange}
                                onBlur = {this.handleBlur}
                            /> Male
                        </label>
                        <br />
                        <label>
                            <input 
                                type="radio" 
                                name="gender"
                                value="female"
                                checked={this.state.gender === "female"}
                                onChange = {this.handleChange}
                                onBlur = {this.handleBlur}
                            /> Female
                        </label>
                        <br />
                        <label>
                            <input
                                type ="radio"
                                name = "gender"
                                value = "others"
                                checked = {this.state.gender === "others"}
                                onChange = {this.handleChange}
                                onBlur = {this.handleBlur}
                            /> Others
                        </label>
                    </div>

{/* Phone Number block */}

                    <span className = "field-name">Phone Number<span className = "req"> * </span></span> 
                    <div className ="field-space">
                        <input className ="field" disabled type = "text" id ="area-code"  value = "+91"/>
                        <label>
                            <input 
                                className ="field"
                                type = "number"
                                value = {this.state.phoneNumber}
                                name = "phoneNumber"
                                placeholder = "Phone Number"
                                required
                                onChange = {this.handleChange}
                                onBlur = {this.handleBlur}
                            />
                        </label>
                    </div>

{/* E-mail block */}

                    <span className = "field-name">E-Mail<span className = "req"> * </span></span> 
                    <div className ="field-space">
                        <label>
                            <input 
                                className ="field big"
                                type ="email"
                                value = {this.state.email}
                                name = "email"
                                placeholder = "abc@example.com"
                                required
                                onChange = {this.handleChange}
                                onBlur = {this.handleBlur}
                            />
                        </label>
                    </div>

{/* Destination Region wise selection */}

                    <span className = "field-name">Choose Region<span className = "req"> * </span></span> 
                    <div className = "field-space">
                        <select 
                            value={this.state.region} 
                            name="region" 
                            onChange={this.handleChange}
                            onBlur = {this.handleBlur}
                            className ="field destination"
                        > 
                            <option value="">--Select Region--</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="americas">Americas</option>
                            <option value="africa">Africa</option>
                            <option value="oceania">Oceania</option>
                        </select>
                    </div>

{/*Country dependent on region wise selection */}

                   <div style = {this.state.region === "" ? {display :"none"} : {display : "block"}}>
                    <span className = "field-name">Choose Country<span className = "req"> * </span></span> 
                        <div className = "field-space">
                        <label>
                            <select 
                                value={this.state.country} 
                                onChange={this.handleChange}
                                name="country" 
                                onBlur = {this.handleBlur}
                                className ="field destination"
                            >
                            {optionTemplate}
                            </select>
                        </label>
                        </div>    
                   </div>
{/* ISO codes, Currency, TimeZones */}
                    <div style = {this.state.country ===""?{display:"none"}:{display:"block"}}>
                    <span className = "field-name">ISO CODES<span className = "req"> * </span></span>
                    <br/>
                    <div className = "secret-elements">
                        Alpha_1 : <span className="field green">{alpha1}</span><br/>
                    </div>
                    <div className = "secret-elements">
                        Alpha_2 : <span className="field green">{alpha2}</span>
                    </div>
                    <span className = "field-name">Currency<span className = "req"> * </span></span>
                    <br/>
                    <div className = "secret-elements">
                        Currency : <span className="field green">{currency_name}</span> 
                    </div>
                    {currency_symbol ? (<div className = "secret-elements">Currency-Symbol:<span className="field green">({currency_symbol})</span></div>) :null}
                    <span className = "field-name">TimeZones<span className = "req"> * </span></span>
                    <br/>
                    <div  className = "secret-elements">
                            TimeZone : <span className="field green">{timeZone}</span>
                    </div>
                    </div>
{/* Review block */}

                    <span className = "field-name">Reviews</span> 
                    <div className ="field-space">
                        <label>
                            <textarea 
                                className ="field big"
                                type = "text"
                                value = {this.state.textArea}
                                name = "textArea"
                                placeholder = "Write your reviews here ..."
                                rows = "5" 
                                style = {{resize:"vertical"}}
                                onChange = {this.handleChange}
                                onBlur = {this.handleBlur}
                            />
                        </label>
                    </div>

                    <button onSubmit ={()=>console.log(this.state)} className ="submit-btn" title = "Submit the form">Submit</button>
                </form>
            </div>
        )
    }
  }
export default Form