import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import TestButton from './AddProject';

const testOnClick = () => {
    alert("You have clicked on it");
}

const logo = <h1>Task Arena</h1>
const logoSpace = ReactDOM.createRoot(document.getElementById('logo'));
logoSpace.render(logo);

const slogan = document.getElementById('slogan');
const sloganSpace = ReactDOM.createRoot(slogan);
sloganSpace.render(<h2>Slogan Goes Here</h2>);

const testingSpace = ReactDOM.createRoot(document.getElementById('projects'));
testingSpace.render(<TestButton />);

const testTheClix = ReactDOM.createRoot(document.getElementById('testDiv'));
testTheClix.render(<h1 onClick={testOnClick}>Revolution Starts Now</h1>);