import Image from 'next/image'
import css from '../styles/menu.module.css'
import { urlFor } from '../lib/client'
import Link from 'next/link'

const Menu = ({ pizza }) => {

  console.log(pizza)

  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu That Always</span>
        <span>Make you Fall In Love</span>
      </div>

      <div className={css.menu}>
        {/* pizza */}
        {pizza.map((pizza, id) => {

          const src = urlFor(pizza.image).url()
          return (
            <div className={css.pizza} key={id}>
              <Link href={`./pizza/${pizza.slug.current}`}>                  
                <div className={css.ImageWrapper}>
                  <Image loader={() => src} src={src} alt='' unoptimized objectFit='cover' layout='fill' />
                </div>
              </Link>
              <span>{pizza.name}</span>
              <span><span style={{ color: "var(--themeRed)"}}>$</span> {pizza.price[1]}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu