import React from 'react';
import { asset, Text, View, VrButton, Model, StyleSheet } from 'react-vr';

export default class DescriptionBox extends React.Component {

    constructor() {
        super();
        this.state = {
            rotation: 0,
            selectedPlanetName: 'Earth',
            selectedPlanetDescription: "Earth is the planet we live on and is the third planet from the Sun. Earth is the only planet in our solar system that has a large amount of liquid water. Because of this, people sometimes call it blue planet. ",
            modelName: "sphere.obj",
            textureName: "earth.png",
            selectedPlanetScale: [0.9, 0.9, 0.9]
        }
    }

    componentDidMount() {
        this.rotate()
    }

    rotate() {
        this.setState({
            rotation: this.state.rotation + 0.3,
          });
      
          if (this.state.rotation > 360) {
            this.setState({rotation: 1});
          }
      
          requestAnimationFrame(this.rotate.bind(this));
    }

    changePlanet(selection) {
        let planetName;
        let planetDescription;
        let planetTextureName;
        let planetModelName;
        let planetScale;
        
        switch(selection) {
            case 1:
                planetName = "Mercury";
                planetDescription = "Mercury is the closest planet to the sun and the eighth largest. It has a diameter of 4,880 kilometers. Mercury has the widest temperature extremes in the solar system ranging from 90 degrees Kelvin to 700 degrees Kelvin. Mercury has a thick iron core and a thinner outer crust of rocky material.",
                planetTextureName = "mercury.jpg",
                planetModelName = "sphere.obj",
                planetScale = [0.4, 0.4, 0.4];
                break;

            case 2:
                planetName = "Venus";
                planetDescription = "Venus is the second planet from the Sun, and is Earth's closest neighbor in the solar system. Venus is the brightest object in the sky after the Sun and the Moon, and sometimes looks like a bright star in the morning or evening sky. The planet is a little smaller than Earth, and is similar to Earth inside.",
                planetModelName = "sphere.obj",
                planetTextureName = "venus.jpg",
                planetScale = [0.7, 0.7, 0.7];
                break;

            case 3:
                planetName = "Earth";
                planetDescription = "Earth is the planet we live on and is the third planet from the Sun. Earth is the only planet in our solar system that has a large amount of liquid water. Because of this, people sometimes call it blue planet. ",
                planetTextureName = "earth.png",
                planetModelName = "sphere.obj",
                planetScale = [0.9, 0.9, 0.9];
                break;

            case 4:
                planetName = "Mars";
                planetDescription = "Mars is sometimes called the Red Planet. It's red because of rusty iron in the ground. Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons, and weather. It has a very thin atmosphere made of carbon dioxide, nitrogen, and argon.",
                planetTextureName = "mars.jpg",
                planetModelName = "sphere.obj",
                planetScale = [0.6, 0.6, 0.6];
                break;

            case 5:
                planetName = "Jupiter";
                planetDescription = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun. Jupiter is the third-brightest natural object in the Earth's night sky after the Moon and Venus. It has been observed since pre-historic times and is named after the Roman god Jupiter, the king of the gods, because of its observed size.",
                planetTextureName = "jupiter.jpg",
                planetModelName = "sphere.obj",
                planetScale = [1.2, 1.2, 1.2];
                break;

            case 6:
                planetName = "Saturn";
                planetDescription = "Saturn is a gas giant made up mostly of hydrogen and helium. Saturn's volume is greater than 760 Earths, and it is the second most massive planet in the solar system, about 95 times Earth's mass. The Ringed Planet is the least dense of all the planets, and is the only one less dense than water.",
                planetTextureName = "saturn.jpg",
                planetModelName = "saturn.obj",
                planetScale = [1.3, 1.3, 1.3];
                break;

            case 7:
                planetName = "Uranus";
                planetDescription = "Uranus is made of water, methane, and ammonia fluids above a small rocky center. Its atmosphere is made of hydrogen and helium like Jupiter and Saturn, but it also has methane. The methane makes Uranus blue. Uranus also has faint rings. The inner rings are narrow and dark.",
                planetTextureName = "uranus.jpg",
                planetModelName = "sphere.obj",
                planetScale = [1.1, 1.1, 1.1];
                break;

            case 8:
                planetName = "Neptune";
                planetDescription = "Neptune is dark, cold, and very windy. It's the last of the planets in our solar system. It's more than 30 times as far from the Sun as Earth is. Neptune is very similar to Uranus.",
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
            buttonText: {
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
                                {rotateY: this.state.rotation}
                            ]
                        }}
                    />
                </View>
    
                <View>
    
                    <Text style={{
                        fontSize: 0.3,
                        textAlign: 'center'
                    }}>
                        {this.state.selectedPlanetName}
                    </Text>
    
                    <Text style={{
                        margin: 0.1,
                        fontSize: 0.2,
                        width: 2
                    }}>
                        {this.state.selectedPlanetDescription}
                    </Text>
                </View>
    
                <View style={{
                    flexDirection: 'column',
                    height: 4,
                    justifyContent: 'space-between'
                }}>
                    <VrButton onClick={() => this.changePlanet(1)}>
                        <Text style={styles.buttonText}>Mercury</Text>
                    </VrButton>
    
                    <VrButton onClick={() => this.changePlanet(2)}>
                        <Text style={styles.buttonText}>Venus</Text>
                    </VrButton>
    
                    <VrButton onClick={() => this.changePlanet(3)}>
                        <Text style={styles.buttonText}>Earth</Text>
                    </VrButton>
    
                    <VrButton onClick={() => this.changePlanet(4)}>
                        <Text style={styles.buttonText}>Mars</Text>
                    </VrButton>
    
                    <VrButton onClick={() => this.changePlanet(5)}>
                        <Text style={styles.buttonText}>Jupiter</Text>
                    </VrButton>
    
                    <VrButton onClick={() => this.changePlanet(6)}>
                        <Text style={styles.buttonText}>Saturn</Text>
                    </VrButton>
    
                    <VrButton onClick={() => this.changePlanet(7)}>
                        <Text style={styles.buttonText}>Uranus</Text>
                    </VrButton>
    
                    <VrButton onClick={() => this.changePlanet(8)}>
                        <Text style={styles.buttonText}>Neptune</Text>
                    </VrButton>
    
                </View>
            </View>
        );
        
    }
    
};
