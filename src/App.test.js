import React from 'react';//importando React desde la libreria de react
import ReactDOM from 'react-dom';
import { expect } from 'chai'; //importando la palabra clave "expect" desde chai
import { mount , shallow } from 'enzyme';
import App from './App'; //importando la aplicacion App.js la cual será testeada



//Escribiendo el test mocha
describe("Test suite for App component" , function(){ //describe permite describir lo que
  //se va a testear;  function va a incluir todo nuestro testeo a realizar.
  it('only one element in App CSS Class', //keyword "it" , describiendo que se esta testeando
     function(){ //la funcion en si que indica que se va a testear
      const wrapper = shallow(<App />);//mediante la funcion shallow importada desde
      //"enzyme" se podrá crear la instancia react component, cabe decir que este no crea los
      //componente hijos(child component, por ejemplo dogs or addDogs, etc)
      expect(wrapper.find(".App")).length(1);//lo que se espera (keyword expext importada 
      //desde CHAI)
      //cuando uso el wrapper y trato de encontrar algo en la clase CSS llamada App, y lo
      //que debe haber es solo un elemento html en nuestro component.
    
      });

} );

///////////////////

describe("Test suite for DogItem and Dogs" , function(){ //describe permite describir lo que
  //testing React component relashionships
  it('Dog list Contain two dogs',function(){
    const wrapper = mount(<App />)//ahora en vez de usar shallow se usará la keyword
    //"mount" que se importó desde enzyme, mount hará una creacion mas profunda, es decir
    //no solo se creara el componente App sino que creará todas sus dependencias y sus
    //dependencias de estas and so on.
    expect(wrapper.find('Dogs').find('DogItem')).length(2);//se deberá encontrar dentro del componente App el
    // componente Dogs, y dentro de este debera encontrar el componente DogItem el cual 
    //solo deberá tener dos!! elementos porque asi lo declaramos al inicio
  });
    
      });

  
///////////////////

describe("Successfully adds dog to list when form submited" , function(){ //describe permite describir lo que
  //testing React component relashionships
  it('Dog list Contain two dogs',function(){
    const wrapper = mount(<App />);
    const adddog = wrapper.find('AddDog'); //se buscará el componente AddDog dentro
    // de wrapper, Addog es el componente que permite ingresar un nuevo perro.
    adddog.find('#dogName').get(0).value = 'Lola'; //dentro del componente addog
    //se buscará el elemento html llamado dogName, sabemos que solo hay uno que se llama
    //así pero aun asi nos aseguraremos que tomaremos el unico y primer elemento 
    //para ello se usará el get (0), cero indica que es el primer elemento; finalmente 
    //se le asignara el nombre de lola.
    adddog.find('#imageURL').get(0).value = 'https://static.pexels.com/photos/54386/pexels-photo-54386.jpeg';
    adddog.find('#dogBreed').get(0).value = 'Beagle';

    const form = adddog.find('form');//buscando el elemento form html del componente AddDog
    //asignado lineas arriba a adddog
    form.simulate ('submit'); //se simula un submit del form
    //ahora despues del submit lo que se espera es que al hacer la busqueda dentro del
    //app/dog/dogitem se encuentren ahora tres elementos
    expect(wrapper.find('Dogs').find('DogItem')).length(3);
    expect(wrapper.state().dogs[2].name == 'Lola');
    
  });
    
      });



///////////////////

describe("Testing Links" , function(){ 

  it('removes dog from list when deleted',function(){
    const wrapper = mount(<App />);
    const deleteLink = wrapper.find('a').first();//deberemos ser capaces de encontrar
    //link mediante find y la letra 'a' de Anchor luego cogeremos el primer link que 
    //encontremos "first()", este link será el link de delete.
    deleteLink.simulate('click'); //se simulará hacer click en el link
    expect(wrapper.find('Dogs').find('DogItem')).length(1);//solo se encuentra un item
    //porque la corrida empieza desde el estado original donde solo hay dos objetos
    //declarados y por tanto al eliminar uno entonces solo quedará uno.
    
  });
    
      });



