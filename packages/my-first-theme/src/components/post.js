import React from "react"
import {connect} from 'frontity'
import Link from '@frontity/components/link'

const Post = ({state}) => {
	const data = state.source.get(state.router.link)
	const post = state.source[data.type][data.id]
	const author = state.source.author[post.author]
	return(
		<article>
			<h1>{post.title.rendered}</h1>
			<p>
				<strong>Posted: </strong>
				{post.date}
			</p>
			<p>
				<strong>Author: </strong>
				{author.name}
			</p>
			<div id="post-content" dangerouslySetInnerHTML={{__html:post.content.rendered}}/>
		</article>
	)
}

export default connect(Post)