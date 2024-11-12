// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
      // Only change code below this line
      for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (prop in contacts[i]) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
  }
      // Only change code aove this line
  
  lookUpProfile("Akira", "likes");
lookUpProfile("Bob", "number")//должен вернуть строкуNo such contact
lookUpProfile("Harry", "likes")//должен возвращать массив
lookUpProfile("Sherlock", "likes")//должен вернуться["Intriguing Cases", "Violin"]
lookUpProfile("Akira", "likes");
lookUpProfile("Kristian", "lastName")//должен вернуть строкуVos