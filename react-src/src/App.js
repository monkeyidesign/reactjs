import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        };
    }

    componentDidMount() {
       return  fetch("http://localhost/wp-react/wp-json/wp/v2/pages/")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    data: result
                })
            })
           .catch((error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
           })
    }

    render() {
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">
                    {this.state.data.map((item, i)=>(<p key={i}>{item.title.rendered}</p>) )}
                </h1>
              </header>
            </div>
        );

    }
}
export default App;
