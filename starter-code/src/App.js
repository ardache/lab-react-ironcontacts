import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"
import Contact from './components/Contacts';


class App extends Component {
  state = {
    listOfContacts: contacts.slice(0, 5)
  }

  selectRandom = () => {
    let random = Math.floor(Math.random() * (contacts.length - 5) + 5);
    let client = contacts[random];
    this.setState({
      listOfContacts: [...this.state.listOfContacts, client]
    });
  };

  sortByName = () => {
    let sorted = [...this.state.listOfContacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      listOfContacts: sorted
    });
  };

  sortByPopularity = () => {
    let sorted = [...this.state.listOfContacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      listOfContacts: sorted
    });
  };

  removeRow = e => {
    let newContacts = [...this.state.listOfContacts].filter(actor => {
      return actor.id !== e.target.id;
    });
    this.setState({
      listOfContacts: newContacts
    });
  };

  render() {
    return (
      
      <div className = "table">
        <button onClick={this.selectRandom}>Add Random Contact</button>
         <button onClick={this.sortByName}>Sort by Name</button>
         <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table>
            <tr>
              <th>picture </th>
              <th>name </th>
              <th>popularity</th>
            </tr>

          {
            this.state.listOfContacts.map(contact=> {
              return <Contact picture={contact.pictureUrl} name={contact.name} popularity={contact.popularity} key={contact.id} action={this.removeRow}/>
            })
          } 
        </table>
      </div>
    );
  }
}

export default App;
