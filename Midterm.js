/** @format */
// Create a header
const header = document.createElement("header");
const heading = document.createElement("h1");
heading.innerText = "Ten Most Populated Countries";


const countries = [
    {
        countryName: "China",
        population: "1.4 Billion",
        officialLanguage: "Chinese",
    },
    {
        countryName: "India",
        population: "1.3 Billion",
        officialLanguage: "Hindi",
    },
    {
        countryName: "United States",
        population: "335 Million",
        officialLanguage: "English",
    },
    {
        countryName: "Indonesia",
        population: "279 Million",
        officialLanguage: "Indonesian",
    },
    {
        countryName: "Pakistan",
        population: "247 Million",
        officialLanguage: "Urdu",
    },
    {
        countryName: "Nigeria",
        population: "230 Million",
        officialLanguage: "English",
    },
    {
        countryName: "Brazil",
        population: "218 Million",
        officialLanguage: "Portuguese",
    },
    {
        countryName: "Bangladesh",
        population: "167 Million",
        officialLanguage: "Bengali",
    },
    {
        countryName: "Russia",
        population: "141 Million",
        officialLanguage: "Russian",
    },
    {
        countryName: "Mexico",
        population: "129 Million",
        officialLanguage: "Spanish",
    },
];
const performAction = () => {
    let action = document.querySelector('#action').value;
    let countryInQuestion;

    switch (action) {
        case 'C':
            createCountry();
            break;
        case 'R':
            const countryName = prompt('Enter the country name to read:');
            if (countryName !== null) {
                readCountry(countryName);
            }
            break;
        case 'U': 
        const countryNameToUpdate = prompt('Enter the country name to update:');
        if (countryNameToUpdate !== null) {
            countryInQuestion = findCountry(countryNameToUpdate);
            if (countryInQuestion) {
                alert(countryInQuestion.countryName +" is selected OK to continue")
                updateACountry(countryInQuestion);
            } else {
                alert(`Country '${countryNameToUpdate}' not found.`);
            }
        }
        break;
        case 'D':
            const countryNameToDelete = prompt('Enter the country name to Delete:');
        if (countryNameToDelete !== null) {
            countryInQuestion = findCountry(countryNameToDelete);
            if (countryInQuestion) {
                alert(countryInQuestion.countryName +" is selected, OK to delete")
                deleteACountry(countryInQuestion);
            } else {
                alert(`Country '${countryNameToDelete}' not found.`);
            }
        }
    }
};

//display countries function
const displayMenuCountries = () => {
    const ul = document.querySelector('#displayCountries');
    ul.innerHTML = '';
    const h4 = document.createElement('h4');
    h4.textContent = 'Top ten populated countries';
    ul.append(h4);
    const list = document.createElement('ul');
    countries.forEach((country) => {
        const li = document.createElement('li');
        li.textContent = `${country.countryName}`;
        list.append(li);
    });
    ul.append(list);
};

const findCountry = (countryName) => {
    const foundCountry = countries.find((country) =>
        country.countryName.toLowerCase() === countryName.toLowerCase()
    );

    return foundCountry;
};



// Function to create a new country
const createCountry = () => {
    let name = prompt("Country Name");
    let pop = prompt("Country Population");
    let language = prompt("Country Language");
    countries.push({
        countryName: name,
        population: pop,
        officialLanguage: language,
    });
    displayMenuCountries(); 
    console.log(countries);
};
//function to read country name 
const readCountry = (countryName) => {
    const foundCountry = countries.find((country) => 
    country.countryName.toLowerCase() === countryName.toLowerCase());
    const readOutput = document.querySelector(".result")
    readOutput.innerHTML ="";
    if (foundCountry) {
        const result = document.createElement("p");
        result.innerHTML = `Country Name: ${foundCountry.countryName}<br>
        Population: ${foundCountry.population}<br>
        Official Language: ${foundCountry.officialLanguage}.`;
       readOutput.append(result)
    } else {
        readOutput.textContent = (`Country '${countryName}' not found.`);
    }
};
//function to update country
const updateACountry = (country) => {
    if (country !== null) {
            const newCountryName = prompt('Enter the new country name for ' + country.countryName + ' (or press Cancel to keep it the same):', country.countryName);
            if (newCountryName === null) {
                alert('Update canceled.');
                return;
            }
        const newPopulation = prompt('Enter the new population (or press Cancel to keep it the same):', country.population);
        if (newPopulation === null) {
            alert('Update canceled.');
            return;
        }

        const newLanguage = prompt('Enter the new official language (or press Cancel to keep it the same):', country.officialLanguage);
        if (newLanguage === null) {
            alert('Update canceled.');
            return;
        }
        // Update the population and language of the country array
        country.countryName = newCountryName
        country.population = newPopulation;
        country.officialLanguage = newLanguage;
        displayMenuCountries();
    }
};
const deleteACountry = (countryToDelete) => {
    const arrayindexToDelete = countries.indexOf(countryToDelete);
    if (arrayindexToDelete !== -1) {
        countries.splice(arrayindexToDelete, 1);
        displayMenuCountries(); 
    }
};

// Initial display
displayMenuCountries();
