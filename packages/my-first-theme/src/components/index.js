import React from 'react'
import {connect} from 'frontity'
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from './list'
import Post from './post'

const Root = ({state}) => {
	const data = state.source.get(state.router.link)
	
	return (
		<>
			<h1>Hello World!</h1>
			<p>This is my first attempts in React development!</p>
			<pre>Current url: {state.router.link}</pre>
			<nav>
				<Link link="/">Home</Link>
				<br/>
				<Link link="/page/2">More posts</Link>
				<br/>
				<Link link="/about-us">About us</Link>
			</nav>
			<hr/>
			<main>
				<Switch>
					<List when={data.isArchive} />
					<Post when={data.isPost} />
					<Post when={data.isPage} />
				</Switch>
			</main>
		</>
	);
};

export default connect(Root)