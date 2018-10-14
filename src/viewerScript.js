/*** wix-sdk.js*/
export let WixSDK = null;
export function setSDK(sdk) {
    WixSDK = sdk;
}

/*** file.js */

const WEATHER_WIDGET_ID = "6fa1ef51-0aaf-40bb-9d46-d2b4b5ea7e99";
const citiesWeather = {
    'Tel Aviv': 30,
    'London': 20,
    'Paris': 10
};
const getWeather = function (city) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(citiesWeather[city]);
        }, 1000)
    })
};

/**
 *
 * @param $w (String) => Element
 * @param wixSDK - {window, user, stores, site, pay, location, crm}
 * @returns {Promise<WarmupData>}
 */
async function pageReady($w, wixSDK) {
    const city = 'Tel Aviv';
    const weather = await getWeather(city);
    $w.props({
        city,
        weather,
        onCityChanged: newCity => {
            getWeather(newCity)
                .then(newWeather => $w.props({
                    city: newCity,
                    weather: newWeather
                }))
        }
    });

    // return {city, weather}
}

/**
 * pageReady: ($w, wixSDK) => Promise<warmupData>
 * exprots: (RMI, $w) => Object - The controller's public API.
 */
const weatherController = () => {
    return {
        pageReady,
        exports: function (RMI, $w) {
            return {
                setWeather() {

                }
            }
        }
    }
};

const controllerByType = {
    [WEATHER_WIDGET_ID]: weatherController
};


/**
 * @param controllerConfigs: controllerConfig[]
 * @returns Controller[] | Promise<Controller>[]
 */
function createControllers(controllerConfigs) {
    return controllerConfigs.map(config => controllerByType[config.type](config));
}


module.exports = {
    createControllers
};