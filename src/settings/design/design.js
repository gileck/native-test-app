import UI from 'editor-ui-lib';
import React from 'react'

export default class Design extends React.Component {
    render() {
        return (
            <div>
                <hr className="divider-long"/>
                <UI.sectionDividerLabeled label="Text & Background"/>
                <hr className="divider-long"/>

                <UI.fontAndColorPicker
                    title="Title font and color"
                    wix-param-font="_titleFont"
                    wix-param-color="_titleColor"
                    startWithColor="color-5"
                    startWithTheme="font_4"/>

                <hr className="divider-long"/>

                <hr className="divider-long"/>

                <UI.colorPickerSlider
                    title="Background Color"
                    wix-param="_backgroundColor"
                    startWithColor="color-1"
                    startWithOpacity={1}/>

                <hr className="divider-long"/>
            </div>
        )
    }
}
