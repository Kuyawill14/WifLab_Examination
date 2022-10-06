require("dotenv").config(); //require dotenv to access env file;


process.argv.shift()  // skip node.exe
process.argv.shift()  // skip name of js file
const PlaceName = process.argv.join(' '); //add quote in string
FindSuggestionPlace(PlaceName); //Call function FindSuggestionPlace with paramater


function FindSuggestionPlace(PlaceName){
    console.log(`Query Suggestion for "${PlaceName}":`);
    const Api_Key = process.env.GOOGLE_API_KEY //get Api key from .env
    console.log(Api_Key);


}