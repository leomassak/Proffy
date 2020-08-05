import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/svg/logo.svg';
import backIcon from '../../assets/svg/icons/back.svg';

import './styles.css';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({title, children}) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{title}</strong>
                {children}
            </div>
        </header>
    )
}

export default Header