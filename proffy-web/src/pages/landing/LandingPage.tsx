import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/svg/logo.svg';
import landingImg from '../../assets/svg/landing.svg';
import studyIcon from '../../assets/svg/icons/study.svg';
import giveClassIcon from '../../assets/svg/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/svg/icons/purple-heart.svg';
import api from '../../services/api';

import './styles.css';


function LandingPage() {

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then((response) => {
            const { total } = response.data;

            setTotalConnections(total);
        });
    }, [])
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
                    Total de {totalConnections} conexõesjá realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    );
}

export default LandingPage;