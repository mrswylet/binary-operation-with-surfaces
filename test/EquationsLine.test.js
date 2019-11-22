import {expect} from "chai";
import EquationsLine from "../src/utilits/EquationsLine";

describe("Change class EquationsLine from points (0; 0) and (3; 0)", function() {
  const AB = new EquationsLine([0, 0], [3, 0]);
  it("Get Y coordinate from X = 1", function() {
    expect(AB.getYForX(1)).to.equal(0);
  });
  it("Get Y coordinate from X = 3", function() {
    expect(AB.getYForX(3)).to.equal(0);
  });
  it("Get Y coordinate from X = -1", function() {
    expect(AB.getYForX(-1)).to.equal(1);
  });
});
