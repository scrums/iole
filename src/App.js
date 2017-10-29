import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import rd3 from 'react-d3-library';
import node from 'd3file';
const RD3Component = rd3.Component;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className = "Description">
        </div>
        <div classNamme = "Graph">
        var node = document.createElement('div');
        var diameter = 960,
          format = d3.format(",d"),
          color = d3.scale.category20c();

        var bubble = d3.layout.pack()
          .sort(null)
          .size([diameter, diameter])
          .padding(1.5);

        var svg = d3.select('node').append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .attr("class", "bubble");

        d3.json("flare.json", function(error, root) {
        //  if (error) throw error;

        var bubbles = svg.selectAll(".node")
            .data(bubble.nodes(classes(flare))
            .filter(function(d) { return !d.children; }))
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

            class my_First_React_D3_Library_Component extends React.Component {

            constructor(props) {
              super(props);
              this.state = {d3: ''}
            }

            componentDidMount() {
              this.setState({d3: node});
            }

            render() {
              return (
                <div>
                  <RD3Component data={this.state.d3} />
                </div>
              )
            }
      </div>
    );
  }
}

export default App;
