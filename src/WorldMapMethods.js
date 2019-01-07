const testPlaces = [];
for (let i = 0; i < 10; i++) {
  const place = { name: `testPlace-${i}`, color: "accent-1", location: [0, i] };
  testPlaces.push(place);
}

// console.log(testPlaces);

const path =
  "M230,10 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M300,10 h0 M320,10 h0 M340,10 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M210,20 h0 M230,20 h0 M250,20 h0 m10,0 h0 M280,20 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M180,30 h0 M210,30 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M270,30 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M140,40 h0 M200,40 h0 M220,40 h0 m10,0 h0 m10,0 h0 M270,40 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M150,50 h0 M170,50 h0 m10,0 h0 m10,0 h0 m10,0 h0 M220,50 h0 m10,0 h0 m10,0 h0 M300,50 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M130,60 h0 m10,0 h0 m10,0 h0 M170,60 h0 M190,60 h0 M210,60 h0 m10,0 h0 m10,0 h0 M250,60 h0 M310,60 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M150,70 h0 m10,0 h0 m10,0 h0 M200,70 h0 M230,70 h0 m10,0 h0 m10,0 h0 m10,0 h0 M320,70 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M10,80 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M170,80 h0 M190,80 h0 m10,0 h0 m10,0 h0 m10,0 h0 M250,80 h0 m10,0 h0 M310,80 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M30,90 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M250,90 h0 m10,0 h0 m10,0 h0 M300,90 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M30,100 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M250,100 h0 m10,0 h0 M310,100 h0 m10,0 h0 m10,0 h0 M20,110 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M240,110 h0 m10,0 h0 M320,110 h0 M30,120 h0 m10,0 h0 M90,120 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M240,120 h0 m10,0 h0 M270,120 h0 M30,130 h0 M90,130 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M250,130 h0 m10,0 h0 m10,0 h0 M110,140 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M240,140 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M120,150 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M120,160 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M220,160 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M290,160 h0 m10,0 h0 M120,170 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M240,170 h0 m10,0 h0 m10,0 h0 m10,0 h0 M120,180 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M130,190 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M130,200 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M140,210 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 m10,0 h0 M160,220 h0 m10,0 h0 m10,0 h0 M230,220 h0 M170,230 h0 m10,0 h0 M170,240 h0 m10,0 h0 M210,240 h0 M240,240 h0 M190,250 h0 m10,0 h0 m10,0 h0 M220,260 h0 M230,270 h0";

const dot1 = "M230, 10 h0";
const dot2 = "M240, 10 h0";

const Australia = {
  name: "Australia",
  origin: [74, 32],
  area: [[4, 0], [7, 1], [15, 7], [13, 9], [0, 6], [0, 2]],
  dots: [
    [4, 0, 1],
    [2, 1, 6],
    [0, 2, 9],
    [0, 3, 10],
    [0, 4, 10],
    [0, 5, 3],
    [5, 5, 5],
    [5, 6, 4],
    [15, 7, 1],
    [14, 8, 1],
    [13, 9, 1]
  ]
};

const NorthAmerica = {
  name: "North America",
  origin: [0, 0],
  area: [[21, 0], [39, 0], [39, 6], [22, 26], [16, 23], [2, 12], [0, 7]],
  dots: [
    [22, 0, 6],
    [29, 0, 1],
    [31, 0, 1],
    [33, 0, 5],
    [20, 1, 1],
    [22, 1, 1],
    [24, 1, 2],
    [27, 1, 13],
    [17, 2, 1],
    [20, 2, 5],
    [26, 2, 13],
    [13, 3, 1],
    [19, 3, 1],
    [21, 3, 3],
    [26, 3, 14],
    [14, 4, 1],
    [16, 4, 4],
    [21, 4, 3],
    [29, 4, 11],
    [12, 5, 3],
    [16, 5, 1],
    [18, 5, 1],
    [20, 5, 3],
    [24, 5, 1],
    [30, 5, 8],
    [14, 6, 3],
    [19, 6, 1],
    [22, 6, 4],
    [31, 6, 8],
    [0, 7, 15],
    [16, 7, 1],
    [18, 7, 4],
    [24, 7, 2],
    [30, 7, 7],
    [2, 8, 20],
    [24, 8, 3],
    [29, 8, 5],
    [2, 9, 20],
    [24, 9, 2],
    [30, 9, 3],
    [1, 10, 18],
    [23, 10, 2],
    [31, 10, 1],
    [2, 11, 2],
    [8, 11, 11],
    [23, 11, 2],
    [26, 11, 1],
    [2, 12, 1],
    [8, 12, 13],
    [24, 12, 3],
    [10, 13, 12],
    [23, 13, 5],
    [11, 14, 17],
    [11, 15, 9],
    [21, 15, 6],
    [28, 15, 2],
    [11, 16, 11],
    [23, 16, 4],
    [11, 17, 14],
    [12, 18, 11],
    [12, 19, 12],
    [13, 20, 9],
    [15, 21, 3],
    [22, 21, 1],
    [16, 22, 2],
    [16, 23, 2],
    [20, 23, 1],
    [23, 23, 1],
    [18, 24, 3],
    [21, 25, 1],
    [22, 26, 1]
  ]
};

const FACTOR = 10;

const maxCoordinate = (a, b) => [Math.max(a[0], b[0]), Math.max(a[1], b[1])];

