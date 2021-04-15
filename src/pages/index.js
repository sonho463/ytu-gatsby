import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"

export default function Home({data}) {
  return (
		<div className="w-11/12 mx-auto max-w-screen-xl">
<StaticImage src="../images/dino.png" alt="A dinosaur" />
			<nav className="flex justify-between items-center">
				<div className="">
					<StaticImage src="//.image/header-img.jpg" />
				</div>{/* /.header__logo */}
				<button className="lg:hidden block w-10">
					<span className="block w-7 h-1 my-2 bg-gray-500"></span>
					<span className="block w-7 h-1 my-2 bg-gray-500"></span>
					<span className="block w-7 h-1 my-2 bg-gray-500"></span>
				</button>
				<div className="deskTop-menu hidden lg:block">
					<ul className="flex items-center">

						<li className="mx-3 w-28 hover:underline">
							<a href="#rough-act">
								こんなことをしています
							</a>
						</li>
						<li className="mx-3 w-28 hover:underline">
							<a href="#usage-union-dues">
								組合費はどう使われているの？
							</a>
						</li>
						<li className="mx-3 w-28 hover:underline">
							<a href="#specialty">
								専門部の紹介をします
							</a>
						</li>
						<li className="mx-3 w-28 hover:underline">
							<a href="#specific-activities">
								具体的にはこんなことをしています
							</a>
						</li>
						<li className="mx-3 w-28 hover:underline">
							<a href="#faq">
								よくある疑問にこたえます
							</a>
						</li>
						<li className="mx-3 w-28 hover:underline">
							<a href="#contact">
								コンタクトはこちらから
							</a>
						</li>
					</ul>{/* /.nav-menu */}
				</div>{/* /.deskTop-menu */}
			</nav>{/* /.header__nav-bar */}
			<div className="relative">
				<figure>
					<Img fluid={data.file.childImageSharp.fluid} alt=""/>
				</figure>
				<div className="absolute bottom-5 left-5 text-white lg:text-5xl md:text-3xl lg:leading-snug md:leading-snug">
					<h1 className="">八尾市教職員組合<br />新規採用者特設サイト</h1>
					<p>ご訪問ありがとうございます！</p>
				</div>{/* /.text-wrapper */}
			</div>{/* /.main-title */}
			{/* /.header */}
		</div>


	)
}

export const query = graphql`
	query {
		file(relativePath: {eq: "header-img.jpg"}) {
			childImageSharp {
				fluid(maxWidth: 1600) {
					base64
					aspectRatio
					src
					srcSet
					srcWebp
					srcSetWebp
					sizes
				}
			}
		}
	}
`
