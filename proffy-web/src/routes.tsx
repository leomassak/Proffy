import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import TeacherList from './pages/teacherList/TeacherListScreen';
import TeacherForm from './pages/teacherForm/TeacherFormScreen';

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/study" component={TeacherList} />
                <Route path="/give-classes" component={TeacherForm} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;