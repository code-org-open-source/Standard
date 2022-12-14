/*
    @Authors @Colack @Varrience
     - Last updated by @Colack  (8/31/22)
     - Last updated by @Varrience (8/30/22)
    @About
     - Library for messing around with values.
*/

// Set a variable to its default value
function setDefault(variable, defaultValue) {
    return variable === undefined ? defaultValue: variable;
}

// Set a variable to a specified value
function setValue(variable, value) {
    return variable === undefined ? value: (variable = value)
}

// Creates a Global entry into the window
function setGlobal(name, value) {
    if(typeof name === 'string'){
        window[name] = value;
    }
}

// Creates a global placeholder for variable
function gypGlobal(name, varriable) {
    if(typeof name === 'string' && typeof variable === 'string') {
        window[varieble] = window[value];
    }
}

// Localises any Library imported within your project
function localLib(lib) {
  for (var l in lib) {
    window[l] = lib[l];
  }
}

// Deletes a Global entry permanently from the window
function delGlobal(name) {
    if(typeof name === 'string') {
        delete window[name];
    }
}

// Contributors
function contributors() {
    console.log("@Colack");
    console.log("@Varrience");
}
