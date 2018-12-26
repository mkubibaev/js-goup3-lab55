import React, { Component } from 'react';
import Burger from './components/BurgerWrap/BurgerWrap';
import BreadTop from './components/BreadTop/BreadTop';
import BreadBottom from './components/BreadBottom/BreadBottom';
import Salad from './components/Salad/Salad';
import Cheese from './components/Cheese/Cheese';
import Meat from './components/Meat/Meat';
import Bacon from './components/Bacon/Bacon';
import IngrInfo from './components/IngrInfo/IngrInfo';
import saladImage from "./assets/images/salad.png";
import cheeseImage from "./assets/images/cheese.png";
import meatImage from "./assets/images/meat.png";
import baconImage from "./assets/images/bacon.png";


class App extends Component {
	state = {
		ingredients: [
			{id: 1, name: 'Salad', price: 5, image: saladImage, count: 0},
			{id: 2, name: 'Cheese', price: 20, image: cheeseImage, count: 0},
			{id: 3, name: 'Meat', price: 50, image: meatImage, count: 0},
			{id: 4, name: 'Bacon', price: 30, image: baconImage, count: 0},
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

	getTotalPrice = () => {
		const ingredients = [...this.state.ingredients];
		const startPrice = this.state.startPrice;
		let totalPrice = 0;

		for (let i = 0; i < ingredients.length; i++) {
			if (ingredients[i].count) {
				let ingrPrice = ingredients[i].count * ingredients[i].price;
				totalPrice += ingrPrice;
			}
		}

		if (totalPrice > 0) {
			totalPrice += startPrice;
		}

		this.setState({totalPrice});
	};

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
					<p>Price: {this.state.totalPrice} c</p>
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
