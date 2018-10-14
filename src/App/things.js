import React from 'react';
// import 'regenerator-runtime/runtime';
// import santaTypesDefinitions from 'santa-components/src/definitions/santaTypesDefinitions';

class App extends React.Component {

    handleChange(e) {
        this.setState({value: event.target.value});
    }

    handleClick() {
        this.props.onSubmit(1, 2, this.state.value.split(" "));
    }


    render() {
        const {newThings, things} = this.props;
        return (
            <div className='root'>
                <input type="text" placeholder='Enter new things' onChange={(e) => this.handleChange(e)}/>
                <button style={{color: 'gray'}} onClick={() => this.handleClick()}>UPDATE</button>
                <div>Things from controller: {things} </div>
                <div>Things from Wix Code: {newThings} </div>
            </div>

        );
    }

    static displayName = "App";

    static css({styleId, styleData, layout}) {
        const {width, height} = layout;
        const styleParams = styleData.styleParams;
        const backgroundColor = _.get(styleParams, 'colors._backgroundColor.value');
        const color = _.get(styleParams, 'colors._titleColor.value');
        return toCssString({styleId, backgroundColor, color, width, height});
    }
}

const toCssString = ({styleId, backgroundColor, color, width, height}) =>
    `.root {
            background: ${backgroundColor}; 
            color: ${color};
            font-size: 20px;
            width: 100%; 
            height: 100%;
        } `;

export default {
    component: App
}


// export const NativePropsBuilder = (WrappedComponent) => {
//     return class extends React.Component {
//         constructor(props) {
//             super(props);
//             this.props.appLoadBI && this.props.appLoadBI.startLoading();
//         }
//
//         static propTypes = {
//             style: santaTypesDefinitions.NativeComponentSantaTypes.widgetStyle,
//             resizeComponent: santaTypesDefinitions.NativeComponentSantaTypes.resizeComponent,
//             dimensions: santaTypesDefinitions.Component.style,
//             compActions: santaTypesDefinitions.Component.compActions,
//             compData: santaTypesDefinitions.Component.compData,
//             handleAction: santaTypesDefinitions.Behaviors.handleAction,
//             formFactor: santaTypesDefinitions.NativeComponentSantaTypes.deviceType,
//             viewMode: santaTypesDefinitions.NativeComponentSantaTypes.viewMode,
//             defaultContentArea: santaTypesDefinitions.Container.defaultContentArea,
//             appLoadBI: santaTypesDefinitions.NativeComponentSantaTypes.appLoadBI
//         };
//
//         componentDidMount() {
//             this.props.appLoadBI && this.props.appLoadBI.loaded();
//         }
//
//         getEventHandlers() {
//             return _.mapValues(this.props.compActions, eventInfo => (...argsArray) => this.props.handleAction(eventInfo, {payload: JSON.stringify(argsArray)}));
//         }
//
//         getMarginLeftStyle() {
//             const {width, alignment} = _.get(this.props, 'defaultContentArea', {width: 980, alignment: 0.5});
//             return {
//                 marginLeft: `calc((100% - ${width}px) * ${alignment})`
//             }
//         }
//
//         render() {
//             const eventHandlers = this.getEventHandlers();
//             console.log({eventHandlers});
//             const wixCodeProps = _.get(this.props, 'compData.wixCodeProps');
//             const {style, id, resizeComponent, formFactor, viewMode} = this.props;
//             const dimensions = _.pick(this.props.dimensions, ['width', 'height', 'left', 'top']);
//             const props = {
//                 ...wixCodeProps,
//                 ...eventHandlers,
//                 id,
//                 style,
//                 resizeComponent,
//                 formFactor,
//                 viewMode,
//                 dimensions
//             };
//
//             const wrapperStyle = _.defaults(this.getMarginLeftStyle(), this.props.dimensions);
//             return <div style={wrapperStyle}>
//                 <WrappedComponent {...props}/>
//             </div>
//         }
//     };
// };



