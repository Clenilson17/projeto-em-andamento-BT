import React from "react";
import './styles.css';



function Footer(){
    return(
        <footer>
    <img style="object-fit:contain;" id="logo" src="src/assets/Free Batman Logo Wallpaper Download Free Clip Art Free Clip Art (1) 4.jpg "/>
    <span>Todos os direitos reservados ©</span>
    <span>Desenvolvido por: Clenilson</span>

    <nav class="footer-navigation">
        <ul class="footer-list">
        <to href="./index.html">
                <li>Home</li>
            </to>

            <to href="./contato.html">
                <li>Contato</li>
            </to>

            <to href="./fotos.html">

                <li>Fotos</li>
            </to>

            <a href="./comentarios.html">

                <li>Comentários</li>
            </a>


        </ul>
    </nav>
   </footer>
    )
}

export default (Footer);