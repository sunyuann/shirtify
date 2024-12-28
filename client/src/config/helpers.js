export const downloadCanvasToImage = () => {
  const canvas = document.querySelector("canvas");
  const dataURL = canvas.toDataURL();
  const link = document.createElement("a");

  link.href = dataURL;
  link.download = "canvas.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// reads a file as a base64 encoded string
/*
Promise created:
STEP 1: create new instance of FileReader (fileReader is just an object at this point, not doing anything i.e. no reading/processing yet)

STEP 2: fileReader.onload defines what should happen once the file is successfully read (i.e. adding an event handler). This is important to put BEFORE step 3 because if we put step 2 after step 3 and the file is read before the event handler is added, the event handler will not be triggered.

STEP 3: This step actually starts reading the file (asynchronous i.e. happens in background). After the file finishes reading, onload function will be triggered (from step 2) and the Promise will be resolved with the result (fileReader.result).

NOTE: resolve() tells the Promise that the operation has finished (and the result is available).
*/
export const reader = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
  });

// gets contrasting color (for text) based on the background color
export const getContrastingColor = (color) => {
  // Remove the '#' character if it exists
  const hex = color.replace("#", "");

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white depending on the brightness
  return brightness > 128 ? "black" : "white";
};
