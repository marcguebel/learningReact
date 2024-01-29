import { useState } from 'react';

export default function Menu({onSelect}) {
	return (
        <div>
            <button onClick={() => onSelect('TikTakToe')}>TikTakToe</button>
        </div>
    );
}