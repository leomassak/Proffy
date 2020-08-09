import React, { useState } from 'react';

import './styles.css';
import Header from '../../components/header/Header';
import Input from '../../components/input/Input';
import warningicon from '../../assets/svg/icons/warning.svg';
import Textarea from '../../components/textArea/TextArea';
import Select from '../../components/select/Select';

export default function TeacherFormScreen() {

    const [schedulesAdded, setSchedulesAdded] = useState([{week_day: 0, from: '', to: '' }]);

    function addNewScheduleItem() {
        setSchedulesAdded([
            ...schedulesAdded,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    return (
        <div id="page-teacher-form" className="container">
            <Header 
            title="Que incrível que você quer dar aulas"
            description="O primeiro passo é preencher esse formulário de inscrição" 
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo "/>
                    <Input name="avatar" label="Avatar "/>
                    <Input name="whatsapp" label="WhatsApp "/>
                    <Textarea name="bio" label="Biografia" />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>

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
                    <Input name="cost" label="Custo da dus hora por aula "/>
                </fieldset>

                <fieldset>
                    <legend>
                       <span>Horários disponíveis </span>
                        <button onClick={addNewScheduleItem} type="button">+ Novo horário</button>
                    </legend>
                    {schedulesAdded.map(item => (
                         <div className="schedule-item" key={Math.random()}>
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
                         <Input name="from" label="Das" type="time"/>
                         <Input name="to" label="Até" type="time"/>
                         </div>
                    ))}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningicon} alt="Aviso importante"/>
                        Improtante! <br/>
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}
