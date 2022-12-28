import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserFactory from 'Database/factories/UserFactory'



export default class extends BaseSeeder {
  public async run () {
    const user = UserFactory.createMany(3);
  }
}
