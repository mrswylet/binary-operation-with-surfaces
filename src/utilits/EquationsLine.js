export default class EquationsLine {
  constructor(a, b) {
    [this.x1, this.y1] = a;
    [this.x2, this.y2] = b;
    this.b = (this.y1 - this.y2);
    this.k = (this.x2 - this.x1);
    this.c = (this.x1 * this.y2 - this.x2 * this.y1);
  }

  /**
   * (y1 - y2)x + (x2 - x1)y + (x1*y2 - x2*y1) = 0
   * bx + ky + c = 0
   * где:
   * b = (y1 - y2);
   * k = (x2 - x1);
   * c = (x1*y2 - x2*y1);
   * y = (-bx)/k + -c/k
   * @param x
   * @returns {number}
   */
  getYFromX(x) {
    return (-1 * this.b * x) / this.k + -1 * this.c / this.k;
  }

  /**
   * x = (-kx)/b + -c/b
   * @param x
   * @returns {number}
   */
  getXFromY(y) {
    return (-1 * this.k * y) / this.b + -1 * this.c / this.b;
  }

  /**
   *
   * @param instanceEquationsLine {EquationsLine}
   * @returns {boolean}
   */
  gitPointIntersection(instanceEquationsLine) {
    try {
      if (!(instanceEquationsLine instanceof EquationsLine)) {
        throw new Error();
      }

      const anotherB = instanceEquationsLine.b;
      const anotherK = instanceEquationsLine.k;
      const anotherC = instanceEquationsLine.c;

      let resultX = null;
      let resultY = null;
    } catch (error) {
      console.error(error)
    }

  }

  toString() {
    return `${this.b}x + ${this.k}y + ${this.c} = 0`;
  }

  toSource() {
    return this.toString();
  }

  valueOf() {
    return this.toString();
  }
}
