import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var tasksList = ["My Tasks"];

var tasks = localStorage.getItem('storedTasks');

if(tasks) {
	tasksList =  JSON.parse(tasks);
}


ReactDOM.render(<App tasks={tasksList} />, document.getElementById('root'));
registerServiceWorker();
