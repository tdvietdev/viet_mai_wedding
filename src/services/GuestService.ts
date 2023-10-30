import Database from "../sdk/Database";

const db = Database.ref("/sheets/khach_moi");

class GuestService {
  getAll() {
    return db;
  }
  
  get(id: string) {
    return db.child(id)
  }
  create(tutorial: any) {
    return db.push(tutorial);
  }
  
  update(key: any, value: any) {
    return db.child(key).update(value);
  }
  
  delete(key: any) {
    return db.child(key).remove();
  }
  
  deleteAll() {
    return db.remove();
  }
}

export default new GuestService();