import formPage from "../page/formPage";
import { filePath } from "../helpers/filepath";

const formP = new formPage()
const homepageJSON = filePath().homepage
const dropdown_dataJSON = filePath().dropdown_data

export function searchForItem() {
    cy.checkAndReadFile(dropdown_dataJSON).then((data) => {

        let optionData = data
        cy.checkAndReadFile(homepageJSON).then((homepageJSONDatas) => {
            // Get the select element
            cy.get(homepageJSONDatas.selector.searchDropdown).then(($select) => {
                // Extract options from the dropdown
                const options = [];
                $select.find('option').each((index, $option) => {
                    options.push($option.text);
                });

                // Save options to a JSON file or display in the console
                const dropdownData = {
                    options: options
                };

                // Write the data to a JSON file 
                if (optionData?.options?.length === 0) {
                    optionData = dropdownData
                    cy.writeFile(dropdown_dataJSON, dropdownData);
                }

                let randomIndex = Math.floor(Math.random() * optionData.options.length);
                formP.selectFromOption(
                    homepageJSONDatas.selector.searchDropdown,
                    optionData.options[randomIndex]
                );
                // cy.select();
                optionData.options.splice(randomIndex, 1)
                cy.writeFile(dropdown_dataJSON, optionData);
            })

        })
    })
}


