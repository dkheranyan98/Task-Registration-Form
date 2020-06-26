import React from 'react';
import './Users.css';

const Users = ({ users }) => {
    console.log(users)
  return (
    <table className="customTable">
      <thead className="customThead">
      <tr>
        <th>    </th>
        <th>Full Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Age</th>
        <th>Gender</th>
      </tr>
      </thead>
      <tbody className="customBody">
      {users.map(({
        index,
        firstName,
        lastName,
        email,
        phoneNumber,
        userAge,
        Gender,

      }) => (
        <tr id={index}>
          <td>{index}</td>
      <td><th>{firstName}</th> <th>{lastName}</th></td> 
          <td>{email}</td>
          <td>{phoneNumber}</td>
          <td>{userAge}</td>
          <td>{Gender}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
};

export default Users;
