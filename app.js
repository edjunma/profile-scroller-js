const data = [
  // Can fetch API for info but will be hardcode for filler
  {
    name: "John Doe",
    age: 23,
    gender: "Male",
    lookingfor: "Female",
    location: "Buffalo NY",
    image: "https://randomuser.me/api/portraits/men/82.jpg"
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "Female",
    lookingfor: "Male",
    location: "Miama FL",
    image: "https://randomuser.me/api/portraits/women/82.jpg"
  },
  {
    name: "Emilia Clarke",
    age: 28,
    gender: "Female",
    lookingfor: "Jon Snow",
    location: "Westeros",
    image: "https://randomuser.me/api/portraits/women/83.jpg"
  }
];

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
