const theStore;
const WEATHER_WIDGET_ID = "6fa1ef51-0aaf-40bb-9d46-d2b4b5ea7e99";
const citiesWeather = {
    'Tel Aviv': 30,
    'London': 20,
    'Paris': 10
};

class SantaController() {
    constructor({$w}) {
        this.$w = $w;
    }

    setProps(props) {
        $w.props(props);
    }

    setWarmupData(data) {
        this.warmupData = data;
    }

    async pageReady() {
        await this.init();
        return this.warmupData;
    }
}

class WeatherController extends SantaController {
    constructor(config) {
        super(config);
    }

    getWeather(city) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(citiesWeather[city]), 1000)
        });
    }

    setWeather(weather) {

    }

    async onCityChanged(newCity) {
        const weather = await this.getProducts(newCity)
        this.setProps({
            city: newCity,
            weather: newWeather
        }))
    }

    async getInitialProps() {
        const city = 'Tel Aviv';
        const weather = await this.getWeather(city);
        return {city, weather};
    }

    async init() {
        this.setProps({
            onCityChanged: this.onCityChanged
        });
    }

    exports() {
        return {
            setWeather: this.setWeather
        };
    }

}

export const controllerByType = {
    [WEATHER_WIDGET_ID]: WeatherController
};


/**
 * @param controllerConfigs: controllerConfig[]
 * @returns Controller[] | Promise<Controller>[]
 */
function createControllers(controllerConfigs) {
    return controllerConfigs.map(config => new controllerByType[config.type](config));
}

async function initAppForPage(
    store,
    params,
    api,
  ) {
    if (!store) {
        store = await createStore();
    }
    return store;
}

module.exports = {
    initAppForPage,
    createControllers
};
