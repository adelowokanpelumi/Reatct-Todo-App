import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var taskslist = ["My Tasks"];

var tasks = localStorage.getItem('storedTasks');

if(tasks) {
	taskslist =  JSON.parse(tasks);
}


ReactDOM.render(<App tasks={taskslist} />, document.getElementById('root'));
registerServiceWorker();
