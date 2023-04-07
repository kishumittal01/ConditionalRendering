import React from "react";
import Form from "./Form";

//var isLoggedIn = false;
var userIsRegistered = false;

function App() {
        return (
                <div className="container">
                        <Form
                                isRegistered={
                                        userIsRegistered
                                }
                        />
                </div>
        );
}

export default App;

//{isLoggedIn ? <h1>Hello</h1> : <Login/>}
//{isRegistered ? <Login /> : <Register />}
