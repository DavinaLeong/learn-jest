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
  ]
}

module.exports = functions;