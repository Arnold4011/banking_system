// app.js

// Fetch country data
fetch('countries.json')
  .then(response => response.json())
  .then(data => {
    const countryDropdown = document.getElementById('country');
    data.forEach(country => {
      const option = document.createElement('option');
      option.value = country.code;
      option.text = `${country.name} ${country.flag}`;
      countryDropdown.appendChild(option);
    });
  });

// Fetch state data
fetch('states.json')
  .then(response => response.json())
  .then(data => {
    const stateDropdown = document.getElementById('state');
    data.forEach(state => {
      const option = document.createElement('option');
      option.value = state.code;
      option.text = state.name;
      stateDropdown.appendChild(option);
    });
  });
