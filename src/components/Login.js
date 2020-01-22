import React, { Component } from 'react';
import '../login.css';
export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            fields: {},
            errors: {}
        }
    };
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
      }
      submituserloginForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["mobileno"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
  
      }
  
      validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if (!fields["mobileno"]) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter your mobile no.";
        }
        if (typeof fields["mobileno"] !== "undefined") {
          if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter valid mobile no.";
          }
        }
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }
        this.setState({
          errors: errors
        });
        return formIsValid;
      }
  
    render() {
        return (
          <div id="main-login-container">
            <div id="register">
              <h3 className="header">Login Page</h3>
              <form method="post" name="userloginForm" onSubmit={this.submituserloginForm}>
                <label>Mobile No:</label>
                <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.mobileno}</div>
                <label>Password:</label>
                <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                <div className="errorMsg">{this.state.errors.password}</div>
                <input type="submit" className="button" value="Login" />
              </form>
            </div>
          </div>
        );
    }
}
