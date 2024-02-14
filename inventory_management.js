/** An inventory item.
 * @typedef {Object} InventoryItem
 * @property {string} sku
 * @property {string} item
 * @property {string} category
 * @property {number} quantity
 */

const ItemCreator = (function () {
  /** @param {string} itemName */
  function isValidItemName(itemName) {
    return itemName.replaceAll(" ", "").length >= 5;
  }
  /** @param {string} categoryName */
  function isValidCategory(categoryName) {
    return !(categoryName.match(" ") && categoryName.length >= 5);
  }

  /** @param {string} itemName
   * @param {string} categoryName
   * @returns {string}
   */
  function generateSku(itemName, categoryName) {
    return itemName
      .replaceAll(" ", "")
      .slice(0, 3)
      .concat(categoryName.slice(0, 2))
      .toUpperCase();
  }

  return {
    /**
     * @param {string} item
     * @param {string} category
     * @param {number} quantity
     * @returns {InventoryItem}
     */
    createItem(item, category, quantity) {
      if (!(isValidItemName(item) && isValidCategory(category))) return false;
      return { sku: generateSku(item, category), item, category, quantity };
    },
  };
})();

const ItemManager = (function () {
  return {
    items: new Map(),

    /** @param {string} item
     * @param {string} category
     * @param {number} quantity
     */
    create(item, category, quantity) {
      let newItem = ItemCreator.createItem(item, category, quantity);
      if (!newItem) return false;
      this.items.set(newItem.sku, newItem);
    },

    /** @param {string} sku
     * @param {Object} updateObj
     */
    update(sku, updateObj) {
      Object.assign(this.items.get(sku), updateObj);
    },

    /** @param {string} sku */
    delete(sku) {
      this.items.delete(sku);
    },

    /** @param {string} sku
     * @returns {InventoryItem}
     */
    getItem(sku) {
      return this.items.get(sku);
    },

    inStock() {
      return [...this.items.entries()]
          .reduce((filteredItemsArray, [, { item, quantity }]) => {
            if (quantity > 0) return filteredItemsArray.concat(item);
            else return filteredItemsArray;
          }, [])
          .join();
    },

    itemsInCategory(category) {
      console.log(
        [...this.items.entries()]
          .filter(([, { category: itemCategory }]) => itemCategory === category)
          .map(([, { item }]) => item)
          .join(),
      );
    },
  };
})();

const ReportManager = (function () {
  return {
    /** @param {ItemManager} items */
    init(items) {
      this.items = items;
    },
    /**
     * An ItemInfoFunc function.
     * @typedef {Function} ItemInfoFunc
     * @param {string} sku
     * @returns {Item[]}

    /**
     * A Reporter object.
     * @typedef {Object} Reporter
     * @property {ItemManager} items
     * @property {ItemInfoFunc} itemInfo
     */

    /**
     * @param {string} sku
     * @returns {Reporter}
     */
    createReporter(sku) {
      /**
       * @param {InventoryItem} itemObj
       * @returns {string}
       */
      function generateItemDisplayString(itemObj) {
        return Object.entries(itemObj)
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n",
        );
      }

      let self = this;
      return {
        /** @property {ItemInfoFunc} itemInfo */
        itemInfo() {
          console.log(generateItemDisplayString(self.items.getItem(sku)));
        },
      };
    },
    reportInStock() {
      console.log(this.items.inStock());
    }
  };
})();

ItemManager.create("basket ball", "sports", 0); // valid item
ItemManager.create("asd", "sports", 0);
ItemManager.create("soccer ball", "sports", 5); // valid item
ItemManager.create("football", "sports");
ItemManager.create("football", "sports", 3); // valid item
ItemManager.create("kitchen pot", "cooking items", 0);
ItemManager.create("kitchen pot", "cooking", 3); // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);
// // logs soccer ball,football,kitchen pot
ReportManager.reportInStock();
//
ItemManager.update('SOCSP', { quantity: 0 });
// // returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// // football,kitchen pot
ReportManager.reportInStock();
//
// // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory("sports");
//
ItemManager.delete('SOCSP');
// // returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;
//
let kitchenPotReporter = ReportManager.createReporter("KITCO");
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3
//
ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10
