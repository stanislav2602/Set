import Team from '../js/app';

const hero_1 = { name: 'Лучник' };
const hero_2 = { name: 'Мечник' };
const hero_3 = { name: 'Маг' };

test('add', () => {
  const team = new Team();
  team.add(hero_1);
  expect(team.members.has(hero_1)).toBe(true);
});

test('add error duplicate', () => {
  const team = new Team();
  team.add(hero_1);
  expect(() => team.add(hero_1)).toThrow('Персонаж уже добавлен');
});

test('addAll duplicate ignore', () => {
  const team = new Team();
  team.addAll(hero_1, hero_2, hero_1, hero_3);
  expect(team.members.size).toBe(3);
});

test('toArray', () => {
  const team = new Team();
  team.addAll(hero_1, hero_2);
  expect(team.toArray()).toEqual([hero_1, hero_2]);
});

test('empty command - empty array', () => {
  const team = new Team();
  expect(team.toArray()).toEqual([]);
});
