import {Friend, Colleague, ColleagueHistory } from './myTypes.d'


const friend1 = {
  name: "Rawan Kortikela",
  phone: "087-12345",
  age: 25,
};

const friend2 = {
  name: "Caoimhe Costello",
  phone: "086--12345",
  age: 31,
};

export const friends = [friend1, friend2];
//console.log(friends[1]);

//   -------------------


const colleague1 = {
  name: "Ruby Walsh",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
  },
};

const colleague2 = {
  name: "Rachel Berke",
  department: "Finance",
  contact: {
    email: "pburke@company.com",
    extension: 132,
  },
};

const colleague3 = {
  name: "Zahra Woods",
  department: "HR",
  contact: {
    email: "dos@company.com",
    extension: 125,
  },
};

export const colleagues : ColleagueHistory = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};
