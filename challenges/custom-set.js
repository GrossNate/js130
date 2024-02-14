class CustomSet {

  constructor(elements) {
    let items = [];
    this.add = (function () {
      return function (element) {
        if (!this.contains(element)) {
          items.push(element);
        }
        return this;
      };
    })();
    this.reduce = (function () {
      return function (fn, initialValue) {
        return items.reduce(fn, initialValue);
      };
    })();
    // If the argument passed to the constructor isn't an array, we just return
    // an empty CustomSet.
    if (Array.isArray(elements)) {
      elements.forEach((element) => {
        this.add(element);
      });
    }
  }

  getLength() {
    return this.reduce((length) => length + 1, 0);
  }

  isEmpty() {
    return this.getLength() === 0;
  }

  contains(element) {
    return this.reduce((accum, value) => accum || (element === value), false);
  }

  isSubset(customSet) {
    return this.reduce(
      (accum, element) => accum && customSet.contains(element),
      true,
    );
  }

  isDisjoint(customSet) {
    return !this.reduce(
      (accum, element) => accum || customSet.contains(element),
      false,
    );
  }

  isSame(customSet) {
    return (this.getLength() === customSet.getLength()) &&
      this.isSubset(customSet);
  }

  intersection(customSet) {
    return this.reduce((accum, element) => {
      if (customSet.contains(element)) {
        return accum.add(element);
      } else {
        return accum;
      }
    }, new CustomSet());
  }

  difference(customSet) {
    return this.reduce((accum, element) => {
      if (customSet.contains(element)) {
        return accum;
      } else {
        return accum.add(element);
      }
    }, new CustomSet());
  }

  union(customSet) {
    return this.reduce(
      (accum, element) => accum.add(element),
      customSet.reduce(
        (accum, element) => accum.add(element),
        new CustomSet(),
      ),
    );
  }
}

module.exports = CustomSet;
