import React from "react"
import {connect, styled, Head} from 'frontity'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

const Post = ({state, libraries}) => {
	const data = state.source.get(state.router.link)
	const post = state.source[data.type][data.id]
	const author = state.source.author[post.author]
	const Html2React = libraries.html2react.Component
	
	dayjs.extend(LocalizedFormat)
	
	return(
		<>
			<Head>
				<title>{post.title.rendered}</title>
				<meta name="description" content={post.excerpt.rendered} />
			</Head>
			<article>
				<h1>{post.title.rendered}</h1>
				<PostInfo>
					<p>
						<strong>Posted: </strong>
						{dayjs(post.date).format('DD.MM.YYYY HH:mm')}
					</p>
					<p>
						<strong>Author: </strong>
						{author.name}
					</p>
				</PostInfo>
				
				<Html2React id="post-content" html={post.content.rendered}/>
			</article>
		</>
	)
}

export default connect(Post)

const PostInfo = styled.div`
	color:red;
  background-image: linear-gradient(to right, #f4f4f4, #fff);
  margin-bottom: 1em;
  padding: 0.5em;
  border-left: 4px solid lightseagreen;
  font-size: 0.8em;

  & > p {
    margin: 0;
  }
`