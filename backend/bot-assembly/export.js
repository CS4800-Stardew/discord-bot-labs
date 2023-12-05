const express = require('express');
const app = express();
const fs = require('fs');

const PORT = 3000;
const jsonData = {
    "sourceFilePath": "../actions/addRole.js",
    "destinationFilePath": "./output.txt"
}
const sourceFilePath = jsonData.sourceFilePath;
const destinationFilePath = jsonData.destinationFilePath;

app.get('/export', (req, res) => {

    // Replace this with your logic to generate the text content
    fs.readFile(sourceFilePath, 'utf8', (err, sourceFileData) => {
        if (err) {
            console.error('Error reading source file:', err);
            return;
        }

        // Write the content to the destination file
        fs.writeFile(destinationFilePath, sourceFileData, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to destination file:', err);
                return;
            }
            console.log('File copied successfully!');
        });

        // Set headers to indicate that a file is being sent
        res.setHeader('Content-disposition', 'attachment; filename=output.txt');
        res.setHeader('Content-type', 'text/plain');

        // Send the text content as the response
        res.send(sourceFileData);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});