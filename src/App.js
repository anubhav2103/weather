import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      articles : []
    }
  }
  componentDidMount(){
    fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-13&sortBy=publishedAt&apiKey=e61ed2d9c64744d39d1031e4d60c5a62')
  .then(response => response.json())
  .then((myJson) => {
    this.setState({
      articles:myJson.articles
    });

  });
  }
  
  render(){
    console.log(this.state);
    return(
      <div className="app">
        {this.state.articles.map((item, index)=>{
          return(
            <div>
         <h2>
           {item.title}
         </h2>
      
         <img src={item.urlToImage} style={{width : "50vh" }}/>
         <a href={item.url}>
           Read more
         </a>
         <p>
           {item.content}
         </p>
         </div>
          );

    })}

        
        

      </div>
    );
  }
}

export default App;
