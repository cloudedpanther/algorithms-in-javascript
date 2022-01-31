// const INPUT_1 = [
//   "This is String",
//   "SPACE    1    SPACE",
//   " S a M p L e I n P u T     ",
//   "0L1A2S3T4L5I6N7E8",
// ];

// const input = INPUT_1;

// const solution = (input) => {
//   const answer = [];
//   input.forEach((str) => {
//     let [lower, upper, number, space] = [0, 0, 0, 0];
//     str.split("").forEach((s) => {
//       const ascii = s.charCodeAt(0);
//       if (ascii === 32) space++;
//       else if (48 <= ascii && ascii <= 57) number++;
//       else if (65 <= ascii && ascii <= 90) upper++;
//       else lower++;
//     });
//     answer.push(`${lower} ${upper} ${number} ${space}`);
//   });
//   console.log(answer.join("\n"));
// };

// solution(input);
