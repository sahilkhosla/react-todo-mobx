import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import TodoStore from './stores/TodoStore';

ReactDOM.render(<App store={TodoStore} />, document.querySelector('.container'));
