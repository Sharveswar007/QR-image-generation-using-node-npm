import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([{ message: "Enter a URL: ", name: "url" }])
  .then(({ url }) => {
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('URL_QR.png'));
    fs.writeFile('URL.txt', url, (err) => {
      if (err) throw err;
      console.log('URL saved to URL.txt');
    });
  })
  .catch((err) => {
    console.error('Error:', err);
  });
