const Robot = (function () {
  let staticPrivateRobotNameRegistry = [];
  return class {
    static generateRobotName() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65) +
        String.fromCharCode(Math.floor(Math.random() * 26) + 65) +
        Math.floor(Math.random() * 1000).toString().padStart(3, "0");
    }
    static getNewRobotName() {
      let newName
      do {
        newName = Robot.generateRobotName();
      } while (staticPrivateRobotNameRegistry.includes(newName))
      staticPrivateRobotNameRegistry.push(newName);
      return newName;
    }
    constructor() {
      this.robotName = Robot.getNewRobotName();
    }
    name() {
      return this.robotName;
    }
    reset() {
      this.robotName = Robot.getNewRobotName();
    }
  };
})();

module.exports = Robot;

