import {Component} from 'react'
import {connect} from 'react-redux'
import {Title} from '../components/Title';
import {InputField} from '../components/Input';
import {Card} from '../components/Card';
import {Loading} from '../components/Loading';
import {ErrorText} from '../components/Error';
import {getLocation, getFetchData, handleInputChange, clearInput} from '../store/actions/actions';


class App extends Component{

  componentDidMount(){
      const getLocation = new Promise((res,rej) => {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition((pos) => {
                  res(pos.coords);
              }, (error) => {
                  if(error.code === error.PERMISSION_DENIED) {
                      console.error("Can't find the current location");
                  }
              });
          }
      });

      getLocation.then(pos => {
        this.props.getLocation(pos);
      });
  }

  getTemperature(main){
    return Math.round(main.temp);
  }

  getCurrentDate(dt){
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return{
          daysOfWeek: daysOfWeek[new Date(dt * 1000).getDay()],
          month: months[new Date(dt * 1000).getMonth()],
          date: new Date(dt * 1000).getDate()
      }
  }

  changeCity(city){
     this.props.fetchData(city);
     this.props.clearInput();
  }


  render(){
    const {main, weather, name, dt, isFetchedData, isLoadingData, error} = this.props.weather;
    const {locationSearchText} = this.props.search;
    const {handleInputChange} = this.props;
console.log()
    return (
        <div className="container-fluid">
          <Title />
          <InputField
              inputValue={locationSearchText}
              onChange={handleInputChange}
              changeCity={this.changeCity.bind(this)}
          />

          {
              isLoadingData ? <Loading /> :
              !isFetchedData ? <ErrorText error={error} /> :
              <Card
                  weatherMain={main}
                  weather={weather}
                  temp={this.getTemperature(main)}
                  date={this.getCurrentDate(dt)}
                  city={name}
                  error={error}

              />
          }

        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather,
  search: state.search
});

const mapDispatchToProps = dispatch => {
  return{
    getLocation: pos => dispatch(getLocation(pos)),
    fetchData: city => dispatch(getFetchData(city)),
    handleInputChange: ({target:{value}}) => dispatch(handleInputChange(value)),
    clearInput: ()=>dispatch(clearInput())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
