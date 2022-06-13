import React from "react"
import {connect} from 'frontity'
import Link from '@frontity/components/link'

const Page = ({state}) => {
	const data = state.source.get(state.router.link)
	const post = state.source[data.type][data.id]
	return(
		<article>
			<h1>{post.title.rendered}</h1>
			<div id="post-content" dangerouslySetInnerHTML={{__html:post.content.rendered}}/>
		</article>
	)
}

export default connect(Page)