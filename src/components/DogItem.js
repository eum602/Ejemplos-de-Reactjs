import React, { Component } from 'react';

class DogItem extends Component {
  deleteDog(name) {
    this.props.onDelete(name);//se llama al elemento onDelete de DogItem que fue asignado
    //en la clase Dogs
  }

  render() {//el tag strong define un texto en negrita
    return (
      <ul className="Dog">
        <img src={this.props.dog.image} href={this.props.dog.image} role="presentation" 
        width="100" height="100"></img>
        <br></br>
        
        <strong>{this.props.dog.name}</strong> : {this.props.dog.breed} 


        <a href="#"
        //href="#": le estas diciendo al link que vaya a un ancla vacía... que omita 
        //el enlace del href en pocas palabras,  para que funcione solo el onclikc en la
        //sentencia que tienes allí de javascript 
        onClick={this.deleteDog.bind(this, this.props.dog.name)}> X </a>
        <br></br>
      </ul>//bind enlaza al evento onClick con la funcion deleteDog adicional a eso
      //se le envia el argumento de entrada this.props.dogs.name puesto que la funcion 
      //deleteDog necesita ese argumento.
    );
  }
}

export default DogItem;