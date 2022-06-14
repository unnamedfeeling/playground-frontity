import React from "react"
import {connect} from 'frontity'

const Error404 = ({state}) => {
	const data = state.source.get(state.router.link)
	
	return (
		<>
			<h1>{data.errorStatus} Error</h1>
			<p>
				The path <em>{data.link}</em> cannot be found.
			</p>
		</>
	)
}

export default connect(Error404)