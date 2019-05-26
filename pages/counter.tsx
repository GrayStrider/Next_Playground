import * as React from 'react'
import {useState} from "react";

function Counter(props) {
	const [count, increment] = useState(0);
	
	return (
		<>
			
			<button
				onClick={() => increment(count + 1)}>{count}
			</button>
		
		</>
	)
}


export default Counter;
