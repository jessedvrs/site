import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../';
// import { Header, Page, Navigation } from '../';
import './styles.css';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <main className="App">
                    <Header title="Jesse de Vries" subtitle="Maker." />
                    {/*<Page />
                    <Navigation />*/}
                </main>
            </BrowserRouter>
        );
    }
}
