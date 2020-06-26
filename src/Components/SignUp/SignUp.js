import React from 'react';
import PhoneInput, {isValidPhoneNumber} from 'react-phone-input-2'
import './SignUp.css';
import Users from '../Users/Users';
import useSignUpForm from './useSignUpForm';

import 'react-phone-input-2/lib/bootstrap.css';

const SignUp = () => {

  const {
    inputs,
    users,
    handleInputChange,
    handleSubmit,
    handlePhoneInputChange,
    handleGenderChange,
    handleInputAge,
  } = useSignUpForm();

  return (
      <form>
          <div className="Container">
              <h1 className="customH"> Form </h1>
              <p className="customP"> Registration Form </p>
            <div>
            <label className="customLabel">
              Name
              </label>
                  <input
                    className="customInputName"
                    type="text"
                    name="firstName"
                    required
                    placeholder="First"
                    onChange={handleInputChange}
                    value={inputs.firstName}
                  />
                  <input
                    className="customInputName"
                    type="text"
                    name="lastName"
                    required
                    placeholder="Last"
                    onChange={handleInputChange}
                    value={inputs.lastName}
                  />
            </div>
            <div>
            <label className="customLabel">
              Email
            </label>
                <input
                  className="customInput"
                  type="email"
                  name="email"
                  required
                  onChange={handleInputChange}
                  value={inputs.email}
                />
            </div>
            <div>
              <label className="customLabel">Phone Number</label>
              <PhoneInput
                className="customPhoneInput"
                country='am'
                international
                required
                value={inputs.value}
                onChange={handlePhoneInputChange}
                error={inputs.value ? (isValidPhoneNumber(
                  inputs.value) ? undefined : 'Invalid phone number') : 'Phone number required'}
              />
            </div>
            <div>
              <label className="customLabel">Birth Date</label>
              <input
                className="customInput"
                type="date"
                name="birthDate"
                required
                placeholder="mm / dd / yyyy"
                onChange={handleInputAge}
                value={inputs.birthDate}
              />
            </div>
            <div>
                <label className="customLabel"> Gender </label>
                <p className="customGender"> 
                 <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleGenderChange}
                />
                 Male
                 </p>
                <p className="customGender">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleGenderChange}
                />
                Female
                </p>
            </div>
          <div>
            <button type="submit" onClick={handleSubmit} className="customButton">Submit</button>
          </div>
          </div>
          <h1 className="customH1"> Table </h1>
      <Users users={users} />
    </form>
  );
};

export default SignUp;
