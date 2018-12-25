import React from 'react';


const IngrInfo = props => (
	<div className="ingr-wrap">
		<div className="ingr-icon">
			<img src={props.image} alt={props.name}/>
			<span>price: {props.price} c</span>
		</div>
		<span className="ingr-name">{props.name}</span>
		<span className="inrg-count">x {props.count}</span>
		<div>
			<button className="ingr-add" onClick={props.onAdd}>+</button>
			<button className="ingr-delete" onClick={props.onRemove}>-</button>
		</div>
	</div>
);

export default IngrInfo;