import React from 'react'
import {connect, Global, css, styled, Head} from 'frontity'
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from './list'
import Post from './post'
import Page from './page'
import Loading from './loading'
import Error404 from './error-404'

const Root = ({state, actions}) => {
	const data = state.source.get(state.router.link)
	
	return (
		<>
			<Global
				styles={css`
					html, body, div, span, applet, object, iframe,
					h1, h2, h3, h4, h5, h6, p, blockquote, pre,
					a, abbr, acronym, address, big, cite, code,
					del, dfn, em, img, ins, kbd, q, s, samp,
					small, strike, strong, sub, sup, tt, var,
					b, u, i, center,
					dl, dt, dd, ol, ul, li,
					fieldset, form, label, legend,
					table, caption, tbody, tfoot, thead, tr, th, td,
					article, aside, canvas, details, embed,
					figure, figcaption, footer, header, hgroup,
					menu, nav, output, ruby, section, summary,
					time, mark, audio, video {
					\tmargin: 0;
					\tpadding: 0;
					\tborder: 0;
					\tfont-size: 100%;
					\tfont: inherit;
					\tvertical-align: baseline;
					}
					/* HTML5 display-role reset for older browsers */
					article, aside, details, figcaption, figure,
					footer, header, hgroup, menu, nav, section {
					\tdisplay: block;
					}
					body {
					\tline-height: 1;
					}
					ol, ul {
					\tlist-style: none;
					}
					blockquote, q {
					\tquotes: none;
					}
					blockquote:before, blockquote:after,
					q:before, q:after {
					\tcontent: '';
					\tcontent: none;
					}
					table {
					\tborder-collapse: collapse;
					\tborder-spacing: 0;
					}
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
            background-color:#444;
          }
          main{
            font-size: 1.2em;
            color: #999;
          }
          h1{
            font-size: 3em;
            margin-bottom: .9em;
          }
          h2{
            font-size: 2.7em;
            margin-bottom: .7em;
          }
          h3{
            font-size: 2.4em;
            margin-bottom: .55em;
          }
          h4{
            font-size: 2.1em;
            margin-bottom: .4em;
          }
        `}
			/>
			<Head>
				<title>My First Frontity Theme</title>
				<meta
					name="description"
					content="Based on the Frontity step by step tutorial"
				/>
			</Head>
			<Header isPostType={data.isPostType} isPage={data.isPage}>
				<HeaderContent>
					<Menu>
						<Link link="/">Home</Link>
						<Link link="/destinations">Destinations</Link>
						<Link link="/about-us">About us</Link>
					</Menu>
				</HeaderContent>
			</Header>
			<Main>
				<Switch>
					<Loading when={data.isFetching}/>
					<List when={data.isArchive} />
					<Post when={data.isPost} />
					<Page when={data.isPage || data.isDestinations} />
					<Error404 when={data.isError && data.is404}/>
				</Switch>
				
				
				{ state.theme.isUrlVisible ? <p>Current URL: {state.router.link}</p> : null }
				<Button onClick={actions.theme.toggleUrl}>url visibility toggle</Button>
			</Main>
		</>
	);
};

export default connect(Root)

const Header = styled.header`
  background-color: #333;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: ${(props) => (props.isPostType ? ( props.isPage ? 'lightsteelblue' : 'lightseagreen' ) : "maroon")};

  h1 {
    color: #4a4a4a;
  }
`
const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`
const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
    font-size: 1.5em;
  }
`

const Button = styled.button`
	font-size: 1.3em;
	background: cyan;
	border: 2px solid cyan;
	transition: all ease .3s;
	cursor: pointer;
	
	&:hover{
		background: white;
	}
`