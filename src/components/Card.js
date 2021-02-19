import React from 'react'
import styled from 'styled-components'
import colors from './colors'
const Main = styled.main`
	width: 100%;
	height:100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	z-index:10;
`
const Article = styled.article`
	width: 85%;
	height:45%;
	background-color: #fff;
	border-radius: 20px;
	overflow: hidden;
	@media screen and (min-width: 375px){
		width: 30%;
		height:50%;
	}
`
const Header = styled.header`
	width: 100%;
	height:35%;
	background-image: url('./assets/card.svg')
`
const Img = styled.img`
	border-radius: 50%;
	border: 5px solid #fff;
	transform: translateY(45%);
	@media screen and (min-width: 375px){
		transform: translateY(55%);
	}
`
const Section = styled.section`
	height:45%;
	display: flex;
	justify-content: center;
	align-items: end;
	border-bottom: 1px solid ${colors.darkgray}
`
const Footer = styled.footer`
	height:45%;
	padding-top: 10px;
	display: flex;
	justify-content: space-around;
`
const Card = () => (
	<Main>
		<Article>
			<Header>
				<Img src='./assets/victor.jpg'/>
			</Header>
			<Section>
				<p>Victor Crest 26<br/> London</p>
			</Section>
			<Footer>
				<div>80K<br/> Followers</div>
				<div>803K<br/> Likes</div>
				<div>1.4K<br/> Photos</div>
			</Footer>
		</Article>
	</Main>
)
export default Card