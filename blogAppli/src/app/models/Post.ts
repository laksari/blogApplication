export class Post {

  createDate: Date;
  constructor(public titre: string, public contenu: string, public loveIts: number) {
    this.createDate = new Date();
  }
}
