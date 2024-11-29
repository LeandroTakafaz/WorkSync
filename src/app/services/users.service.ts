import { Injectable } from '@angular/core';

import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  name: string = 'Leandro Takafaz';

  user: any = {
    name: 'Leandro Takafaz',
    email: 'leandro@gmail.com',
    sector: 'Tecnologia',
    role: 'Desenvolvedor Full Stack',
  }

  constructor(private dataBaseStore: AngularFirestore) { }

  getAllUsers() {
    return this.dataBaseStore.collection('users', user => user.orderBy('name')).valueChanges({idField: 'firebaseId'});
  }

  addUser(user: any) {
    return this.dataBaseStore.collection('users').add(user);
  }

  update(userId: string, user: any) {
    return this.dataBaseStore.collection('users').doc('userId').update(user);
  }

  deleteUser(userId: string) {
    return this.dataBaseStore.collection('users').doc(userId).delete();
  }

}
