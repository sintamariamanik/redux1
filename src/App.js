import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Notes from './Notes';

class App extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.props.dispatch({ type:'INCREMENT'});
    }

    incrementdua = () => {
        this.props.dispatch({ type:'INCREMENTDUA', plus: 2});
    }

    decrement = () => {
        this.props.dispatch({ type:'DECREMENT'});
    }

  render() {
    return (
        <div className="App">
            <div>
                <Notes />
                <button onClick = {() => this.decrement()}>
                    Kurang
                </button>
                <span></span>
                <button onClick = {() => this.increment()}>
                    Tambah
                </button>
                <span></span>
                <button onClick = {() => this.incrementdua()}>
                    Tambah + 2
                </button>
            </div>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
    return{
        count: state.count
    }
}
export default connect(mapStateToProps)(App);
