import React from 'react';


const IngrInfo = props => (
	<div className="ingr-wrap">
		<div className="ingr-img"
			 onClick={props.onAdd}
		>
			<img src={props.image} alt={props.name}/>
		</div>
		<span className="ingr-name">{props.name}</span>
		<span className="inrg-count">x {props.count}</span>
		<button className="ingr-delete"
				onClick={props.onRemove}
		>
			delete
		</button>
	</div>
);

export default IngrInfo;