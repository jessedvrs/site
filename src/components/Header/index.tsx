import * as React from 'react';
import './styles.css';

export interface HeaderProps {
    title: string;
    subtitle: string;
}

export default class Header extends React.Component<HeaderProps, {}> {
    render() {
        const { title, subtitle } = this.props;

        return (
            <header className="Header">
                <div className="Header__container">
                    <h1>{title}</h1>
                    <p className="Header__subtitle">{subtitle}</p>
                </div>
            </header>
        );
    }
}
