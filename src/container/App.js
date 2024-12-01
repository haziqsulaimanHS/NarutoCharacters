import React, { Component } from "react";
import './App.css';
import CardList from "../component/CardList";
import SearchBox from "../component/SearchBox";
import NarutoCharacters from "../assets/NarutoCharacters.png";
import Scroll from "../component/Scroll";

class App extends Component {
  constructor(){
    super()
    this.state = {
      characters: [],
      searchField:''
    }
  }

  componentDidMount() {
    fetch("https://narutodb.xyz/api/character?page=1&limit=1000")
      .then((response) => response.json())
      .then((data) => {
        const charactersWithImages = data.characters.filter(
          (character) => character.images && character.images.length > 0
        );
        const formattedCharacters = charactersWithImages.map((character) => ({
          id: character.id,
          name: character.name,
          power: character.rank?.ninjaRank?.["Part I"] || "Unknown",
          image: this.isValidUrl(character.images[0]) 
            ? character.images[0] 
            : "https://via.placeholder.com/200", // Default placeholder image
        }));
        this.setState({ characters: formattedCharacters });
      })
      .catch((error) => console.error("Error fetching characters:", error));
  }
  
  // Helper function to validate URLs
  isValidUrl(url) {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
    } catch (e) {
      return false;
    }
  }
  
  

onSearchChange = (event) =>{
  this.setState({searchField: event.target.value})
}

  render(){ 
    const filteredCharacters = this.state.characters.filter(character => {
      return character.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
  return (
    <div className="tc">
      {/* <h1>Naruto    Characters</h1> */}
      <div className="naruto-header">
      <img className= "NarutoCharacters" src={NarutoCharacters} alt="Naruto Characters"/>
      <SearchBox searchChange={this.onSearchChange}/>
      </div>
      <Scroll>
      <CardList characters={filteredCharacters}/>
      </Scroll>
    </div>
  );
}
}

export default App;
