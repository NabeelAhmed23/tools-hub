export interface EmojiData {
  emoji: string;
  name: string;
  category: string;
  keywords: string[];
}

export const emojiCategories = [
  'smileys',
  'people',
  'animals',
  'food',
  'travel',
  'activities',
  'objects',
  'symbols',
  'flags'
] as const;

export type EmojiCategory = typeof emojiCategories[number];

export const emojiData: EmojiData[] = [
  // Smileys
  { emoji: '😀', name: 'grinning face', category: 'smileys', keywords: ['happy', 'joy', 'smile'] },
  { emoji: '😃', name: 'grinning face with big eyes', category: 'smileys', keywords: ['happy', 'joy', 'excited'] },
  { emoji: '😄', name: 'grinning face with smiling eyes', category: 'smileys', keywords: ['happy', 'joy', 'laugh'] },
  { emoji: '😁', name: 'beaming face with smiling eyes', category: 'smileys', keywords: ['happy', 'joy', 'cheerful'] },
  { emoji: '😆', name: 'grinning squinting face', category: 'smileys', keywords: ['happy', 'laugh', 'satisfied'] },
  { emoji: '😅', name: 'grinning face with sweat', category: 'smileys', keywords: ['happy', 'laugh', 'relief'] },
  { emoji: '🤣', name: 'rolling on the floor laughing', category: 'smileys', keywords: ['laugh', 'rofl', 'funny'] },
  { emoji: '😂', name: 'face with tears of joy', category: 'smileys', keywords: ['laugh', 'cry', 'funny'] },
  { emoji: '🙂', name: 'slightly smiling face', category: 'smileys', keywords: ['happy', 'smile', 'positive'] },
  { emoji: '😊', name: 'smiling face with smiling eyes', category: 'smileys', keywords: ['happy', 'blush', 'pleased'] },

  // People
  { emoji: '👋', name: 'waving hand', category: 'people', keywords: ['hello', 'hi', 'goodbye', 'wave'] },
  { emoji: '🤚', name: 'raised back of hand', category: 'people', keywords: ['hand', 'stop', 'high five'] },
  { emoji: '🖐️', name: 'hand with fingers splayed', category: 'people', keywords: ['hand', 'five', 'fingers'] },
  { emoji: '✋', name: 'raised hand', category: 'people', keywords: ['hand', 'stop', 'high five'] },
  { emoji: '🖖', name: 'vulcan salute', category: 'people', keywords: ['spock', 'hand', 'greeting'] },
  { emoji: '👌', name: 'OK hand', category: 'people', keywords: ['ok', 'perfect', 'good'] },
  { emoji: '🤌', name: 'pinched fingers', category: 'people', keywords: ['italian', 'gesture', 'fingers'] },
  { emoji: '🤏', name: 'pinching hand', category: 'people', keywords: ['small', 'tiny', 'little'] },
  { emoji: '✌️', name: 'victory hand', category: 'people', keywords: ['peace', 'victory', 'two'] },
  { emoji: '🤞', name: 'crossed fingers', category: 'people', keywords: ['luck', 'hope', 'wish'] },

  // Animals
  { emoji: '🐶', name: 'dog face', category: 'animals', keywords: ['dog', 'pet', 'puppy'] },
  { emoji: '🐱', name: 'cat face', category: 'animals', keywords: ['cat', 'pet', 'kitten'] },
  { emoji: '🐭', name: 'mouse face', category: 'animals', keywords: ['mouse', 'rodent'] },
  { emoji: '🐹', name: 'hamster', category: 'animals', keywords: ['hamster', 'pet'] },
  { emoji: '🐰', name: 'rabbit face', category: 'animals', keywords: ['rabbit', 'bunny'] },
  { emoji: '🦊', name: 'fox', category: 'animals', keywords: ['fox', 'clever'] },
  { emoji: '🐻', name: 'bear', category: 'animals', keywords: ['bear', 'wild'] },
  { emoji: '🐼', name: 'panda', category: 'animals', keywords: ['panda', 'bear', 'cute'] },
  { emoji: '🐨', name: 'koala', category: 'animals', keywords: ['koala', 'bear', 'australia'] },
  { emoji: '🐯', name: 'tiger face', category: 'animals', keywords: ['tiger', 'wild', 'cat'] },

  // Food
  { emoji: '🍎', name: 'red apple', category: 'food', keywords: ['apple', 'fruit', 'healthy'] },
  { emoji: '🍌', name: 'banana', category: 'food', keywords: ['banana', 'fruit', 'yellow'] },
  { emoji: '🍊', name: 'tangerine', category: 'food', keywords: ['orange', 'fruit', 'citrus'] },
  { emoji: '🍓', name: 'strawberry', category: 'food', keywords: ['strawberry', 'fruit', 'berry'] },
  { emoji: '🍇', name: 'grapes', category: 'food', keywords: ['grapes', 'fruit', 'wine'] },
  { emoji: '🥝', name: 'kiwi fruit', category: 'food', keywords: ['kiwi', 'fruit', 'green'] },
  { emoji: '🍅', name: 'tomato', category: 'food', keywords: ['tomato', 'vegetable', 'red'] },
  { emoji: '🥑', name: 'avocado', category: 'food', keywords: ['avocado', 'fruit', 'green'] },
  { emoji: '🍆', name: 'eggplant', category: 'food', keywords: ['eggplant', 'vegetable', 'purple'] },
  { emoji: '🥕', name: 'carrot', category: 'food', keywords: ['carrot', 'vegetable', 'orange'] },

  // Travel
  { emoji: '🚗', name: 'automobile', category: 'travel', keywords: ['car', 'vehicle', 'drive'] },
  { emoji: '🚕', name: 'taxi', category: 'travel', keywords: ['taxi', 'cab', 'transport'] },
  { emoji: '🚙', name: 'sport utility vehicle', category: 'travel', keywords: ['suv', 'car', 'vehicle'] },
  { emoji: '🚌', name: 'bus', category: 'travel', keywords: ['bus', 'transport', 'public'] },
  { emoji: '🚎', name: 'trolleybus', category: 'travel', keywords: ['trolley', 'bus', 'transport'] },
  { emoji: '🏎️', name: 'racing car', category: 'travel', keywords: ['race', 'car', 'fast'] },
  { emoji: '🚓', name: 'police car', category: 'travel', keywords: ['police', 'car', 'law'] },
  { emoji: '🚑', name: 'ambulance', category: 'travel', keywords: ['ambulance', 'medical', 'emergency'] },
  { emoji: '🚒', name: 'fire engine', category: 'travel', keywords: ['fire', 'truck', 'emergency'] },
  { emoji: '🚐', name: 'minibus', category: 'travel', keywords: ['minibus', 'van', 'transport'] },

  // Activities
  { emoji: '⚽', name: 'soccer ball', category: 'activities', keywords: ['soccer', 'football', 'sport'] },
  { emoji: '🏀', name: 'basketball', category: 'activities', keywords: ['basketball', 'sport', 'ball'] },
  { emoji: '🏈', name: 'american football', category: 'activities', keywords: ['football', 'american', 'sport'] },
  { emoji: '⚾', name: 'baseball', category: 'activities', keywords: ['baseball', 'sport', 'ball'] },
  { emoji: '🥎', name: 'softball', category: 'activities', keywords: ['softball', 'sport', 'ball'] },
  { emoji: '🎾', name: 'tennis', category: 'activities', keywords: ['tennis', 'sport', 'ball'] },
  { emoji: '🏐', name: 'volleyball', category: 'activities', keywords: ['volleyball', 'sport', 'ball'] },
  { emoji: '🏉', name: 'rugby football', category: 'activities', keywords: ['rugby', 'sport', 'ball'] },
  { emoji: '🥏', name: 'flying disc', category: 'activities', keywords: ['frisbee', 'disc', 'sport'] },
  { emoji: '🎱', name: 'pool 8 ball', category: 'activities', keywords: ['pool', 'billiards', 'game'] },

  // Objects
  { emoji: '📱', name: 'mobile phone', category: 'objects', keywords: ['phone', 'mobile', 'cell'] },
  { emoji: '💻', name: 'laptop', category: 'objects', keywords: ['laptop', 'computer', 'pc'] },
  { emoji: '🖥️', name: 'desktop computer', category: 'objects', keywords: ['desktop', 'computer', 'pc'] },
  { emoji: '⌨️', name: 'keyboard', category: 'objects', keywords: ['keyboard', 'type', 'input'] },
  { emoji: '🖱️', name: 'computer mouse', category: 'objects', keywords: ['mouse', 'computer', 'click'] },
  { emoji: '🖨️', name: 'printer', category: 'objects', keywords: ['printer', 'print', 'paper'] },
  { emoji: '📷', name: 'camera', category: 'objects', keywords: ['camera', 'photo', 'picture'] },
  { emoji: '📹', name: 'video camera', category: 'objects', keywords: ['video', 'camera', 'record'] },
  { emoji: '📺', name: 'television', category: 'objects', keywords: ['tv', 'television', 'watch'] },
  { emoji: '📻', name: 'radio', category: 'objects', keywords: ['radio', 'music', 'listen'] },

  // Symbols
  { emoji: '❤️', name: 'red heart', category: 'symbols', keywords: ['love', 'heart', 'red'] },
  { emoji: '🧡', name: 'orange heart', category: 'symbols', keywords: ['love', 'heart', 'orange'] },
  { emoji: '💛', name: 'yellow heart', category: 'symbols', keywords: ['love', 'heart', 'yellow'] },
  { emoji: '💚', name: 'green heart', category: 'symbols', keywords: ['love', 'heart', 'green'] },
  { emoji: '💙', name: 'blue heart', category: 'symbols', keywords: ['love', 'heart', 'blue'] },
  { emoji: '💜', name: 'purple heart', category: 'symbols', keywords: ['love', 'heart', 'purple'] },
  { emoji: '🖤', name: 'black heart', category: 'symbols', keywords: ['love', 'heart', 'black'] },
  { emoji: '🤍', name: 'white heart', category: 'symbols', keywords: ['love', 'heart', 'white'] },
  { emoji: '🤎', name: 'brown heart', category: 'symbols', keywords: ['love', 'heart', 'brown'] },
  { emoji: '💔', name: 'broken heart', category: 'symbols', keywords: ['broken', 'heart', 'sad'] },

  // Flags (sample)
  { emoji: '🏁', name: 'chequered flag', category: 'flags', keywords: ['race', 'finish', 'checkered'] },
  { emoji: '🚩', name: 'triangular flag', category: 'flags', keywords: ['flag', 'warning', 'red'] },
  { emoji: '🎌', name: 'crossed flags', category: 'flags', keywords: ['flags', 'celebration', 'japan'] },
  { emoji: '🏴', name: 'black flag', category: 'flags', keywords: ['flag', 'black', 'pirate'] },
  { emoji: '🏳️', name: 'white flag', category: 'flags', keywords: ['flag', 'white', 'surrender'] },
  { emoji: '🏳️‍🌈', name: 'rainbow flag', category: 'flags', keywords: ['rainbow', 'pride', 'lgbt'] },
  { emoji: '🇺🇸', name: 'flag: United States', category: 'flags', keywords: ['usa', 'america', 'flag'] },
  { emoji: '🇬🇧', name: 'flag: United Kingdom', category: 'flags', keywords: ['uk', 'britain', 'flag'] },
  { emoji: '🇫🇷', name: 'flag: France', category: 'flags', keywords: ['france', 'french', 'flag'] },
  { emoji: '🇩🇪', name: 'flag: Germany', category: 'flags', keywords: ['germany', 'german', 'flag'] },
];