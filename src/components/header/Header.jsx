import React from 'react'
import styled from 'styled-components'

const Header = () => {
	return (
		<WrapperForHeader>
			<Container>
				<p>Welcome to our online shop</p>
				<p>English (USD) | Login or Sign up</p>
			</Container>
		</WrapperForHeader>
	)
}
const WrapperForHeader = styled.div`
	width: 100%;
	background: #7ac751;
	height: auto;
`
const Container = styled.header`
	width: 1200px;
	height: 50px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	p {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
		color: #ffffff;
	}
`
export default Header