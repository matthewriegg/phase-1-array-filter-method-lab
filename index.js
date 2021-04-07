//* `findMatching`- This function takes an array of drivers' names and a `string`
  //as arguments, and returns the matching list of drivers. The function should be
  //case insensitive.

//* `fuzzyMatch` - This function takes an array of drivers' names and a `string`
  //as arguments for querying the array, and returns all drivers whose names begin
  //with the provided letters.

//* `matchName` - This function takes an array of `driver` objects and a `string`
  //as arguments. Each `driver` object has two properties: `name` and `hometown`.
  //The function should return each element whose `name` property matches the
  //provided `string` argument.

  //  describe('fuzzyMatch()', function () {
    const drivers = [];

   // beforeEach(function () {
     // drivers.length = 0;

      //drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
    //});

    //it('returns a driver if beginning provided letters match', function () {
     // expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']);
    //});

   // it('does not return drivers if only middle or ending letters match', function () {
     // expect(fuzzyMatch(drivers, 'y')).to.have.members([]);
    //});

    //it('does not return drivers if only middle or ending letters match', function () {
      //expect(fuzzyMatch(drivers, 'mm')).to.have.members([]);
    //});
  //});

//------------------------------------------------------



const findMatching = (drivers, name) =>  {
  return drivers.filter(driverName => driverName.toUpperCase() === name.toUpperCase());

}

//
//const drivers = []
//const fuzzyMatch = (drivers, name) =>  {
  //  return drivers.filter(driverNameLetterOne => (driverNameLetterOne) === name.);

//}



const fuzzyMatch = (drivers, nameLetters) => {
    return drivers.filter(nameStart => nameStart.substring( 0 , nameLetters.length) === nameLetters);
}

console.log(fuzzyMatch());


function matchName (drivers, name) {
    return drivers.filter(driverObj => driverObj.name === name);
}

matchName()






//const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//const result = words.filter(word => word.length > 6);

//console.log(result);