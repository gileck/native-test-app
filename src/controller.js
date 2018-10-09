// import {getThings} from './initialState';
const {getThings} = require('./initialState');

module.exports = function () {

    const createApiClass = function (Element) {
        return class API extends Element {
            constructor($w, superArgs) {
                super(...superArgs);
                this.$w = $w;
            }

            set things(newThings) {
                this.$w.updateControllerData({newThings: newThings});
            }

            get things() {
                return [1,2,3,4,5];
            }
        }
    };

    async function pageReady(updateControllerData) {
        const things = await getThings();
        $w.updateControllerData({things});
    }



    function controller(controllerConfig) {
        return {
            pageReady,
            apiClass: createApiClass
        }
    }

    return {
        controller
    };
}();