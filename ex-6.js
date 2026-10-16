const carCollection = ['toyota', 'fiat', 'honda', 'bmw'];

function updateCarCollection(carBrand) {
  // Start coding here
  if (carCollection.includes(carBrand)) {
    return `${carBrand} has already existed in the ${carCollection.indexOf(carBrand) + 1} position of car collection.`;
  } else {
    carCollection.push(carBrand);
    return `new car collection is : ${carCollection}`;
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection('audi'));
//new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection('toyota'));
//toyota has already existed in the 1 position of car collection.

//My steps:
//1. .includes - check have or not have
//2. <if> have - return text
//3. <else> not have - .push to the end of the current array
//   and return text after included into the carCollection
//4. output each cases
