import { useState } from 'react';

export default function Menu({onSelect}) {
	return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1" onClick={() => onSelect('TikTakToe')}>TikTakToe</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1" onClick={() => onSelect('Calculator')}>Calculator</button>
        </div>
    );
}