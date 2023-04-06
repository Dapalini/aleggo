import React, { useState } from 'react';

const SignIn = (props) => {
	const { onChangeAuthMode, onSubmit, errorData } = props;

	const [user, setUser] = useState({ email: '', password: '' });

	const handleChange = (e) => {
		let newUserState = user;
		newUserState[e.target.name] = e.target.value;
		setUser(newUserState);
		return;
	};

	return (
		<div className='Auth-form-container'>
			<form className='Auth-form'>
				<div className='Auth-form-content'>
					<h3 className='Auth-form-title'>Sign In</h3>
					<div className='text-center'>
						Not registered yet?{' '}
						<span
							style={{ cursor: 'pointer' }}
							className='link-primary'
							onClick={onChangeAuthMode}
						>
							Sign Up
						</span>
					</div>
					<div className='form-group mt-3'>
						<label>Email address</label>
						<input
							name='email'
							type='email'
							className={`form-control mt-1 ${
								errorData.name === 'email' ? 'border-danger' : ''
							}`}
							placeholder='Enter email'
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div className='form-group mt-3'>
						<label>Password</label>
						<input
							type='password'
							name='password'
							className={`form-control mt-1 ${
								errorData.name === 'password' ? 'border-danger' : ''
							}`}
							placeholder='Enter password'
							onChange={(e) => handleChange(e)}
						/>
					</div>
					{errorData.message ? (
						<div className='mt-3 alert alert-danger d-flex align-items-center'>
							<span>{errorData.message}</span>
						</div>
					) : null}
					<div className='d-grid gap-2 mt-3'>
						<button
							onClick={(e) => onSubmit(e, user, 'auth')}
							className='btn btn-primary'
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
