import React from 'react';
import 'regenerator-runtime/runtime';
import {getThings} from "../initialState";

const EditorWrapper = function (InnerComponent) {
    return class EditorWrapper extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                things: []
            }
        }

        async componentDidMount() {


        }

        render() {
            const props = {
                things: this.state.things,
                ...this.props,
            };
            return (<InnerComponent {...props}/>)
        }

        static css(styleData) {
            return InnerComponent.css(styleData)
        }
    }
};


export default EditorWrapper;
