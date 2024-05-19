function createUserProfiles(names, modifiedNames) {
  return names.map((name, index) => ({
    originalName: name,
    modifiedName: modifiedNames[index],
    id: index + 1
  }));
}

// Example usage:
const originalNames = ["Alice", "Bob", "Charlie", "David", "Eva"];
const modifiedNames = ["ALICE", "bob", "CHARLIE", "david", "EVA"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(userProfiles);