import imgInstagram from './instagram.png';
import imgFacebook from './facebook.png';
import imgLinkedin from './linkedin.png';

export default function Footer() {
  return (
    <footer>
      <nav className='menuFooter'>
        <ul>
          <li><a href='#projetos'>Projetos</a></li>
          <li><a href='#servicos'>Serviços</a></li>
          <li><a href='#contato'>Contato</a></li>
        </ul>
      </nav>

      <div className='direitos'>
        Desenvolvido por Hadassa Oshima - 2025
      </div>

      <div className='redesSociais'>
        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
          <img src={imgInstagram} alt='Instagram' className='imgRedeSocial' />
        </a>
        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
          <img src={imgFacebook} alt='Facebook' className='imgRedeSocial' />
        </a>
        <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
          <img src={imgLinkedin} alt='LinkedIn' className='imgRedeSocial' />
        </a>
      </div>
    </footer>
  );
}
