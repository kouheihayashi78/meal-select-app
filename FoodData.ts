export interface Food {
  name: string;
  emoji: string;
}

export const FoodData: Food[] = [
  // Food型の配列なのでFood[]
  {
    name: 'カレー',
    emoji: '🍛',
  },
  {
    name: '寿司',
    emoji: '🍣',
  },
  {
    name: '肉',
    emoji: '🍖',
  },
  {
    name: 'ラーメン',
    emoji: '🍜',
  },
  {
    name: 'ハンバーガー',
    emoji: '🍔',
  },
  {
    name: '居酒屋',
    emoji: '🍺',
  },
  {
    name: 'おでん',
    emoji: '🍢',
  },
  {
    name: '鍋',
    emoji: '🍲',
  },
  {
    name: 'どんぶり系',
    emoji: '🍚',
  }
];
