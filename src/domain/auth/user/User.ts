export class User {
  private id: number | undefined;
  email: string;
  password: string;

  constructor(payload: { id?: number, email: string, password: string }) {
    this.email = payload.email;
    this.password = payload.password;
    this.id = payload.id;
  }
}



