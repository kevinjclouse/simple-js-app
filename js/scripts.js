var repository = [1, 2, 3];

var Pokemon = {
  name: 'Bulbasaur',
  height: 7,
  type: ['grass', 'poison'],
  child: {
    name: 'Squirtle',
    height: 5,
    type: ['grass', 'water'],
    child: {
      name: 'Pidgey',
      height: 3,
      type: ['grass', 'rock']
    }
  }
};

for (var i = 0; i <= repository.length; i++) {
  document.write('Bulbasaur(height:7)')
  document.write('Squirtle(height:5)')
  document.write('Pidgey(height:3)')
}
