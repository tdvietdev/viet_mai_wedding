import Database from "../sdk/Database";

const db = Database.ref("/sheets/wishes");

class WishService {
  getAll() {
    return db;
  }
  
  get(id) {
    return db.child(id)
  }
  create(tutorial) {
    return db.push(tutorial);
  }
  
  update(key, value) {
    return db.child(key).update(value);
  }
  
  delete(key) {
    return db.child(key).remove();
  }
  
  deleteAll() {
    return db.remove();
  }
}

export default new WishService();