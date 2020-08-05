import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/svg/logo.svg';
import landingImg from '../../assets/svg/landing.svg';
import studyIcon from '../../assets/svg/icons/study.svg';
import giveClassIcon from '../../assets/svg/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/svg/icons/purple-heart.svg';

import './styles.css';


function LandingPage() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" id="logo" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassIcon} alt="dar aulas"/>
                        Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 200 conexõesjá realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    );
}

export default LandingPage;