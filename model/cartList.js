function CartList() {
  this.itemArray = [];

  this.add = (item) => {
    this.itemArray = [...this.itemArray, item];
  };

  this.isExist = (id) => {
    let isExist = false;
    this.itemArray.map((item) => {
      if (item.id === id) {
        isExist = true;
      }
    });
    console.log(isExist);
    return isExist;
  };

  this.findIndex = (id) => {
    let indexFind = -1;
    this.itemArray.map((item, index) => {
      if (item.id === id) {
        indexFind = index;
      }
    });
    return indexFind;
  };

  this.deleteItem = (id) => {
    let index = this.findIndex(id);
    if (index > -1) {
      this.itemArray.splice(index, 1);
    }
  };

  this.quantityUp = (item) => {
    this.itemArray[this.findIndex(item.id)].quantityOrder++;
  };
}
