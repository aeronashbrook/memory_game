import React, { Component } from 'react';
import './App.css';
import Div from "./components/Div"
import Score from "./components/Score"
import images from "./boxes.json"

class App extends Component {
    state = {
      count: 0,
      topScore: 0,
      images,
      picks: [],
      prompt: "Click a box to start the game"
    };
    
  shuffle = () => {
    const boxes = this.state.images
    let amount = boxes.length;
    let temp;
    let index;

    while (amount > 0) {
        index = Math.floor(Math.random() * amount);
        amount--;
        temp = boxes[amount];
        boxes[amount] = boxes[index];
        boxes[index] = temp;
    }
    this.setState({ images })
    }
  handleClick = id => {
      
    if (!this.state.picks.includes(id)) {
        this.state.picks.push(id);
        this.setState({ count: this.state.count + 1, prompt: "Good Job!" }, () => {
        if (this.state.count > this.state.topScore) {
            this.setState({ topScore: this.state.count }, () => {
            if (this.state.count === 12) {
                this.setState({ count: 0, picks: [] });
            }
            })
        }
        });
        this.shuffle();
    }
    else {

        this.setState({ count: 0, picks: [], prompt: "Sorry, you already clicked that one" });
        this.shuffle();
    }

    console.log(this.state.picks)

        }
        render() {
            return (
              <div>
                <Score count={this.state.count} topscore={this.state.topScore} prompt={this.state.prompt} />
                <div className="Wrapper">
                    {this.state.images.map(box => (
                      <Div image={box.image} id={box.id} handleClick={this.handleClick} />
                    ))}
                </div>
              </div>
            );
          }

  
}

export default App;
