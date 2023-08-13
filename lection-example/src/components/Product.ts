//import { nanoid } from "nanoid";

interface Product {
    id: string;
    name: string;
    price: number;
}

// export const productstore: readonly Product[] = [
//     { id: nanoid(), name: "Shift", price: 724.72 },
//     { id: nanoid(), name: "Table", price: 223.7 }
// ]

// const timedTest = async (testName, wrappedTest timeout) => {
//     test(
//         testName,
//         async () => {
//             const start = Date.now();
//             await wrappedTest(mockTrack);
//             const end = Date.now();

//             console.log(`elapsed time in ms: ${end - start}`);
//         },
//         timeout
//     )
// }
