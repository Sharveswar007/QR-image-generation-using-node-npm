import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([{ message: "Enter a URL: ", name: "url" }])
  .then(({ url }) => {
    qr.image(url).pipe(fs.createWriteStream('URL_QR.png'))
    fs.writeFile('URL.txt', url, (err) => {
      if (err) throw err;
      console.log('✅ URL saved to URL.txt')
