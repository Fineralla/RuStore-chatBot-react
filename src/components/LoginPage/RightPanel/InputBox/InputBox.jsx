import { useRef, useState } from 'react';

import InputLoginForm from '../InputForms/InputLoginForm';
import InputRegForm from '../InputForms/InputRegForm';

import './InputBox.scss';

function InputBox() {
	const [loginValue, setLoginValue] = useState({
		VK_id: '',
		password: ''
	});

	const [regValue, setRegValue] = useState({
		VK_id: '',
		password: ''
	});

	const wrapperRef = useRef(null);

	return (
		<div ref={wrapperRef} className='wrapper'>
			<div className='form-box login'>
				<InputLoginForm
					loginValue={loginValue}
					setLoginValue={setLoginValue}
					wrapperRef={wrapperRef}
				/>
			</div>
			<div className='form-box register'>
				<InputRegForm
					regValue={regValue}
					setRegValue={setRegValue}
					wrapperRef={wrapperRef}
				/>
			</div>
		</div>
	);
}

export default InputBox;
