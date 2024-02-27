import formPage from "../page/formPage";
import buttonPage from "../page/buttonPage";
import { filePath } from "../helpers/filepath";

const buttonP = new buttonPage()
const formP = new formPage()
const homepageJSON = filePath().homepage
const departmentDropdown_dataJSON = filePath().departmentDropdown

export function verifyDepartmentDropdown() {
    cy.checkAndReadFile(homepageJSON).then((homepageJSONDatas) => {
        formP.verifyElementVisibility(homepageJSONDatas.selector.departmentDropdownText)
    })
}

export function randomSelectAndVerifyDepartmentOption() {
    cy.checkAndReadFile(homepageJSON).then((homepageJSONDatas) => {
        // Get the select element
        cy.get(homepageJSONDatas.selector.departmentDropdown).then(($select) => {
            // Extract options from the dropdown
            const options = [];
            $select.find('option').each((index, $option) => {
                options.push($option.text);
            });

            // Save options to a JSON file or display in the console
            const dropdownData = {
                options: options
            };

            // Check if dropdown_dataJSON file exists
            cy.checkAndReadFile(departmentDropdown_dataJSON).then((existingData) => {
                let optionData;
                if (!existingData || existingData.options.length === 0) {
                    // If the file doesn't exist or options array is empty, update optionData
                    optionData = dropdownData;
                    cy.writeFile(departmentDropdown_dataJSON, dropdownData);
                } else {
                    optionData = existingData;
                }

                // Generate a random index within the range of available options in the dropdown
                let randomIndex = Math.floor(Math.random() * optionData.options.length);

                // Select an option from the department dropdown using the extracted random index
                formP.selectFromOption(
                    homepageJSONDatas.selector.departmentDropdown,
                    optionData.options[randomIndex]
                );

                // Verify that the selected option matches the text displayed in the department dropdown
                formP.verifyText(homepageJSONDatas.selector.departmentDropdownText, optionData.options[randomIndex]);

                // Remove the selected option from the optionData array to ensure it's not selected again
                optionData.options.splice(randomIndex, 1);

                // Update the JSON file with the modified optionData, excluding the selected option
                cy.writeFile(departmentDropdown_dataJSON, optionData);

            });
        });
    });
}

export function inputSearchItem(itemName) {
    cy.checkAndReadFile(homepageJSON).then((homepageJSONDatas) => {
        formP.enterInputFieldData(homepageJSONDatas.selector.searchInput, itemName)
    })
}

export function clickOnSearchIcon() {
    cy.checkAndReadFile(homepageJSON).then((homepageJSONDatas) => {
        buttonP.clickButton(homepageJSONDatas.selector.searchIcon)
    })
}

export function verifySearchResult(itemName) {
    cy.checkAndReadFile(homepageJSON).then((homepageJSONDatas) => {
        formP.verifyText(homepageJSONDatas.selector.searchResultText, `"` + itemName + `"`)
    })
}
