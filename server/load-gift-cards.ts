import {GiftCards} from '../collections/gift-cards.ts';

export function loadGiftCards() {
  if (GiftCards.find().count() === 0) {

    var cards = [
      {
        'name': 'Jäätelölahjakortti',
        'description': 'Tällä lahjakortilla saat jäätelöä.',
        'location': 'Helsinki',
        'value' : 50,
        'owner' : 'tuomas.saranen@gmail.com'
      },
      {
        'name': 'Kahvilahjakortti',
        'description': 'Tällä lahjakortilla saat kahvia',
        'location': 'Pääkaupunkiseutu',
        'value' : 50,
        'owner' : 'tuomas.saranen@gmail.com'
      },
      {
        'name': 'Taksilahjakortti',
        'description': 'Tällä lahjakortilla voit maksaa taksikyytisi',
        'location': 'Suomi',
        'value' : 50,
        'owner' : 'tuomas.saranen@gmail.com'
      }
    ];

    for (var i = 0; i < cards.length; i++) {
      GiftCards.insert(cards[i]);
    }
  }
}
