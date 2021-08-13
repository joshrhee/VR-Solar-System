import React from 'react';
import {asset, Text, View, VrButton, Model, StyleSheet} from 'react-vr';

export default class Descriptions extends React.Component {
constructor() {
    super();
    this.state = {
      rotation: 0,
      selectedPlanetName: "Earth",
      selectedPlanetDescription: "Earth is the planet we live on and is the third planet from the Sun. Earth is the only planet in our solar system that has a large amount of liquid water. Because of this, people sometimes call it blue planet.",
      modelName: "sphere.obj",
      textureName: "earth.png",
      selectedPlanetScale: [0.9, 0.9, 0.9],
      rotateSaturn: 0
  }
}

componentDidMount() {
    this.rotate();
}

rotate(){

	this.setState({
      rotation: this.state.rotation + 0.3,
  })

      if(this.state.rotation > 360)
    {
      this.setState({rotation: 1});
    }
    
    requestAnimationFrame(this.rotate.bind(this)); 
}

  changePlanet (selection) {
    let planetName;
    let planetDescription;
    let planetTextureName;
    let planetModelName;
    let planetScale;

    switch(selection) {
      case 1:
      planetName = "Mercury";
      planetDescription = "Mercury is the smallest planet in the Solar System.  It makes one trip around the Sun once every 87.969 days which is the shortest of all planets in the Solar System. Even though Mercury is the closest planet to the Sun, it is not the warmest." ;
      planetTextureName = "mercury.jpg",
      planetModelName = "sphere.obj",
      planetScale = [0.4, 0.4, 0.4];
      break;
      case 2:
      planetName = "Venus";
      planetDescription = "Venus is the second planet from the Sun. The year length of Venus is 225 Earth days. It has the longest rotation period of any planet in the Solar System and rotates in the opposite direction to most other planets. It does not have any natural satellites. The pressure on Venus' surface is 92 times that of Earth." ;
      planetModelName = "sphere.obj",
      planetTextureName = "venus.jpg",
      planetScale = [0.7, 0.7, 0.7];
      break;

      case 3:
      planetName = "Earth";
      planetDescription = "Earth is the planet we live on and is the third planet from the Sun. Earth is the only planet in our solar system that has a large amount of liquid water. Because of this, people sometimes call it blue planet.",
      planetTextureName = "earth.png",
      planetModelName = "sphere.obj",
      planetScale = [0.9, 0.9, 0.9];
      break;
      case 4:
      planetName = "Mars";
      planetDescription = "Mars is the second-smallest planet in the Solar System after Mercury. It has the largest volcano in the Solar System. The temperatures on Mars are colder than on Earth, because it is farther away from the Sun and has less air to keep heat in.";
      planetTextureName = "mars.jpg",
      planetModelName = "sphere.obj",
      planetScale = [0.6, 0.6, 0.6];
      break;
      case 5:
      planetName = "Jupiter";
      planetDescription = "Jupiter is the fifth planet from the Sun and is the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter can be seen even without the use of telescope.";
      planetTextureName = "jupiter.jpg",
      planetModelName = "sphere.obj",
      planetScale = [1.2, 1.2, 1.2];
      break;
      case 6:
      planetName = "Saturn";
      planetDescription = "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. There is also a very large system of rings around Saturn. These rings are made of ice with smaller amounts of rocks and dust. Saturn takes 29.6 Earth years to revolve around the Sun.";
      planetTextureName = "saturn.jpg",
      planetModelName = "Saturn.obj",
      planetScale = [1.3, 1.3, 1.3];
      this.setState({rotateSaturn: 30});
      break;
      case 7:
      planetName = "Uranus";
      planetDescription = "Uranus is the seventh planet from the Sun. The temperature on Uranus is −197 degrees C. Uranus completes its orbit around the Sun in 84 earth years. It completes a spin around itself in 17 hours and 14 minutes. The planet is tilted on its axis so much that it is sideways.";
      planetTextureName = "uranus.jpg"
      planetModelName = "sphere.obj",
      planetScale = [1.1, 1.1, 1.1];
      break;
      case 8:
      planetName = "Neptune";
      planetDescription = "Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter. It also contains small amounts of methane which makes the planet appear blue.";
      planetTextureName = "neptune.jpg",
      planetModelName = "sphere.obj",
      planetScale = [1, 1, 1];
      break;
    }

    this.setState({ selectedPlanetName: planetName});
    this.setState({ selectedPlanetDescription: planetDescription});
    this.setState({ textureName: planetTextureName});
    this.setState({ modelName: planetModelName});
    this.setState({ selectedPlanetScale: planetScale});
  }
render() {

 	const styles = StyleSheet.create({

 		buttonText:{
 			margin: 0,
        fontSize: 0.3,
        textAlign: 'center',
        backgroundColor: '#CF3C7E',
 		}
 	})
   return (
     <View style={{
        transform: [
          {translate: [0, -3, 0]},
          {rotateX: -90}
        ],
		flexDirection: 'row'
      }}>

     	<View>

     	<Model
            source={{
              obj: asset(this.state.modelName)
            }}
            texture={asset(this.state.textureName)}
            style={{
              transform: [
                {translate: [-4, -2, -5]},
                {scale: this.state.selectedPlanetScale},
                {rotateX: this.state.rotateSaturn},
                {rotateY: this.state.rotation}
              ]
            }}
          />

		</View>


		<View>


		<Text style={{
              fontSize: 0.3,
              textAlign: 'center'
            }}>{this.state.selectedPlanetName}</Text>

            <Text style={{
              margin: 0.1,
              fontSize: 0.2,
              width:2
            }}> {this.state.selectedPlanetDescription} </Text>
		</View>


		<View style={{
            flexDirection: 'column',
            height: 4,
            justifyContent:'space-between'}}>


		<VrButton onClick={() => this.changePlanet(1)}>
                <Text style = {styles.buttonText}>Mercury</Text>
            </VrButton>

            <VrButton onClick={() => this.changePlanet(2)}>
                <Text style = {styles.buttonText}>Venus</Text>
            </VrButton>

            <VrButton onClick={() => this.changePlanet(3)}>
                <Text style = {styles.buttonText}>Earth</Text>
            </VrButton>

            <VrButton onClick={() => this.changePlanet(4)}>
                <Text style = {styles.buttonText}>Mars</Text>
            </VrButton>

            <VrButton onClick={() => this.changePlanet(5)}>
                <Text style = {styles.buttonText}>Jupiter</Text>
            </VrButton>

            <VrButton onClick={() => this.changePlanet(6)}>
                <Text style = {styles.buttonText}>Saturn</Text>
            </VrButton>

            <VrButton onClick={() => this.changePlanet(7)}>
                <Text style = {styles.buttonText}>Uranus</Text>
            </VrButton>

            <VrButton onClick={() => this.changePlanet(8)}>
                <Text style = {styles.buttonText}>Neptune</Text>
            </VrButton>
		</View>

     </View>
    )
  }
} 