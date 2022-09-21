import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

export default function GuestRoutes({ children }) {
	const { userLogged } =
		useContext(UserContext);

	return !userLogged ? (
		{ children }
	) : (
		<Navigate to='/' />
	);
}
