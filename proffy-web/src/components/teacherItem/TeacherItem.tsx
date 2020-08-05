import React from 'react'
import whatsAppIcon from '../../assets/svg/icons/whatsapp.svg'

import './styles.css';

export default function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://instagram.fvcp2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/80611470_512510159360059_4425778195935413295_n.jpg?_nc_ht=instagram.fvcp2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=1pl2dFlnV3IAX8ulV3c&oh=5102979f2e1e22d1598491cfe406e65a&oe=5F556FB5" alt="Leonardo Massak"/>
                        <div>
                            <strong>Leonardo Massak</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br/><br/>
                        Apaixonado por explodir coisas em laboratório e por muudar a vida das pessoas através de experiências.
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsAppIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}
