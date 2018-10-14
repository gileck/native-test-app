import React from 'react';
// import 'regenerator-runtime/runtime';
// import santaTypesDefinitions from 'santa-components/src/definitions/santaTypesDefinitions';

const toCssString = ({styleId, backgroundColor, color, width, height}) => {
    return `.root {
            background: ${backgroundColor}; 
            color: ${color};
            font-size: 20px;
            width: 100%; 
            height: 100%;
            padding: 10px;
        } `;
};


class App extends React.Component {

    handleClick(city) {
        this.props.onCityChanged(city);
    }


    render() {
        const {weather, city} = this.props;

        return (
            <div className='root'>

                <div>City: {city} </div>
                <div>Weather: {weather} </div>

                <br/>

                <div>
                    <a href="#" style={{color: 'white'}} onClick={() => this.handleClick('Tel Aviv')}>Tel Aviv</a>
                </div>
                <div>
                    <a href="#" style={{color: 'white'}} onClick={() => this.handleClick('London')}>London</a>
                </div>
                <div>
                    <a href="#" style={{color: 'white'}} onClick={() => this.handleClick('Paris')}>Paris</a>
                </div>
                <style>

                </style>
            </div>

        );
    }
    static css({styleId, styleData, layout}) {
        const {width, height} = layout;
        const styleParams = styleData.styleParams;
        const backgroundColor = _.get(styleParams, 'colors._backgroundColor.value');
        const color = _.get(styleParams, 'colors._titleColor.value');
        return toCssString({styleId, backgroundColor, color, width, height});
    }
}



export default {
    component: App
}


