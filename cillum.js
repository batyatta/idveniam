class NameMap {
  // Define the NameMap class
}

// Sample parent object
const parent = {
  signalNameMap: {
    // Some initial values
  }
};

// Assigning the value to this.signalNameMap based on the parent object
this.signalNameMap = parent ? parent.signalNameMap : new NameMap();

console.log(this.signalNameMap);
