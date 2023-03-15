// @ts-ignore 
import React from 'react';
// @ts-ignore 
import LoginForm from "../components/LoginForm";

const Home = () => {
    return (
        <div className="home_container">
            <div className="form_container">
                <img src="./assets/logo.svg" alt="Logo" />
                <LoginForm></LoginForm>
            </div>
        </div>
    );
};

export default Home;