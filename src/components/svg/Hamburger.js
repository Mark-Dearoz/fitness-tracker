function Hamburger(props) {
	return props.open ? (
		<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M1.10059 20.8995L20.8996 1.10055"
				stroke="#EBEBEB"
				stroke-width="2"
				stroke-linecap="round"
			/>
			<path d="M1 1L20.799 20.799" stroke="#EBEBEB" stroke-width="2" stroke-linecap="round" />
		</svg>
	) : (
		<svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 1H29" stroke="#EBEBEB" stroke-width="2" stroke-linecap="round" />
			<path d="M1 9H29" stroke="#EBEBEB" stroke-width="2" stroke-linecap="round" />
			<path d="M1 17H29" stroke="#EBEBEB" stroke-width="2" stroke-linecap="round" />
		</svg>
	)
}

export default Hamburger
