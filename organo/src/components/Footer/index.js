import './Footer.css'

const Rodape = () => {
   return (<footer className="footer">
       <section>
           <ul>
               <li>
                   <a href="facebook.com" target="_blank">
                       <img src="/imagem/fb.png" alt="" />
                   </a>
               </li>
               <li>
                   <a href="twitter.com" target="_blank">
                       <img src="/imagem/tw.png" alt="" />
                   </a>
               </li>
               <li>
                   <a href="instagram.com" target="_blank">
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