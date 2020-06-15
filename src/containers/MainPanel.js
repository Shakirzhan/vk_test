import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Panel, PanelHeader, Div, Group, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import logo from '../logo.svg';
import logoMain from '../image/paw.png';
import CurrencyRateDashboard from './CurrencyRateDashboard';
import CurrencyConverter from './CurrencyConverter';
import * as vkSelectors from '../store/vk/reducer';
import * as currencyRatesActions from '../store/currency_rates/actions';
import Footer from './Footer';
import Logger from './Logger';


class MainPanel extends Component {

    componentWillMount() {
        this.props.dispatch(currencyRatesActions.fetchUsdEurRate());
        this.props.dispatch(currencyRatesActions.fetchCbrCurrencyRates());
    }

    render() {
        const isProduction = process.env.NODE_ENV === 'production';
        let logger = null;
        if (!isProduction) {
            logger = <Logger/>;
        }

        return (
            <Panel id={this.props.id}>
                <PanelHeader>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img width="32" src={logoMain} />&nbsp;&nbsp;&nbsp;Лапы и хвосты
                    </div>
                </PanelHeader>
                <Div style={{
                    height: 'calc(100vh - 68px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <Div style={{textAlign: 'center'}}>
                        <h1>Здравствуйте, Ник!</h1>
                        <div style={{ 
                            marginBottom: 16,
                            fontSize: '17px',
                            lineHeight: '20px' 
                            }}>С приложением 'Лапы и хвосты' следить за здоровьем Вашего питомца легко и просто</div>
                        <Button size="l">Продолжить</Button>
                    </Div>
                </Div>
            </Panel>
        );

        return (
            <Panel id={this.props.id}>
                <PanelHeader>
                    Курсы валют
                </PanelHeader>
                <Div style={{textAlign: 'center', marginTop: 10}}>
                    <img width={96} height={96} src={logo} alt="logo"/>
                </Div>
                <Group title="Курс ЦБ РФ">
                    <CurrencyRateDashboard/>
                </Group>
                <Group title="Калькулятор">
                    <CurrencyConverter/>
                </Group>
                <Footer router={this.props.router}/>
                {logger}
            </Panel>
        );
    }
}

function mapStateToProps(state) {
    return {
        notificationStatus: vkSelectors.getNotificationStatus(state),
    };
}

export default connect(mapStateToProps)(MainPanel);
