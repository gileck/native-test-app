module.exports = function () {

    let pubsub, id, count = 0;
    let isFirstTime = true;

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

    function getThings() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const things = [1, 2, 3, 4];
                resolve(things);
            }, 1000)
        });
    }

    async function pageReady($w) {
        if (!window) return; //this code should not run inside the real worker.
        if (pubsub) {
            pubsub.unsubscribe('add_to_cart_wix_code', id);
            id = pubsub.subscribe('add_to_cart_wix_code', ({data}) => {
                count++;
                $w('@this').props = {count};
            }, isFirstTime);
            //wix code run before this code only when the page is loaded in the first time
            isFirstTime = false;
        }
        $w('@this').props = {count};
    }

    function controller() {
        return {
            pageReady,
            exports: function ($w) {
                return {
                    addToCart: function (product) {
                        pubsub.publish('add_to_cart_wix_code', {product}, true);
                    }
                }
            }
        }
    }

    const controllerByType = {
        "153dd52f-493b-2ae5-2506-08a492a3b838": controller
    };

    function createControllers(controllerConfigs) {
        return controllerConfigs.map(function ({type}) {
            return Promise.resolve(controllerByType[type] ? controllerByType[type]() : emptyController())
        });
    }

    return {
        initAppForPage: initAppForPage,
        createControllers: createControllers,
        exports: {}
    };
}();