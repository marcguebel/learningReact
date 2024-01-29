import { useState } from 'react';
import TikTakToe from './TikTakToe';
import Menu from './Menu';

export default function App() {
	const [display, setDisplay] = useState(null);

	let displayToRender;

	function setNewDisplay(newDisplay) {
		setDisplay(newDisplay);
	}

	switch(display) {
		case 'TikTakToe':
			displayToRender = <TikTakToe onSelect={setNewDisplay} />;
			break;
		default:
			displayToRender = <Menu onSelect={setNewDisplay} />;
			break;
	}

	return (
		<div>
			{displayToRender}
		</div>
	)
}