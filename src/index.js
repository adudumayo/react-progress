import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import ProjectManager from './ProjectManager';

const logo = <h1>Task Arena</h1>
const logoSpace = ReactDOM.createRoot(document.getElementById('logo'));
logoSpace.render(logo);

const slogan = document.getElementById('slogan');
const sloganSpace = ReactDOM.createRoot(slogan);
sloganSpace.render(<h2>Slogan Goes Here</h2>);

const testing = ReactDOM.createRoot(document.getElementById('projects'));
testing.render(<ProjectManager />);