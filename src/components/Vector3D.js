export default class Vector3D {
    constructor(x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._coords = [this._x, this._y, this._z];
    }

    //квадрат длины вектора (очень быстро для сравнения двух векторов)
    squareLength() {
        return this._x * this._x + this._y * this._y +this._z * this._z;
    }

    //получение длины вектора
    magnitude() {
        return Math.sqrt(this.squareLength());
    }

    //нормализация вектора
    normalize() {
        const magnitude = magnitude();
        this._x /= magnitude;
        this._y /= magnitude;
        this._z /= magnitude;
    }

    //скалярное произведение
    dotProduct(otherVector3D) {
        return this._x * otherVector3D._x
            + this._y * otherVector3D._y
            + this._z * otherVector3D._z;
    }

    //векторное произведение
    multiplyWithVector(otherVector3D) {
        this._x = this._y * otherVector3D._z - this._z * otherVector3D._y;
        this._y = -(this._x * otherVector3D._z - this._z * otherVector3D._x);
        this._z = this._x * otherVector3D._y - this._y * otherVector3D._x;
    }

    //векторное произведение
    multiplyWithNumber(number) {
        this._x *= number;
        this._y *= number;
        this._z *= number;
    }

    //длины векторов равны
    hasSameLength(otherVector3D) {
        return this.magnitude() === otherVector3D.magnitude();
    }

    //вектор короче другого
    isShorterThan(otherVector3D) {
        return this.magnitude() < otherVector3D.magnitude();
    }

    //вектор длиннее другого
    isLongerThan(otherVector3D) {
        return this.magnitude() > otherVector3D.magnitude();
    }

    //сравнение векторов
    compare(otherVector3D) {
        if (this.hasSameLength(otherVector3D))
            return 0;
        else if (this.isLongerThan(otherVector3D))
            return 1;
        else if (this.isShorterThan(otherVector3D))
            return -1;
    }

    sum(otherVector3D) {
        this._x += otherVector3D._x;
        this._y += otherVector3D._y;
        this._z += otherVector3D._z;
    }

    print() {
        console.log(`Vector3D(${this._x}, ${this._y}, ${this._z})`);
    }
}