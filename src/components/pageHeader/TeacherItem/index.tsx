import React from 'react'
import whatsappIcon from '../../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
                 <header>
                     <img src="https://media-exp1.licdn.com/dms/image/C5603AQGc1Ht0UuDlHw/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=viigJVxHKfLRlGaoYbuWXDU8cEEIacJJOteQF2U0fcA" />
                        <div>
                            <strong>Hugo Fortunato</strong>
                            <span>Química</span>
                        </div>
                 </header>
                 <p>
                 Entusiasta das melhores tecnologias de química avançada.
                    <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                 </p>
                 <footer>
                     <p>
                         Preço/Hora
                         <strong>R$ 80,00</strong>
                     </p>
                     <button type="button">
                         <img src={whatsappIcon} alt="Whatsapp" />
                         Entrar em contato
                     </button>
                 </footer>
                 <header>
                     <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFCB6aBNFNR0g/profile-displayphoto-shrink_800_800/0?e=1602115200&v=beta&t=bGAqjn8hH4cKjqjK3H1tuHgSuN2Ba2ezgS3XxDvFyCs" />
                        <div>
                            <strong>Marcelo Pereira</strong>
                            <span>Educação Física</span>
                        </div>
                 </header>
                 <p>
                 Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.
                  <br /><br />
                Comecei a minha jornada profissional em 2001, quando meu 
                pai me deu dois alteres de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!"
                </p>
                 <footer>
                     <p>
                         Preço/Hora
                         <strong>R$ 50,00</strong>
                     </p>
                     <button type="button">
                         <img src={whatsappIcon} alt="Whatsapp" />
                         Entrar em contato
                     </button>
                 </footer>
                 <header>
                     <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGqtaeE5pg_rg/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=aKR9UnOdC0C7IMhVwSt9vj2Qo7ICDvjWKq5D32SQtTU" />
                        <div>
                            <strong>Igor Sebek</strong>
                            <span>Geografia</span>
                        </div>
                 </header>
                 <p>
                 As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. 
                 Tenho memória fotográfica e nunca fico perdido.
                 Eu ensino a galera como não se perder na vida, com lições geográficas simples pra você nunca mais precisar de mapa na sua bela vida.
                 </p>
                 <footer>
                     <p>
                         Preço/Hora
                         <strong>R$ 100,00</strong>
                     </p>
                     <button type="button">
                         <img src={whatsappIcon} alt="Whatsapp" />
                         Entrar em contato
                     </button>
                 </footer>
             </article>
    );
}

export default TeacherItem 