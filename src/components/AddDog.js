import React, { Component } from 'react';

class AddDog extends Component {
  constructor() {
    super();
    this.state = {
      newDog:{}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e) {//aqui un link para saber como funciona el ref
    //https://hackernoon.com/refs-in-react-all-you-need-to-know-fb9c9e2aeb81
    if(this.refs.name.value === '') {
      alert('Title is required');
    } else if (this.refs.image.value === '') {
        alert('Image link is required');
    } else if (this.refs.breed.value === '') {
          alert('Breed is required');
    } else {
      this.setState({newDog:{
        name: this.refs.name.value,
        breed: this.refs.breed.value,
        image: this.refs.image.value
      }}, function() {
        //console.log(this.state);
        this.props.addDog(this.state.newDog);
      });
    }
    e.preventDefault();//se previene que al hacer submit en el form se recargue la pagina
  }

  render() {
    return (//el form hace que el boton que se ha creado abajo recarge la pagina,
            //ademas todo es un conjunto ahora
      <div>
        <h3 id="addDog">Add Dog</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Name</label><br />
            <input id="dogName" type="text" ref="name" />
          </div>
          <div>
            <label>Image</label><br />
            <input id="imageURL" type="text" ref="image" />
          </div>
          <div>
            <label>Breed</label><br />
            <input id="dogBreed" type="text" ref="breed" />
          </div>
          <br />
          <input id="submitButton" type="submit" value="Submit" />  
          <br />
        </form>
      </div>
    );
  }
}

export default AddDog;