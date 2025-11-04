const imgLogo = require('./NovaZelandia.png');

function Header(){

    return(
        <header className='topo'>
        <figure>
          <img src={imgLogo} className='logo' />
        </figure>
        <nav>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#projetos'>Projetos</a></li>
            <li><a href='#servicos'>Serviços</a></li>
            <li><a href='#contato'>Contato</a></li>
          </ul>
        </nav>
      </header>

    )
}
 
export default Header