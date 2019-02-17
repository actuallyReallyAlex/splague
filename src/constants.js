import ChooseMode from './screens/ChooseMode'
import ChooseName from './screens/ChooseName'
import ChooseType from './screens/ChooseType'
import Home from './screens/Home'

export const screens = {
  chooseMode: ChooseMode,
  chooseName: ChooseName,
  chooseType: ChooseType,
  home: Home
}

export const plagueTypes = ['Bubonic', 'Septicemic', 'Pneumonic']

export const factionTypes = ['Earth Tribe', 'Tradesmen', 'Warlords']

export const cureNames = {
  adjectives: ['Happy', 'Fast', 'Amazing', 'Wonderful', 'Wise'],
  nouns: ['Cure']
}

export const plagueNames = {
  adjectives: [
    'Black',
    'Evil',
    'Slow',
    'Fast',
    'Quick',
    'Sinister',
    'Sleepless',
    'Oozing',
    'Powerful',
    'Swift',
    'Cold'
  ],
  nouns: [
    'Death',
    'Pain',
    'Spot',
    'Punch',
    'Knife',
    'Sword',
    'Illness',
    'Sickness',
    'Plague',
    'Crow',
    'Buzzard',
    'Sludge',
    'Slime'
  ]
}
