import React from 'react';
import './styles.css';

import Header from '../../components/header/Header';
import TeacherItem from '../../components/teacherItem/TeacherItem';
import Input from '../../components/input/Input';
import Select from '../../components/select/Select';

export default function TeacherListScreen() {
    return (
        <div id="page-teacher-list" className="container">
            <Header title="Estes são os proffys disponíveis" >
                <form id="search-teachers">
                <Select 
                    options={[
                        { value: 'Artes', label: 'Artes' },
                        { value: 'Biologia', label: 'Biologia' },
                        { value: 'Ciências', label: 'Ciências' },
                        { value: 'Física', label: 'Física' },
                        { value: 'Geografia', label: 'Geografia' },
                        { value: 'História', label: 'História' },
                        { value: 'Matemática', label: 'Matemática' },
                        { value: 'Portugûes', label: 'Portugûes' },
                        { value: 'Química', label: 'Química' },
                    ]}
                    name="subject" 
                    label="Matéria "
                    />
                    <Select 
                    options={[
                        { value: '0', label: 'Domingo' },
                        { value: '1', label: 'Segunda-feira' },
                        { value: '2', label: 'Terça-feira' },
                        { value: '3', label: 'Quarta-feira' },
                        { value: '4', label: 'Quinta-feira' },
                        { value: '5', label: 'Sexta-feira' },
                        { value: '6', label: 'Sábado' },
                    ]}
                    name="week-day" 
                    label="Dia da semana "
                    />
                    <Input type="time" name="time" label="Hora " />
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
