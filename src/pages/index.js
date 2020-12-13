import '../pages/index.css';

import Vector3D from '../components/Vector3D';

const vector1 = new Vector3D(1,2,3);
console.log("Vector1");
vector1.print();

const vector2 = new Vector3D(1,2,3);
console.log("Vector2");
vector2.print();

vector1.sum(vector2);
console.log("Vector1 + Vector2");
vector1.print();

vector1.multiplyWithNumber(3);
console.log("Vector1 * 3");
vector1.print();

console.log(`Dot product ${vector1.dotProduct(vector2)}`);
