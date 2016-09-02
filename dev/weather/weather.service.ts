import {Injectable} from "angular2/core";
import {WEATHER_ITEMS} from "./weather.data";
import {Observable} from "rxjs/Observable";
import {Http} from "angular2/http";
import 'rxjs/Rx';
@Injectable()
export class WeatherService{

  constructor (private _http: Http) {}

  getWeatherItems(){
    return WEATHER_ITEMS;
  }
  searchWeatherData(cityName: string): Observable<any>{
    return this._http.get('api.openweathermap.org/data/2.5/weather?q=' + cityName + 'APPID=90a335d103bc0c34332a9b97640be0ec&metric');
  }

}
