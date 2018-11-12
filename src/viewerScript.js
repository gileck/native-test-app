const WEATHER_WIDGET_ID = "6fa1ef51-0aaf-40bb-9d46-d2b4b5ea7e99";
const WEATHER_WIDGET_ID_2 = "c919ae45-6189-44ed-9ddc-1f85e85a89f8";

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
 * pageReady: ($w, wixSDK) => Promise<warmupData>
 * exprots: (RMI, $w) => Object - The controller's public API.
 */
const weatherController = ({setProps}) => {
    return {
        async pageReady() {
            const city = 'Tel Aviv';
            const weather = await getWeather(city);
            console.log({weather});
            setProps({
                city,
                weather,
                actions: {
                    actions1: () => setProps({actions: {data: 'action1'}}),
                    actions2: () => setProps({actions: {data: 'action2'}}),
                    actions3: () => setProps({actions: {data: 'action3'}}),
                    data: 'defaultAction'
                },
                onCityChanged: newCity => {
                    getWeather(newCity)
                        .then(newWeather => setProps({
                            city: newCity,
                            weather: newWeather
                        }))
                }
            });

            // return {city, weather}
        },
        exports: function (RMI, $w) {
            return {
                setWeather() {

                }
            }
        }
    }
};

const controllerByType = {
    [WEATHER_WIDGET_ID]: weatherController,
    [WEATHER_WIDGET_ID_2]: weatherController
};


/**
 * @param controllerConfigs: controllerConfig[]
 * @returns Controller[] | Promise<Controller>[]
 */
function createControllers(controllerConfigs) {
    console.log({controllerConfigs});
    return controllerConfigs.map(config => controllerByType[config.type](config));
}


module.exports = {
    createControllers
};