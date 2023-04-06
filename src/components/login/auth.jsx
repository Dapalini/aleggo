import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../config/default';
import httpServices from '../../services/httpServices';

import SignIn from './signin';
import SignUp from './signup';

const Auth = () => {
	const navigate = useNavigate();

	const [authMode, setAuthMode] = useState('signup');

	const [errorData, setErrorData] = useState({ message: '', name: '' });

	const handleChangeAuthMode = () => {
		setErrorData({ message: null, name: null });
		setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
	};

	const handleSubmit = async (e, user, path) => {
		e.preventDefault();

		let httpResult;
		const apiEndPoint = config.apiEndPoint;

		try {
			httpResult = await httpServices.post(`${apiEndPoint}/${path}`, user);
		} catch (ex) {
			if (ex.response) {
				const errorResult = ex.response.data;
				setErrorData(errorResult);
				return;
			}
			setErrorData({ message: 'There is a connection error.', name: '' });
		}
		navigate('/main/home', { state: httpResult.data });
	};

	if (authMode === 'signin') {
		return (
			<SignIn
				onChangeAuthMode={handleChangeAuthMode}
				onSubmit={handleSubmit}
				errorData={errorData}
			/>
		);
	}
	if (authMode === 'signup') {
		return (
			<SignUp
				onChangeAuthMode={handleChangeAuthMode}
				onSubmit={handleSubmit}
				errorData={errorData}
			/>
		);
	}
};

export default Auth;
