import React from "react"
import {connect, styled} from 'frontity'
import Link from '@frontity/components/link'

const List = ({state, actions}) => {
	const data = state.source.get(state.router.link)
	
	return (
		<>
			<Items>
				{data.items.map((item) => {
					const post = state.source[item.type][item.id]
					return (
						<>
							<article>
								<h4>
									<Link key={item.id} link={post.link}>
										{post.title.rendered}
									</Link>
								</h4>
								
								<div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
								<Link link={post.link}>Read more</Link>
							</article>
						</>
					)
				})}
			</Items>
			<PrevNextNav>
				{data.previous &&
					<button
						onClick={() => {
							actions.router.set(data.previous)
						}}>Previous</button>
				}
				{data.next &&
					<button
						onClick={() => {
							actions.router.set(data.next)
						}}>Next</button>
				}
			</PrevNextNav>
		</>
	)
}

export default connect(List)

const Items = styled.div`
	article{
		margin-bottom: 2em;
	}
	& > a{
		display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;
	}
`

const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
    color: steelblue;
  }
  & > button:hover {
    cursor: pointer;
  }
`