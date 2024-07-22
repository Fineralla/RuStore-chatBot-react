import './InputBox.scss';
import { useState } from 'react';
import { useRef } from 'react';

import InputLoginForm from '../InputForm/InputLoginForm';
import InputRegForm from '../InputForm/InputRegForm';

function InputBox() {
	const [loginValue, setLoginValue] = useState({
		VK_id: '',
		password: ''
	});

	const [regValue, setRegValue] = useState({
		VK_id: '',
		password: ''
	});

	const [person, setPerson] = useState({
		id: '',
		password: ''
	});

	const wrapperRef = useRef(null);

	return (
		<div ref={wrapperRef} className='wrapper'>
			<div className='form-box login'>
				<InputLoginForm
					loginValue={loginValue}
					setLoginValue={setLoginValue}
					person={person}
					wrapperRef={wrapperRef}
				/>
			</div>
			<div className='form-box register'>
				<InputRegForm
					regValue={regValue}
					setRegValue={setRegValue}
					setPerson={setPerson}
					wrapperRef={wrapperRef}
				/>
			</div>
		</div>
	);
}

export default InputBox;
