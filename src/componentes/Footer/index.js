
const imgInstagram = require('./instagram.png');
const imgFacebook = require('./facebook.png');
const imgLinkedin = require('./linkedin.png');

function Footer () {

    return(
        <footer>
        <nav className='menuFooter'>
          <ul>
            <li><a href='#projetos'>Projetos</a></li>
            <li><a href='#servicos'>Serviços</a></li>
            <li><a href='#contato'>Contato</a></li>
          </ul>
        </nav>

        <div className='direitos'>
          Desenvolvido por Rafael Florindo - 2025
        </div>

        <div className='redesSociais'>
          <div><img src={imgInstagram} className='imgRedeSocial' /></div>
          <div><img src={imgFacebook} className='imgRedeSocial' /></div>
          <div><img src={imgLinkedin} className='imgRedeSocial' /></div>
        </div>
      </footer>
    )
}

export default Footer;