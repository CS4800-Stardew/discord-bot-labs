//parser fetches json objects from the form, stored in backend where

function parseForm() {
    // Get the command name from the form
    const commandName = document.getElementById('commandName').value;

    // Fetch the logic for the specified command from the 'actions' directory
    fetch(`actions/${commandName}.js`)
        .then(response => response.text())
        .then(actionLogic => {
            // Need to come up with a skeleton discord bot structure? 
            replaceBotLogic(actionLogic);
        })
        .catch(error => {
            console.error(`Error fetching action logic: ${error}`);
        });
}

function replaceBotLogic(newLogic) {
    // Replace the existing logic in your Discord bot program with the new logic
    fetch('bot.js')
        .then(response => response.text())
        .then(botCode => {
            const updatedBotCode = botCode.replace(/\/\/ START_ACTION_LOGIC([\s\S]*?)\/\/ END_ACTION_LOGIC/, `// START_ACTION_LOGIC\n${newLogic}\n// END_ACTION_LOGIC`);

            // Save the updated bot code
            saveUpdatedBotCode(updatedBotCode);
        })
        .catch(error => {
            console.error(`Error fetching bot code: ${error}`);
        });
}

// How to save to file?