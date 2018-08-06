import UI from 'editor-ui-lib';
import React from 'react'
import Layout from './layout/layout';
import Design from './design/design';

export class Settings extends React.Component {
    render () {
        return (
            <UI.appSettings>
                <UI.panelTabs defaultTabIndex={0}>
                    <Layout tab="Layout"/>
                    <Design tab="Design"/>
                    <hr className="divider-short"/>
                </UI.panelTabs>
            </UI.appSettings>
        )
    }
}
