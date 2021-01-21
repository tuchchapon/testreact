import React from 'react'

export default function ex4_destrurcturing({usernameHint,passwordHint,handleSubmit}) {
    const product ={name: "Angular",price:10}
    const {name,price} = product
    return (
        <div>
          <form onSubmit={event =>{
              event.preventDefault();
              handleSubmit();
          }}>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" placeholder={usernameHint}></input>
             <br/>
              <label htmlFor="password ">Password </label>
              <input type="text" name="password" id="password"placeholder={passwordHint}></input>
              <br/>
            <button type="submit">submit</button>
          </form>
          <h1>{name}</h1>
          <h1>{price}</h1>
        </div>
    )
}
