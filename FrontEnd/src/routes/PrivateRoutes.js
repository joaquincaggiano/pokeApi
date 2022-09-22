import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

export default function PrivateRoutes({ children }) {
	const { userLogged } = useContext(UserContext);
console.log("user logged", userLogged)
	return userLogged ? [children ] : <Navigate to='/user/login' />;
}
