import React from 'react';
import _ from 'lodash';
import {santaTypeDefinitions} from 'santa-components/dist/santa-components-infra.prod.js'
export class TPAWidgetNative extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comp: null
        }
    }

    static displayName = "TPAWidgetNative";


    static propTypes = {
        style: santaTypeDefinitions.NativeComponentSantaTypes.widgetStyle,
        styleId: santaTypeDefinitions.Component.styleId,
        dimensions: santaTypeDefinitions.Component.style,
        compActions: santaTypeDefinitions.Component.compActions,
        compData: santaTypeDefinitions.Component.compData,
        handleAction: santaTypeDefinitions.Behaviors.handleAction,
        deviceType: santaTypeDefinitions.NativeComponentSantaTypes.deviceType,
        viewMode: santaTypeDefinitions.NativeComponentSantaTypes.viewMode,
        defaultContentArea: santaTypeDefinitions.Container.defaultContentArea,
        createNativeAppComponent: santaTypeDefinitions.NativeComponentSantaTypes.createNativeAppComponent,
        getStyleData: santaTypeDefinitions.Component.getStyleData
    };

    getStyle(overrides) {
        const {width, alignment} = _.get(this.props, 'defaultContentArea', { width: 980, alignment: 0.5});
        const marginLeft = {marginLeft: `calc((100% - ${width}px) * ${alignment})`};
        return _.defaults(this.props.dimensions, marginLeft, overrides);
    }

    getCompName(compName) {
        return this.isEditor() ? compName + "-Editor" : compName;
    }

    isEditor() {
        return this.props.viewMode === "editor";
    }

    componentDidMount() {
        this.props.createNativeAppComponent(this.getCompName("NativeApp"), this.props, comp => {
            this.setState({comp})
        });
        // this.props.appLoadBI && this.props.appLoadBI.loaded();
    }

    getEventHandlers() {
        return _.mapValues(this.props.compActions, eventInfo => (...argsArray) => this.props.handleAction(eventInfo, {payload: JSON.stringify(argsArray)}));
    }

    // getCompCss(styleId, styleProps) {
    //     const data = styleProps.getStyleData(styleId);
    //     if (!_.isFunction(_.get(this.state,'comp.getCompCss'))) {
    //         return null;
    //     }
    //     return this.state.comp.getCss(styleId, data);
    // }


    render() {
        const Comp = _.get(this.state,'comp.type');
        if (!Comp) {
            return <div/>
        }
        const compProps = this.state.comp.props;
        const wixCodeProps = compProps.compData.wixCodeProps;
        const eventHandlers = this.getEventHandlers();
        const {style, id, resizeComponent, deviceType, viewMode, isViewerMode, styleId} = this.props;
        const dimensions = _.pick(this.props.dimensions, ['width', 'height', 'left', 'top']);
        const wrapperStyle = this.getStyle();
        const mobxObserverWrapperProps = _.get(this.props,'computedParentDimensions.scope.props.mobxObserverWrapperProps');
        const props = {
            ...wixCodeProps,
            ...eventHandlers,
            id,
            style,
            resizeComponent,
            deviceType,
            viewMode,
            dimensions,
            isViewerMode,
            mobxObserverWrapperProps,
            styleId
        };

        const compCss = Comp.getCss(style);

        return (
            <div style={wrapperStyle}>
                <Comp {...props}/>
                <style>{compCss}</style>
            </div>
        )
    }
}

// const cssTypes = {
//     getStyleData: santaTypeDefinitions.Component.getStyleData
// };
//
// TPAWidgetNative.getCompCss = TPAWidgetNative.prototype.getCompCss;
// TPAWidgetNative.getCompCss.cssTypes = cssTypes;