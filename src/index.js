import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const logo = <h1>Task Arena</h1>
const logoSpace = ReactDOM.createRoot(document.getElementById('logo'));
logoSpace.render(logo);

const slogan = document.getElementById('slogan');
const sloganSpace = ReactDOM.createRoot(slogan);
sloganSpace.render(<h2>Slogan Goes Here</h2>);

const list = (
    <ul>
        <li>React for front-end</li>
        <li>Nodejs for back-end</li>
        <li>MongoDB for Data Base</li>
    </ul>
);

const projectsSpace = ReactDOM.createRoot(document.getElementById('projects'));
projectsSpace.render(list);