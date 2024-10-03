import './Rodape.css'

function Rodape() {
        return(
            <footer className='footer'>
                <div className='footer_icons'>
                   <img src='/imagens/fb.png'/>
                   <img src='/imagens/ig.png'/>
                   <img src='/imagens/tw.png'/>

                </div>

                <div className='footer_logo'>
                    <img src='/imagens/logo.png'/>
                </div>
               
                <div className='footer_subtitle'>
                    <h3> Desenvolvido por Gabriel Ramos</h3>
                </div>
                
            </footer>
        )
}

export default Rodape