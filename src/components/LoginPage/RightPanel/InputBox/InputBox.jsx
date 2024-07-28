import './InputBox.scss';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import InputLoginForm from '../InputForms/InputLoginForm';
import InputRegForm from '../InputForms/InputRegForm';

function InputBox() {
	const [loginValue, setLoginValue] = useState({
		VK_id: '',
		password: ''
	});

	const [regValue, setRegValue] = useState({
		VK_id: '',
		password: ''
	});

	const useLocalStorageList = (key, defaultValue) => {
		const [person, setPerson] = useState(() =>
			JSON.parse(localStorage.getItem(key) || defaultValue)
		);
		useEffect(() => {
			localStorage.setItem(key, JSON.stringify(person));
		}, [key, person]);
		return [person, setPerson];
	};

	const [person, setPerson] = useLocalStorageList('person', {
		id: 0,
		password: 0
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
