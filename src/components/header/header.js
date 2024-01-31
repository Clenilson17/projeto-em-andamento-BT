import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/Free Batman Logo Wallpaper Download Free Clip Art Free Clip Art (1) 4.jpg';


function Header(){
    
   
     return(
        <header>
            <img id='logo' src={Logo}/>
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Clenilson</span>
            <nav>
                <ul>
                    < Link style = {{textDecoration:'none'}}to ='/'>
                     <li>Home</li>
                    </Link>

                    <Link style = {{textDecoration:'none'}} to='/contato'>
                     <li>Contato</li>
                    </Link>
                   
                    
                    <Link style = {{textDecoration:'none'}} to='/fotos'>
                     <li>Fotos</li>
                    </Link>
                    <Link style = {{textDecoration:'none'}} to='/comentarios'>

                    <li>Comentários</li>

                    </Link>

                    

                    
                </ul>
            </nav>
             
        </header>
        
    )
    
}






export default(Header) ;