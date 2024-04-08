import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import ProjectManager from './ProjectManager';
import ProjectForm from './ProjectForm';
import TestButton from './TestButton';

const logo = <h1>Task Arena</h1>
const logoSpace = ReactDOM.createRoot(document.getElementById('logo'));
logoSpace.render(logo);

const slogan = document.getElementById('slogan');
const sloganSpace = ReactDOM.createRoot(slogan);
sloganSpace.render(<h2>Slogan Goes Here</h2>);

const testingSpace = ReactDOM.createRoot(document.getElementById('testingGround'));
testingSpace.render(<TestButton />)

// const projectsSpace = ReactDOM.createRoot(document.getElementById('projects'));
// projectsSpace.render(<ProjectManager />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ProjectForm />);