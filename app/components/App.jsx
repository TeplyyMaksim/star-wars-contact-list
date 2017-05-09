import React from 'react';
import './App.scss';
import Contact from './Contact/Contact.jsx';

var CONTACTS = [
    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: require('./img/darth.gif')
    }, {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',
        image: require('./img/leia.gif')
    }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        image: require('./img/luke.gif')
    }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
        image: require('./img/chewbacca.gif')
    }, {
        id: 5,
        name: 'Kylo Ren',
        phoneNumber: '+380632321703',
        image: require('./img/kylo.gif')
    }
];

var ContactsList = React.createClass({
    getInitialState: function() {
        return {
            displayedContacts: CONTACTS
        };
    },
    handleSearch: function(event) {
        var searchQuery = event.target.value.toLowerCase();
        var displayedContacts = CONTACTS.filter(function(el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({
            displayedContacts: displayedContacts
        });
    },
    render: function() {
        return (
            <div className="contacts">
                <input type="text" placeholder="Search..." className="search-field" onChange={this.handleSearch} />
                <ul className="contacts-list">
                    {
                       this.state.displayedContacts.map(function(el) {
                            return <Contact
                                key={el.id}
                                name={el.name}
                                phoneNumber={el.phoneNumber}
                                image={el.image}
                            />;
                       })
                    }
                </ul>
            </div>
        );
    }
});

module.exports = ContactsList;
