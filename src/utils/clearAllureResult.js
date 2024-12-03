import fs from 'fs';
import path from 'path';
 
export function clearAllureResultsFolder() {
  const allureResultsPath = path.resolve('allure-results');
 
  if (fs.existsSync(allureResultsPath)) {
    const files = fs.readdirSync(allureResultsPath);
    files.forEach(file => {
      const filePath = path.join(allureResultsPath, file);
      if (fs.lstatSync(filePath).isDirectory()) {
        fs.rmdirSync(filePath, { recursive: true });
      } else {
        fs.unlinkSync(filePath);
      }
    });
    console.log('Allure results folder cleared.');
  } else {
    console.log('Allure results folder does not exist.');
  }
}