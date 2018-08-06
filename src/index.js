import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {ViewerScriptWrapper} from 'native-components-infra';
import viewerScript from './viewerScript'

const WrapperComponent = ViewerScriptWrapper(App, {
    viewerScript: viewerScript,
    widgetConfig: {
        dataKeys: [{key: 'Teams', scope: 'COMPONENT'}],
        widgetId: "153dd52f-493b-2ae5-2506-08a492a3b838"
    },
    Wix: window.Wix
});
ReactDOM.render(<WrapperComponent /> ,document.getElementById('root'));
