import {StoreContext} from '@oracle-cx-commerce/react-ui/contexts';
import {getWeatherQuery} from '../../selectors';
import {connect} from '@oracle-cx-commerce/react-components/provider';

import {Tab} from '@oracle-cx-commerce/react-components/tabs';
import {TabContainer} from '@oracle-cx-commerce/react-components/tabs';

import React, { useContext, useState, useEffect, useRef } from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';

import {t} from '@oracle-cx-commerce/utils/generic';

import css from './styles.css';

const weatherWidget = props => {
  const weatherDataAction = props.weather && props.weather.weather ?
  {
    description: props.weather.weather[0].description, 
    icon: props.weather.weather[0].icon,
    feels_like:props.weather.main.feels_like, 
    temp: props.weather.main.temp,
    temp_min:props.weather.main.temp_min,
    temp_max:props.weather.main.temp_max,
    error: false 
  } : {error: true};
  var [weatherDataFetch, setWeatherDataFetch] = useState({error: true});
  var textCityFetch = useRef(); 
  var textCountryFetch = useRef();

  const getWeatherFetch = () => {
    console.log('getWeatherFetch');
    fetch(`https://asbx47c1dev-admin.occa.ocs.oraclecloud.com/ccstorex/custom/v1/weatherProxy/${textCountryFetch.current.value}/${textCityFetch.current.value}`)
    .then(response => response.json()).then(data => {
        const weatherData = data.cod == 200 ? {description: data.weather[0].description, icon: data.weather[0].icon,feels_like:data.main.feels_like, temp: data.main.temp,temp_min:data.main.temp_min,temp_max:data.main.temp_max, error: false } : {error: true};
        setWeatherDataFetch(weatherData);
      })
        .catch(err => {
          console.log('err: ', err);
        })
        .finally(() => {console.log('end')});
  }

  const store = useContext(StoreContext);
  var textCityAction = useRef(); 
  var textCountryAction = useRef();
  const getWeatherAction = function(){
      const city = textCityAction.current.value;
      const country = textCountryAction.current.value;
      store.action('getWeatherAction', {city,country});
  }

  return (
    <Styled id="weatherWidget" css={css}>
      <div className="weatherWidget"> Base Component weatherWidget: {t('Hello')}</div>
            <TabContainer>
      <Tab header="Weather Fetch" className="weather__TabHeader">
          <div className="weather">
                      <div className="weather__container">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <label className="weather__label">Weather</label><br/>
                        <input ref={textCityFetch} className="weather__inputCity" type="text" placeholder="Cidade" /><br/>
                        <input ref={textCountryFetch} className="weather__inputCountry" type="text" placeholder="País" maxLength={2} /><br/>
                        <button className="weather__button" onClick={getWeatherFetch}>
                          Get Weather
                        </button>
                      </div>
                    </td>
                    <td>
                      {!weatherDataFetch.error && (
                      <div>
                        <table >
                          <tbody>
                              <tr>
                                <td className="weather__td">{weatherDataFetch.description}</td>
                                <td className="weather__td"><img src={`http://openweathermap.org/img/wn/${weatherDataFetch.icon}.png`} alt="BigCo Inc. logo"/></td>
                                <td className="weather__td">
                                  <table>
                                    <tbody>
                                      <tr><td>Temp-min: {weatherDataFetch.temp_min}</td></tr>
                                      <tr><td>Temp-max: {weatherDataFetch.temp_max}</td></tr>
                                      <tr><td>Temp: {weatherDataFetch.temp}</td></tr>
                                      <tr><td>Feels like: {weatherDataFetch.feels_like}</td></tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                          </tbody>
                        </table>
                      </div>
                      )}
                      </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tab>
        <Tab header="Weather Action" className="weather__TabHeader">
          <div className="weather"> 
            <div className="weather__container">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <label className="weather__label">Weather</label><br/>
                        <input ref={textCityAction} className="weather__inputCity" type="text" placeholder="Cidade" defaultValue={props.initialCity} /><br/>
                        <input ref={textCountryAction} className="weather__inputCountry" type="text" placeholder="País" maxLength={2} defaultValue={props.initialCountry}/><br/>
                        <button className="weather__button" onClick={getWeatherAction}>
                          Get Weather
                        </button>
                      </div>
                    </td>
                    <td>
                                          {!weatherDataAction.error && (
                      <div>
                          <table >
                            <tbody>
                              <tr>
                                <td className="weather__td">{weatherDataAction.description}</td>
                                <td className="weather__td"><img src={`http://openweathermap.org/img/wn/${weatherDataAction.icon}.png`} alt="BigCo Inc. logo"/></td>
                                <td className="weather__td">
                                  <table>
                                    <tbody>
                                      <tr><td>Temp-min: {weatherDataAction.temp_min}</td></tr>
                                      <tr><td>Temp-max: {weatherDataAction.temp_max}</td></tr>
                                      <tr><td>Temp: {weatherDataAction.temp}</td></tr>
                                      <tr><td>Feels like: {weatherDataAction.feels_like}</td></tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                      </div>
                      )}

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tab>
      </TabContainer>
    </Styled>
  );
};

export default connect(getWeatherQuery)(weatherWidget);
