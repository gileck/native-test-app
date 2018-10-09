// import {getThings} from './initialState';

module.exports = function () {
    const {getThings} = require('./initialState');

    let pubsub, updateCompProps;

    function initAppForPage(initAppParam, {pubSub, nativeApi}, scopedGlobalSdkApis) {
        pubsub = pubSub;
        return Promise.resolve();
    }

    function emptyController() {
        return {
            pageReady: () => {
            },
            exports: {}
        }
    }

    function isViewer() {
        return false;
    }

    function subscribeToWixCode() {
        if (pubsub) {
            pubsub.unsubscribe('add_to_cart_wix_code', id);
            id = pubsub.subscribe('add_to_cart_wix_code', ({data}) => {

                $w('@this').props = {newThings: data.things};
            }, isFirstTime);
            //wix code run before this code only when the page is loaded in the first time
            isFirstTime = false;
        }
    }

    // async function pageReady($w) {
    //     const things = await getThings();
    //     const native = $w('@this');
    //     native.props = {things};
    //     if (isIframe()) {
    //         subscribeToWixCode()
    //     }
    // }

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


    async function pageReady($w) {
        const things = await getThings();
        $w.props({
            things,

            onSubmit: function (a, b, newThings) {
                $w.props({
                    things: newThings,
                    a,
                    b
                })
            }
        });
    }

    function controller() {
        return {
            pageReady,
            // apiClass: createApiClass


            exports: function (RMI, $w) {
                return {
                    setThings: function(things) {
                        $w.props({
                            newThings: things,
                        })
                    }
                }
            }
            //     return {
            //         openChat: function (things) {
            //             if (nativeCompIsIframe()) {
            //                 pubsub.publish('add_to_cart_wix_code', {things}, true);
            //             }
            //             $w('@this').props = {newThings: things};
            //         }
            //     }
            // }
        }
    }

    const controllerByType = {
        "153dd52f-493b-2ae5-2506-08a492a3b838": controller,
        "6fa1ef51-0aaf-40bb-9d46-d2b4b5ea7e99": controller

    };

    function createControllers(controllerConfigs) {
        return controllerConfigs.map(function ({type}) {
            return Promise.resolve(controllerByType[type] ? controllerByType[type]() : emptyController())
        });
    }

    function isIframe() {
        return false;
    }

    function nativeCompIsIframe() {
        return false;
    }


    return {
        initAppForPage: initAppForPage,
        createControllers: createControllers,
        // exports: {
        //     openChat: function (things) {  }
        // }
    };
}();