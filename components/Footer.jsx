import Image from 'next/image'
import css from '../styles/footer.module.css'
import Logo from '../assets/Logo.png'
import { UilFacebook, UilGithub, UilInstagram } from '@iconscout/react-unicons'

const Footer = () => {
  return (
    <div className={css.container}>
      <span>ALl RIGHT RESERVED</span>
      <div className={css.social}>
        <UilFacebook size={45} />
        <UilGithub size={45} />
        <UilInstagram size={45} />
      </div>

      <div className={css.logo}>
        <Image src={Logo} alt='logo' width={50} height={50} />
        <span>Fudo</span>
      </div>
    </div>
  )
}

export default Footer