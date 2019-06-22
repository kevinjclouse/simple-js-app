var repository = [
  {
    name: 'Bulbasaur',
    height: 7,
    types: ['grass', 'poison']
  },
  {
    name: 'Pidgey',
    height: 3,
    types: ['rock', 'ice']
  },
  {
    name: 'Metapod',
    height: .7,
    types: ['fire']
  }
];

// for (var i = 0; i < repository.length; i++) {
//   var bigPoke = ""
//   if (repository[i].height > 6) {
//     bigPoke = "Wow, that's big!"
  // }
  // document.write('<p>' + '<strong>' + repository[i].name + '</strong>' + ' -' + ' Height: ' + repository[i].height + ' - Abilities: ' + repository[i].types + ' ' + bigPoke);
// }

repository.forEach(function(currentName){
  document.write('<p>' + '<strong>' + '<h1>' + currentName.name + ' : ' + '</h1>' + '</strong>' + ' Height ' + '<strong>' + ' : ' + '</strong>' + currentName.height + ' Type ' + ' = ' + currentName.types);
});
