// Backbone model
var Site = Backbone.Model.extend({
    defaults: {
        author: '',
        title: '',
        url: ''
    }
})

// Sites collection

var Sites = Backbone.Collection.extend({});

// iknstantiate two Sites

var site1 = new Site({
    author: 'Agence France Presse',
    title: 'AFP',
    url: 'https://www.afp.com/en'
});

var site2 = new Site({
    author: 'Lidové noviny',
    title: 'Lidovky.cz',
    url: 'http://www.lidovky.cz/'
});

console.log(site1);
console.log(site2);

var theSites = new Sites([site1, site2]);

console.log(theSites);