const buildContinentState = ({ area, dots, origin }) => {
  let extent = [...origin];
  const stateDots = dots
    .map(segment => {
      const count = segment[2];
      const spots = [];
      for (let i = 0; i < count; i += 1) spots.push("h0");
      const dotCommands = spots.join(" m10,0 ");
      const x = FACTOR * (origin[0] + segment[0] + 1);
      const y = FACTOR * (origin[1] + segment[1] + 1);
      extent = maxCoordinate(extent, [
        origin[0] + segment[0] + segment[2],
        origin[1] + segment[1]
      ]);
      return `M${x},${y} ${dotCommands}`;
    })
    .join(" ");
  return stateDots;
};

const MAP_LAT_BOTTOM = -50.0; // empirically determined
const MAP_LAT_BOTTOM_RAD = (MAP_LAT_BOTTOM * Math.PI) / 180;
const MAP_LON_LEFT = -171.0; // empirically determined
const MAP_LON_RIGHT = 184.0; // empirically determined
const MAP_LON_DELTA = MAP_LON_RIGHT - MAP_LON_LEFT;

const origin = [0, 0];
const extent = [93, 44];

const mapValues = extent => {
  const mapRadius = ((extent[0] / MAP_LON_DELTA) * 360) / (2 * Math.PI);
  const mapOffsetY = Math.round(
    (mapRadius / 2) *
      Math.log(
        (1 + Math.sin(MAP_LAT_BOTTOM_RAD)) / (1 - Math.sin(MAP_LAT_BOTTOM_RAD))
      )
  );
  return { mapRadius, mapOffsetY };
};

const latLonToCoord = (latLon, origin, extent) => {
  const { mapRadius, mapOffsetY } = mapValues(extent);
  const x = Math.round(
    ((latLon[1] - MAP_LON_LEFT) * extent[0]) / MAP_LON_DELTA
  );
  const latitudeRad = (latLon[0] * Math.PI) / 180;
  const y =
    extent[1] +
    mapOffsetY -
    Math.round(
      (mapRadius / 2) *
        Math.log((1 + Math.sin(latitudeRad)) / (1 - Math.sin(latitudeRad)))
    );
  return [x, y]; // the coordinate value of this point on the map image
};

export const coordToLatLon = (coord, origin, extent) => {
  const { mapRadius, mapOffsetY } = mapValues(extent);
  const a = (extent[1] + mapOffsetY - coord[1]) / mapRadius;
  const lat = (180 / Math.PI) * (2 * Math.atan(Math.exp(a)) - Math.PI / 2);
  const lon = (coord[0] * MAP_LON_DELTA) / extent[0] + MAP_LON_LEFT;
  return [lat, lon];
};

console.log(latLonToCoord([72, -85], origin, extent));
console.log(coordToLatLon([23, 1], origin, extent));


export const deconstructContinentState = () => {
  const svgString = buildContinentState(NorthAmerica);
  const svgArray = svgString.split(" ");
  const svgArrayNoh0 = svgArray.reduce((result, element) => {
    if (element !== "h0") {
      result.push(element);
    }
    return result;
  }, []);
  const svgArrayNoM = svgArrayNoh0.map(element => {
    return element.replace("M", "");
  });
  const arrays = svgArrayNoM.map(element => {
    const splitUp = element.split(',')
    return [parseInt(splitUp[0]), parseInt(splitUp[1])]
  })

  const svgArrayFull = arrays.reduce((result, element, i) => {
    if (element[1] === 0) {
      // This is a dot that needs to be added manually
      let numberOfManualDots = 0
      // Count how many dots need to be created manually before the next real dot
      // 100 is just an arbitrary number larger than any number of manual dots you'll ever encounter
      for (let k = 0; k < 100; k++) {
        if (arrays[i + k][1] === 0) {
          numberOfManualDots++
        } else {
          break
        }
      }

      // Now that we know how many dots need to be added manually,
      // create an array for each one
      for (let l = 1; l < numberOfManualDots + 1; l++) {
        // The last true dot in this row
        const baseDot = arrays[i - 1]

        // Make a new array where the first element is the base dot's first element plus 10
        const newDotArray = [baseDot[0] + (l * 10), baseDot[1]]
        result.push(newDotArray)
      }



      // let previousElement = arrays[i - 1];
      // if (previousElement[0] === 0) {
      //   for (let j = 1; j < 100; j++) {
      //     previousElement = arrays[i - j];
      //     if (previousElement[0] !== 0) {
      //       break;
      //     }
      //   }
      // }
      // if (previousElement === arrays[i - 1]) {
      //   previousElement = [arrays[i - 1][0] + 10, arrays[i - 1][1]]
      // }
      // result.push(previousElement);


      // result.push(element)
    } else {
      result.push(element);
    }
    return result;
  }, []);


  // const segments = svgArray.reduce((result, element, i) => {
  //   if (element === "m10,0") {
  //     console.log(svgArray[i - 2]);
  //   }
  //   const array = element.replace("M", "").split(",");
  //   // console.log(array)

  //   const x = parseInt(array[0]) / FACTOR;
  //   const y = parseInt(array[1]) / FACTOR;

  //   const latLon = coordToLatLon([x, y], [0, 0], [93, 44]);

  //   result.push(latLon);
  //   return result;
  // }, []);

  // return segments;

  const finalArray = svgArrayFull.reduce((result, element) => {
    if (element[1] !== 0) {
      result.push(element)
    }
    return result
  }, [])

  return finalArray
};

// console.log(buildContinentState(Australia));

const NorthAmericaPoints = deconstructContinentState(NorthAmerica)

console.log(NorthAmericaPoints)

export const NorthAmericaCoordinates = NorthAmericaPoints.map(coordinates => {
  return coordToLatLon(coordinates, origin, extent)
})

console.log(NorthAmericaCoordinates)
