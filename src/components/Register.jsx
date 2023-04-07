import React from "react";
import Input from "./Input";

function Register() {
        return (
                <form className="form">
                        <Input
                                type="text"
                                placeholder="UserName"
                        />
                        <Input
                                type="password"
                                placeholder="Password"
                        />
                        <Input
                                type="password"
                                placeholder="Confirm Password"
                        />
                        <button type="submit">
                                Register
                        </button>
                </form>
        );
}

export default Register;
