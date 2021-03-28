import Model from "~/models/Model";

export default class Todo extends Model<number> {
  name: string;

  constructor(id: number, name: string) {
    super(id);
    this.name = name;
  }
}
