import React, { Component } from 'react';
import DogItem from './DogItem';

class Dogs extends Component {
  deleteDog(name) {
    this.props.onDelete(name);
  }

  render() {
    let dogItem;
    if(this.props.dogs) {
      dogItem = this.props.dogs.map(dog => {//dogs es una propiedad que ha sido asignada 
        //desde el padre de estas clases que es la clase App
        return (//onDelete es una propiedad que se asigna a la clase DogItem
          //en onDelete se le puede agregar o no el argumento, lo probé y funciono en 
          //los dos casos
          //<DogItem onDelete={this.deleteDog.bind(this , this.props.dogs.name)}
          <DogItem onDelete={this.deleteDog.bind(this)}
           key={dog.name} dog={dog} />
        );
      });
    }
    return (
      <div className="Dogs">
        <h1>Good Dogs</h1>
        {dogItem}
      </div>
    );
  }
}

export default Dogs;