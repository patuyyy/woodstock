import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black dark:text-white text-black py-6 mt-8">
            <br></br>
            <br></br>
            <div className="container mx-auto text-center">
                <p className="text-xl font-semibold">All Rights Reserved &copy; {new Date().getFullYear()} WoodStock, Econnect Company</p>
                <p className="text-lg">Contact us: <a href="mailto:EconnectUI@gmail.com" className="text-blue-400 hover:text-blue-500">EconnectUI@gmail.com</a></p>
            </div>
            <br></br>
            <br></br>
        </footer>
    );
};


export default Footer;
