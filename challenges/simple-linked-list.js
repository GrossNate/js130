class Element {
  /**
   * @property {*} data
   * @property {Element} linkNext
   */
  constructor(data, linkNext = null) {
    this.data = data;
    this.linkNext = linkNext;
  }

  datum() {
    return this.data;
  }

  isTail() {
    return this.linkNext === null;
  }

  /** @return {Element} */
  next() {
    return this.linkNext;
  }
}

class SimpleLinkedList {
  #headElement;

  constructor() {
    this.#headElement = null;
  }

  /** @return {Element} */
  head() {
    return this.#headElement;
  }

  /** @return {number} */
  size() {
    if (this.head() === null) return 0;
    let size = 1;
    let currentElement = this.head();
    while (!currentElement.isTail()) {
      size += 1;
      currentElement = currentElement.next();
    }
    return size;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(datum) {
    this.#headElement = new Element(datum, this.head());
  }

  peek() {
    return this.head() && this.head().datum();
  }

  pop() {
    if (this.isEmpty()) return null;
    let returnDatum = this.head().datum();
    this.#headElement = this.head().next(); 
    return returnDatum;
  }

  /** @param {Array} listArray
   *  @return {SimpleLinkedList}
  */
  static fromArray(listArray) {
    let newList = new SimpleLinkedList();
    if (Array.isArray(listArray)) {
      listArray.toReversed().forEach(datum => newList.push(datum));
    }
    return newList;
  }

  toArray() {
    let returnArray = [];
    let elementPointer = this.head();
    while (elementPointer !== null) {
      returnArray.push(elementPointer.datum());
      elementPointer = elementPointer.next();
    }
    return returnArray;
  }

  /** @return {SimpleLinkedList} */
  reverse() {
    return SimpleLinkedList.fromArray(this.toArray().reverse());
  }
}

module.exports = {
  Element,
  SimpleLinkedList,
};
