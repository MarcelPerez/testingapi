import { Component } from "react";

class App extends Component {
  componentDidMount(){
    fetch('http://10.147.18.174:7111/api/Cars')    
    .then(response => response.json())
    .then(response=>{console.log(response)});
  }

  render() {
    return <div><iframe src="http://10.147.18.139:3000/d-solo/D1oAjtJVk/new-dashboard?orgId=1&from=1676464004786&to=1676485604786&panelId=2" title=""
    width="1000" height="752"></iframe></div>;
  }
}

export default App;
