import React from 'react';
import './styles.css';

import Header from '../../components/header/Header';
import TeacherItem from '../../components/teacherItem/TeacherItem';

export default function TeacherListScreen() {
    return (
        <div id="page-teacher-list" className="container">
            <Header title="Estes são os proffys disponíveis" >
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input type="text" id="week-day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </Header>
            <main>
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
            </main>
        </div>
    )
}
