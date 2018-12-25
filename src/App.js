import React, { Component } from 'react';
import Burger from './components/BurgerWrap/BurgerWrap';
import BreadTop from './components/BreadTop/BreadTop';
import BreadBottom from './components/BreadBottom/BreadBottom';
import Salad from './components/Salad/Salad';
import Cheese from './components/Cheese/Cheese';
import Meat from './components/Meat/Meat';
import Bacon from './components/Bacon/Bacon';


class App extends Component {
	state = {
		ingredients: [
			{id: 2, name: 'Salad', count: 1},
			{id: 3, name: 'Cheese', count: 3},
			{id: 1, name: 'Meat', count: 2},
			{id: 4, name: 'Bacon', count: 1},
		]
	};

	addIngredients = (ingr, count) => {
		const result = [];

		switch (ingr) {
			case 'Salad':
				for (let i = 0; i < count; i++) {
					result.push(<Salad key={'salsd' + i}/>);
				}
				return result;
			case 'Cheese':
				for (let i = 0; i < count; i++) {
					result.push(<Cheese key={'cheese' + i}/>);
				}
				return result;
			case 'Meat':
				for (let i = 0; i < count; i++) {
					result.push(<Meat key={'meat' + i}/>);
				}
				return result;
			case 'Bacon':
				for (let i = 0; i < count; i++) {
					result.push(<Bacon key={'meat' + i}/>);
				}
				return result;
			default:
				console.error('Wrong ingredient!');
		}
	};

	render() {
		return (
			<div className="container">
				<div className="constructor">
					<div className="constructor-left">
						<button>Meat</button>
						<button>Salad</button>
						<button>Cheese</button>
						<button>Bacon</button>
					</div>
					<div className="constructor-right">
						<Burger>
							<BreadTop />
								{this.state.ingredients.map((ingr) => {
									return this.addIngredients(ingr.name, ingr.count);
								})}
							<BreadBottom />
						</Burger>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
