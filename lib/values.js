// coffee types
exports.types = [
  {
    "id": "224521",
    "name": "Vincenzo",
    "position": 1,
    "price": "25,90 CHF",
    "consumable": "1:1",
    "cuisine_name": "Pizza",
    "category_name": "Pizza",
    "ingridients": "Tomatensauce, Mozzarella, Rohschinken, Mascarpone, Peperoncino",
    "vg": false,
    "spicy_level": 2,
    "size": "32cm",
    "discount": {
      "type": "",
      "amount": "0.00"
    },
    "tags": []
  },
  {
    "id": "224522",
    "name": "Tropea",
    "position": 1,
    "price": "24,90 CHF",
    "consumable": "1:1",
    "cuisine_name": "Pizza",
    "category_name": "Pizza",
    "ingridients": "Tomatensauce, Mozzarella, Zwiebeln, Nduja (Salamimousse)",
    "vg": false,
    "spicy_level": 3,
    "size": "32cm",
    "discount": {
      "type": "",
      "amount": "0.00"
    },
    "tags": []
  },
  {
    "id": "224523",
    "name": "Toni",
    "position": 1,
    "price": "28,90 CHF",
    "consumable": "1:1",
    "cuisine_name": "Pizza",
    "category_name": "Pizza",
    "ingridients": "Tomatensauce, Mozzarella, Salsiccia, Stängelkohl (Rape)",
    "vg": false,
    "spicy_level": 1,
    "size": "32cm",
    "discount": {
      "type": "",
      "amount": "0.00"
    },
    "tags": []
  },
  {
    "id": "224524",
    "name": "Schwamendingen",
    "position": 1,
    "price": "20,50 CHF",
    "consumable": "1:1",
    "cuisine_name": "Pizza",
    "category_name": "Pizza",
    "ingridients": "Mozzarella, Tomatenscheiben, Speck, Knoblauch",
    "vg": false,
    "spicy_level": 0,
    "size": "32cm",
    "discount": {
      "type": "",
      "amount": "0.00"
    },
    "tags": []
  },
  {
    "id": "224525",
    "name": "Salmone",
    "position": 1,
    "price": "23,90 CHF",
    "consumable": "1:1",
    "cuisine_name": "Pizza",
    "category_name": "Pizza",
    "ingridients": "Tomatensauce, Mozzarella, Lachs, Zwiebeln",
    "vg": false,
    "spicy_level": 0,
    "size": "32cm",
    "discount": {
      "type": "",
      "amount": "0.00"
    },
    "tags": []
  },
  {
    "id": "224525",
    "name": "Rosa",
    "position": 1,
    "price": "28,90 CHF",
    "consumable": "1:1",
    "cuisine_name": "Pizza",
    "category_name": "Pizza",
    "ingridients": "Tomaten, Mozzarella, Rohschinken, Tomatenwürfel, Rucola, Mozzarella aus Büffelmilch, Granasplitter",
    "vg": false,
    "spicy_level": 0,
    "size": "32cm",
    "discount": {
      "type": "",
      "amount": "0.00"
    },
    "tags": []
  },
  {
    "id": "224526",
    "name": "Romana",
    "position": 1,
    "price": "19,90 CHF",
    "consumable": "1:1",
    "cuisine_name": "Pizza",
    "category_name": "Pizza",
    "ingridients": "Tomaten, Mozzarella, Hinterschinken, Gorgonzola",
    "vg": false,
    "spicy_level": 0,
    "size": "32cm",
    "discount": {
      "type": "",
      "amount": "0.00"
    },
    "tags": []
  },
  {
    "id": "224526",
    "name": "Regina",
    "position": 1,
    "price": "24,50 CHF",
    "consumable": "1:1",
    "cuisine_name": "Pizza",
    "category_name": "Pizza",
    "ingridients": "Tomaten, Mozzarella, Tomatenwürfel, Basilikum, Mozzarella aus Büffelmilch, Granasplitter",
    "vg": false,
    "spicy_level": 0,
    "size": "32cm",
    "discount": {
      "type": "",
      "amount": "0.00"
    },
    "tags": []
  },
];

exports.typesPlain = exports.types.map(function(o) {
  return o.name + ' (' + o.price + ')\n' + o.ingridients + '\n'; // convert to one line
});

// sugar levels
exports.spicy = [
  {name: 'Low', chili: '1'},
  {name: 'Medium', chili: '2'},
  {name: 'High', chili: '3'},
  {name: 'Very High', chili: '4'},
];
exports.spicyPlain = exports.spicy.map(function(o) {
  return o.name + ' (' + o.chili + ' chili)'; // convert to one line
});

// served in
exports.servedIn = [
  "Mug",
  "Cup",
  "Takeway package"
];