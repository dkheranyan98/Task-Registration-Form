import  { useState } from 'react';

const useSignUpForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const initialValue = [
    {
firstName: "Diana",
lastName:"Kheranyan",
email:"dianakheranyan@gmail.com",
phoneNumber :"+67955665544",
age:27,
Gender:"Female"

    },
    {
      firstName: "Aiana",
lastName:"Kheranyan",
email:"dianakheranyan@gmail.com",
phoneNumber :"+67955665544",
age:27,
Gender:"Female"

    }
  ].sort(
    (a,b)=>{
      return (a.firstName.toUpperCase() < b.firstName.toUpperCase()) ? -1 : (a.firstName.toUpperCase() > b.firstName.toUpperCase()) ? 1 : 0;
    }
  )
  const [users, setUsers] = useState(initialValue);
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputs((inputs) => ({ ...inputs }));
    let usersData = {...inputs}
    setUsers((users.concat(usersData).sort((a,b)=>{
      return (a.firstName.toUpperCase() < b.firstName.toUpperCase()) ? -1 : (a.firstName.toUpperCase() > b.firstName.toUpperCase()) ? 1 : 0;
    })
    ))
    setInputs(() => ([]));
    event.target.reset();
  };

  const handleInputChange = (event) => {
    event.persist();
    const { target: { name, value } } = event;
    if (name) {
      setInputs(inputs => ({ ...inputs, [name]: value }));
    }
  };

  const handlePhoneInputChange = (value,event) => {
    if (value) {
      setInputs(inputs => ({ ...inputs, phoneNumber: value }));
    }
  };

  const handleGenderChange = (event) => {
    event.persist();
    if (event) {
      setInputs(inputs => ({ ...inputs, Gender: event.target.value }));
    }
  };

  const handleInputAge = (event) => {
      event.persist();
      if(event.target.value) {
        let birthday = +new Date(event.target.value);
        let age = Math.floor((Date.now() - birthday) / (31557600000));
        setInputs(inputs => ({...inputs, userAge: age}));
        //31557600000 is the lenght of the year
        //it is  24 * 3600 * 365.25 * 1000
        //the lenght of the year is 365 days and 6 hours,which is 0.25 days
      }
  }

  return {
    handleSubmit,
    handleInputChange,
    handlePhoneInputChange,
    handleGenderChange,
    handleInputAge,
    inputs,
    users,
  };
};

export default useSignUpForm;
