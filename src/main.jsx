import { createHashRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ChatPage from './pages/ChatPage';
import { Provider } from 'react-redux';
import { personReducer } from '../src/storePerson/personReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		person: personReducer
	}
});

const router = createHashRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/chat',
		element: <ChatPage />
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
