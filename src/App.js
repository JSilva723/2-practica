import React from 'react'
import {createGlobalStyle} from 'styled-components'
import colors from './components/colors'
import Card from './components/Card'

const GlobalStyle = createGlobalStyle`
	html{
		position: relative;
		
		&::before{
			content: '';
			display: block;
			width:800px;
			height: 375px;
			position: fixed;
			top: 0;
			left: 0;
			background-image: url('./assets/top.svg');
			background-repeat: no-repeat;
			background-position-x: -745px;
			background-position-y: -565px;
		}
		&::after{
			content: '';
			display: block;
			width: 800px; 
			height: 375px;
			position: fixed;
			bottom: 0;
			right: 0;
			background-image: url('./assets/bottom.svg');
			background-repeat: no-repeat;
			background-position-x: 600px;
			background-position-y: -60px;
		}
		@media screen and (min-width: 375px){
			&::before{
				content: '';
				display: block;
				width:800px;
				height: 375px;
				position: fixed;
				top: 0;
				left: 0;
				background-image: url('./assets/top.svg');
				background-repeat: no-repeat;
				background-position-x: -430px;
				background-position-y: -600px;

			}
			&::after{
				content: '';
				display: block;
				width: 800px; 
				height: 375px;
				position: fixed;
				bottom: 0;
				right: 0;
				background-image: url('./assets/bottom.svg');
				background-repeat: no-repeat;
				background-position-x: 130px;
				background-position-y: 100px;
			}
		}

	}
	body{
		margin: 0;
		background-color: ${colors.darkcyan};
		font-family: 'Kumbh Sans';
		font-size: 18px;
		text-align: center;
		height:100vh;
`
const App = () => {
  return (
  	<>
  		<GlobalStyle />
  		<Card/>
  		
  	</>
  );
}
export default App;