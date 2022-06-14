import React from "react"
import {connect, Head} from 'frontity'

const Page = ({state, libraries}) => {
	const data = state.source.get(state.router.link)
	const post = state.source[data.type][data.id]
	const Html2React = libraries.html2react.Component
	
	return(
		<>
			<Head>
				<title>{post.title.rendered}</title>
				<meta name="description" content={post.excerpt.rendered} />
			</Head>
			<article>
				<h1>{post.title.rendered}</h1>
				<Html2React id="post-content" html={post.content.rendered}/>
			</article>
		</>
	)
}

export default connect(Page)