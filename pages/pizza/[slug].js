import Image from "next/image"
import Layout from "../../components/Layout"
import { client, urlFor } from "../../lib/client"
import css from '../../styles/pizza.module.css'
import LeftArrow from '../../assets/arrowLeft.png'
import RightArrow from '../../assets/arrowRight.png'
import { useState } from "react"

const Pizza = ({ singlePizza }) => {
	const src = urlFor(singlePizza.image).url()

	const [size, setSize] = useState(1)
	const [quantity, setQuantity] = useState(1)

	const handleQuantity = (type) => {
		type === 'plus' ? setQuantity(prev => prev + 1) : quantity === 1 ? null : setQuantity(prev => prev - 1)
	}
	return (
		<Layout>
			<div className={css.container}>
				<div className={css.imageWrapper}>
					<Image loader={() => src} alt="" src={src} layout='fill' unoptimized />
				</div>

				{/* right side */}
				<div className={css.right}>
					<span>{singlePizza.name}</span>
					<span>{singlePizza.details}</span>
					<span><span style={{ color: "var(--themeRed)" }}>$</span> {singlePizza.price[size]}</span>
					<div className={css.size}>
						<span>Size</span>
						<div className={css.sizeVariants}>
							<div onClick={() => setSize(0)} className={size === 0 ? css.selected : ""}>Small</div>
							<div onClick={() => setSize(1)} className={size === 1 ? css.selected : ""}>Medium</div>
							<div onClick={() => setSize(2)} className={size === 2 ? css.selected : ""}>Large</div>
						</div>
					</div>

					{/* Quantity counter */}
					<div className={css.quantity}>
						<span>Quantity</span>

						<div className={css.counter}>
							<Image onClick={() => handleQuantity('minus')} style={{ cursor: "pointer" }} src={LeftArrow} height={20} width={20} alt="leftarrow" objectFit="contain" />
							<span>{quantity}</span>
							<Image onClick={() => handleQuantity('plus')} style={{ cursor: "pointer" }} src={RightArrow} height={20} width={20} alt="rightarrow" objectFit="contain" />
						</div>
					</div>

					{/* button */}
					<div className={`btn ${css.btn}`}>
						Add to Cart
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Pizza

export const getStaticPaths = async () => {
	const paths = await client.fetch(
		`*[_type=="pizza" && defined(slug.current)][].slug.current`
	)

	return {
		paths: paths.map((slug) => ({ params: { slug } })),
		fallback: 'blocking',
	}
}

export const getStaticProps = async (context) => {
	const { slug = "" } = context.params
	const singlePizza = await client.fetch(
		`*[_type=="pizza" && slug.current == '${slug}'][0]`
	)

	return {
		props: {
			singlePizza,
		}
	}
}