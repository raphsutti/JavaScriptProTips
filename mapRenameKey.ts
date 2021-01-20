// Rename key id -> ssid using map
const people = [
  { id: 123, name: "smith" },
  { id: 456, name: "jane" },
  { id: 789, name: "tyrone" },
];

const newPeople = people.map(({ id, ...obj }) => ({
  ...obj,
  ssid: id,
}));

console.log(people);

`[{
  "id": 123,
  "name": "smith"
}, {
  "id": 456,
  "name": "jane"
}, {
  "id": 789,
  "name": "tyrone"
}] `;

console.log(newPeople);

`[{
  "name": "smith",
  "ssid": 123
}, {
  "name": "jane",
  "ssid": 456
}, {
  "name": "tyrone",
  "ssid": 789
}] `;
