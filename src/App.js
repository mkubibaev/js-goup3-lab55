import React, { Component } from 'react';
import Burger from './components/BurgerWrap/BurgerWrap';
import BreadTop from './components/BreadTop/BreadTop';
import BreadBottom from './components/BreadBottom/BreadBottom';
import Salad from './components/Salad/Salad';
import Cheese from './components/Cheese/Cheese';
import Meat from './components/Meat/Meat';
import Bacon from './components/Bacon/Bacon';
import ingredientList from './lib/ingredient-list';
import IngrInfo from './components/IngrInfo/IngrInfo';


class App extends Component {
	state = {
		ingredients: [
			{name: 'Salad', count: 1},
			{name: 'Cheese', count: 3},
			{name: 'Meat', count: 2},
			{name: 'Bacon', count: 1},
		]
	};

	showIngredients = (ingr, count) => {
		const result = [];

		switch (ingr) {
			case 'Salad':
				for (let i = 0; i < count; i++) {
					result.push(<Salad key={'salad' + i}/>);
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
					result.push(<Bacon key={'bacon' + i}/>);
				}
				return result;
			default:
				console.error('Wrong ingredient!');
		}
	};

	addIngredient = (ingr) => {
		let ingredients = [...this.state.ingredients];

		for (let i = 0; i < ingredients.length; i++) {
			if (ingredients[i].name === ingr) {
				ingredients[i].count++;
			}
		}

		this.setState({ingredients});
	};

	removeIngredient = (ingr) => {
		let ingredients = [...this.state.ingredients];

		for (let i = 0; i < ingredients.length; i++) {
			if (ingredients[i].name === ingr) {
				ingredients[i].count--;
			}
		}

		this.setState({ingredients});
	};

	render() {
		return (
			<div className="container">
				<div className="constructor">
					<div className="constructor-left">
						{ingredientList.map((ingr) => (
							<IngrInfo
								key={ingr.id}
								name={ingr.name}
								image={ingr.image}
								count={ingr.price}
								onAdd={this.addIngredient.bind(this, ingr.name)}
								onRemove={this.removeIngredient.bind(this, ingr.name)}
							/>

						))}


					</div>
					<div className="constructor-right">
						<Burger>
							<BreadTop />
								{this.state.ingredients.map((ingr) => {
									return this.showIngredients(ingr.name, ingr.count);
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
