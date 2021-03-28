export default class Model<T> {
  constructor(private _id: T) {}

  get id() {
    return this._id;
  }
}
