import React from 'react';
import { AppRegistry, asset, Pano, Text, View,Model,Animated,PointLight,VrButton} from 'react-vr';
import Descriptions from './components/DescriptionBox';

export default class SolarSystem extends React.Component {
  constructor() {
    super();
    this.state = {
      rotation: 0,
      antirotation:360,
      angle1:30,
      angle2: 50,
      angle3: 70,
      angle4: 90,
      angle5: 110,
      angle6: 130,
      angle7: 150,
      angle8: 190,
    }
}

componentDidMount() {
    this.rotate();
}

rotate(){

this.setState({
      rotation: this.state.rotation + 0.3,
      antirotation: this.state.antirotation - 1,
      angle1: this.state.angle1 + .0050,
      angle2: this.state.angle2 + 0.0039,
      angle3: this.state.angle3 + 0.0035,
      angle4: this.state.angle4 + 0.0029,
      angle5: this.state.angle5 + 0.0025,
      angle6: this.state.angle6 + 0.0020,
      angle7: this.state.angle7 + 0.0018,
      angle8: this.state.angle8 + 0.0017,
    });

    if(this.state.rotation > 360)
    {
      this.setState({rotation: 1});
    }

    if(this.state.antirotation < 1)
    {
      this.setState({antirotation: 360});
    }

    if(this.state.angle1 > 360)
    {
      this.setState({angle1: 1});
    }

    if(this.state.angle2 > 360)
    {
      this.setState({angle2: 1});
    }

    if(this.state.angle3 > 360)
    {
      this.setState({angle3: 1});
    }

    if(this.state.angle4 > 360)
    {
      this.setState({angle4: 1});
    }

    if(this.state.angle5 > 360)
    {
      this.setState({angle5: 1});
    }

    if(this.state.angle5 > 360)
    {
      this.setState({angle5: 1});
    }

    if(this.state.angle5 > 360)
    {
      this.setState({angle5: 1});
    }

    if(this.state.angle6 > 360)
    {
      this.setState({angle6: 1});
    }

    if(this.state.angle7 > 360)
    {
      this.setState({angle7: 1});
    }

    if(this.state.angle8 > 360)
    {
      this.setState({angle8: 1});
    }
     requestAnimationFrame(this.rotate.bind(this)); 
}
  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <PointLight intensity={1} style ={{color: 'white', transform: [{translate: [0, 0, 0]}]}} />
        <Model
          source={{
            obj: asset('sphere.obj')
          }}
          texture={asset('sun.jpg')}
          style={{
            transform: [
              {translate: [-40, 0, 0]},
              {scale: [5, 5, 5]},
              {rotateY: this.state.rotation}
            ]
          }}
          />  

          <Model
          source={{
            obj: asset('sphere.obj')
          }}
          texture={asset('mercury.jpg')}
          lit
          style={{
            transform: [
              {translate: [70*Math.cos(this.state.angle1), 0 , 60*Math.sin(this.state.angle1)]},
              {scale: [0.8, 0.8, 0.8]},
              {rotateY: this.state.rotation}
            ]
          }}
        />

        <Model
       source={{
            obj: asset('sphere.obj')
          }}
          texture={asset('venus.jpg')}
          style={{
            transform: [
              {translate: [90*Math.cos(this.state.angle2), 0 , 70*Math.sin(this.state.angle2)]},
              {scale: [1.1, 1.1, 1.1]},
              {rotateY:this.state.antirotation}
            ]
          }}
        />

        <Model
          source={{
            obj: asset('sphere.obj')
          }}
          texture={asset('earth.png')}
          lit
          style={{
            transform: [
              {translate: [110*Math.cos(this.state.angle3), 0, 90* Math.sin(this.state.angle3)]},
              {scale: [1.4, 1.4, 1.4]},
              {rotateY: this.state.rotation}
            ]
          }}
        />

        <Model
        source={{
          obj: asset('sphere.obj')
        }}
        texture={asset('mars.jpg')}
        lit
        style={{
          transform: [
            {translate: [130*Math.cos(this.state.angle4), 0, 110* Math.sin(this.state.angle4)]},
            {scale: [0.9, 0.9, 0.9]},
            {rotateY: this.state.rotation}
          ]
        }}
        />

        <Model
          source={{
            obj: asset('sphere.obj')
          }}
          texture={asset('jupiter.jpg')}
          lit
          style={{
            transform: [
              {translate: [150*Math.cos(this.state.angle5), 0, 130* Math.sin(this.state.angle5)]},
              {scale: [4.5, 4.5, 4.5]},
              {rotateY: this.state.rotation}
            ]
          }}
        />

        <Model
          source={{
            obj: asset('Saturn.obj')
          }}
          texture={asset('saturn.jpg')}
          lit
          style={{
            transform: [
              {translate: [170*Math.cos(this.state.angle6), 0, 150* Math.sin(this.state.angle6)]},
              {scale: [3.5, 3.5, 3.5]},
              {rotateX: -20},
              {rotateY: this.state.rotation}
            ]
          }}
        />

        <Model
          source={{
            obj: asset('sphere.obj')
          }}
          texture={asset('uranus.jpg')}
          lit
          style={{
            transform: [
              {translate: [190*Math.cos(this.state.angle7), 0, 170* Math.sin(this.state.angle7)]},
              {scale: [2.5, 2.5, 2.5]},
              {rotateZ:this.state.antirotation}
            ]
          }}
        />

        <Model
          source={{
            obj: asset('sphere.obj')
          }}
          texture={asset('neptune.jpg')}
          lit
          style={{
            transform: [
              {translate: [210*Math.cos(this.state.angle8), 0, 190* Math.sin(this.state.angle8)]},
              {scale: [2, 2, 2]},
              {rotateY: this.state.rotation},
            ]
          }}
        />
        <Descriptions/>
      </View>
    );
  }
};

AppRegistry.registerComponent('SolarSystem', () => SolarSystem);
