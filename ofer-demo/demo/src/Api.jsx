const DATA = [
  {
    id: "1",
    description: 'My great task',
    status: 'Open'
  },
  {
    id: "2",
    description: 'Another task',
    status: 'In progress'
  },
  {
    id: "3",
    description: 'Yet another task',
    status: 'Done'
  },
]

export default class Api {
  static getIds() {
    return DATA.map(item => item.id);
  }

  static getItem(id) {
    return DATA.find(item => item.id === id);
  }

  static getListItems() {
    return DATA;
  }

  static addItem(item) {
    DATA.push(item);
  }

  static updateItem(item) {
    const index = DATA.findIndex(x => x.id === item.id);
    if (index === -1) {
      throw new Error("Item not found with id=" + item.id)
    }
    DATA[index] = item;
  }

  static deleteItem(id) {
    const index = DATA.findIndex(x => x.id === id);
    if (index === -1) {
      throw new Error("Item not found with id=" + id)
    }
    DATA.splice(index, 1);
  }
}