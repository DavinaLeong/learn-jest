const axios = require('axios');

const functions = {
  add: (num1, num2) => num1 + num2,

  isNull: () => null,

  checkValue: x => x,

  createUser: () => {
    const user = { firstName: 'Davina' };
    user['lastName'] = 'Leong';
    user.weight = 70;

    return user;
  },

  team: () => 'team',

  users: [
    'John',
    'Karen',
    'Admin'
  ],

  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => console.log('Fetch error: ', err))
}

module.exports = functions;