import './Footer.css'

const Rodape = () => {
   return (<footer className="footer">
       <section>
           <ul>
               <li>
                   <a href="https://www.linkedin.com/in/jo%C3%A3o-paulo-01b137315/" target="_blank">
                       <img src="/imagem/ln.png" alt="" />
                   </a>
               </li>
               <li>
                   <a href="https://github.com/JoaoPaulo23342" target="_blank">
                       <img src="/imagem/gt.png" alt="" />
                   </a>
               </li>
               <li>
                   <a href="instagram.com.br" target="_blank">
                       <img src="/imagem/ig.png" alt="" />
                   </a>
               </li>
           </ul>
       </section>
       <section>
           <h2>Times</h2>
           <h4>Gerêncie seus grupos acadêmicos</h4>
       </section>
       <section>
           <p>
               Desenvolvido por João Paulo.
           </p>
       </section>
   </footer>)
}

export default Rodape