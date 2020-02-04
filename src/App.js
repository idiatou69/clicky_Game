import React from "react";

import Header from "./components/Header";

import Footer from "./components/footer"


class App extends React.Component {
  state = {

    score: 0,
    topScore: 0,
    pictures: [{ name: 0, image: require('./pictures/download.jpg') }, { name: 1, image: require('./pictures/download (1).jpg') }, { name: 2, image: require('./pictures/download (2).jpg') }, { name: 3, image: require('./pictures/download (3).jpg') }, { name: 4, image: require('./pictures/download (4).jpg') }, { name: 5, image: require('./pictures/download (5).jpg') }, { name: 6, image: require('./pictures/download (6).jpg') }, { name: 7, image: require('./pictures/download (7).jpg') }],
    clickedPictures: []
    
    
  }

  handleClick = (name) => {
    this.state.pictures.sort((a, b) => Math.random() - .5)
    if (this.state.clickedPictures.includes(name)) {
      if (this.state.score > this.state.topScore) {
        this.setState({ score: 0, clickedPictures: [], topScore: this.state.score })
      }
      else {
        this.setState({ score: 0, clickedPictures: [] })
      }

    }
    else {
      this.state.clickedPictures.push(name)
      this.setState({ score: this.state.score + 1 })

    }

  }
  render() {
    return (
      <div>
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div class="container text-center">
          {this.state.pictures.map(pic =>
            <img class="pic" src={pic.image} onClick={() => this.handleClick(pic.name)} />
          )}
        </div>
        <Footer

        />
      </div>
    )
  };

}

export default App;
