import React from 'react';
import './App.css';

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={"https://ggscore.com/media/logo/t62288.png?75"} className="App-logo" alt="logo"/>
                <div className={'headerTitle'}>
                    <h1>Frontend</h1>
                    <p>разработчик React/Redux</p>
                </div>
            </header>
            <nav>
                <p>Полезные ссылки</p>
                <ul className={'navigationList'}>
                    <li className={'navLink'}><a className={'link'} href={'https://www.zalypakov.net'}
                                                 about={'myGithub'}>Github</a></li>
                    <li className={'navLink'}><a className={'link'} href={'https://www.LinkedId.net'}
                                                 about={'LinkedId'}>LinkedId</a></li>
                </ul>
            </nav>
        </div>
    );
}
