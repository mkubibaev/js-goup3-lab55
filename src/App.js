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
			{name: 'Salad', count: 0},
			{name: 'Cheese', count: 0},
			{name: 'Meat', count: 0},
			{name: 'Bacon', count: 0},
		],
		startPrice: 20,
		totalPrice: 0
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
		const ingredients = [...this.state.ingredients];

		for (let i = 0; i < ingredients.length; i++) {
			if (ingredients[i].name === ingr) {
				ingredients[i].count++;
			}
		}

		this.setState({ingredients});
		this.getTotalPrice();
	};

	removeIngredient = (ingr) => {
		const ingredients = [...this.state.ingredients];

		for (let i = 0; i < ingredients.length; i++) {
			if (ingredients[i].name === ingr) {
				ingredients[i].count--;

				if (ingredients[i].count < 0) {
					ingredients[i].count = 0;
				}
			}
		}

		this.setState({ingredients});
		this.getTotalPrice();
	};

	setIngredientsCount = () => {
		const ingredients = [...this.state.ingredients];

		for (let i = 0; i < ingredients.length; i++) {
			for (let j = 0; j < ingredientList.length; j++) {
				if (ingredients[i].name === ingredientList[j].name) {
					ingredients[i].id = ingredientList[j].id;
					ingredients[i].price = ingredientList[j].price;
					ingredients[i].image = ingredientList[j].image;
				}
			}
		}
		this.setState({ingredients});
	};

	getTotalPrice = () => {
		const ingredients = [...this.state.ingredients];
		const startPrice = this.state.startPrice;
		let totalPrice = 0;

		for (let i = 0; i < ingredients.length; i++) {
			for (let j = 0; j < ingredientList.length; j++) {
				if (ingredients[i].name === ingredientList[j].name) {
					let ingrPrice = ingredients[i].count * ingredientList[j].price;
					totalPrice += ingrPrice;
				}
			}
		}

		if (totalPrice > 0) {
			totalPrice += startPrice;
		}

		this.setState({totalPrice});
	};

	componentDidMount() {
		this.setIngredientsCount();
	}

	render() {
		let BurgerImg = null;

		if (this.state.totalPrice > 0) {
			BurgerImg = (
				<div className="constructor-right">
					<Burger>
						<BreadTop />
						{this.state.ingredients.map((ingr) => {
							return this.showIngredients(ingr.name, ingr.count);
						})}
						<BreadBottom />
					</Burger>
					<p>Prise: {this.state.totalPrice}</p>
				</div>
			)
		} else {
			BurgerImg = (
				<div className="constructor-right">
					<p>Pick ingredient !</p>
				</div>
			)
		}

		return (
			<div className="container">
				<div className="constructor">
					<div className="constructor-left">
						{this.state.ingredients.map((ingr) => (
							<IngrInfo
								key={ingr.id}
								name={ingr.name}
								image={ingr.image}
								count={ingr.count}
								price={ingr.price}
								onAdd={this.addIngredient.bind(this, ingr.name)}
								onRemove={this.removeIngredient.bind(this, ingr.name)}
							/>

						))}


					</div>
					{BurgerImg}
				</div>
			</div>
		);
	}
}

export default App;
