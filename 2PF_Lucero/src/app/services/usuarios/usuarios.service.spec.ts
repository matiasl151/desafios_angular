import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { User } from 'src/app/interfaces/users.interface';

import { TestBed } from '@angular/core/testing';

import { UsuariosService } from './usuarios.service';

describe('UsuariosService', () => {
  let service: UsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuariosService],
    });
    service = TestBed.inject(UsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getUsuarios should return the list of usuarios', (done: DoneFn) => {
    let users: User[];
    service.getUsuarios().subscribe((usuarios: User[]) => {
      users = usuarios;
      expect(users.length).toBeGreaterThan(0);
      done();
    });
  });

  it('#getUsuario should return one usuario', (done: DoneFn) => {
    service.getUsuario(1).subscribe(usuario => {
      expect(usuario.id).toBe(1);
      done();
    });
  });

  it('#addUsuario should add a new usuario', (done: DoneFn) => {
    const usuario = {
      email: 'juan@example.com',
      password: '123456',
      username: 'juan',
      id: 4,
    } as User;
    service.addUsuario(usuario).subscribe(usuario => {
      expect(usuario.id).toBe(4);
      done();
    });
  });

  it('#editUsuario should edit an usuario', (done: DoneFn) => {
    const usuario = {
      email: 'juan15@example.com',
      password: '123456',
      username: 'juan15',
      id: 4,
    } as User;
    service.editUsuario(usuario.id, usuario).subscribe(usuario => {
      expect(usuario.id).toBe(4);
      done();
    });
  });

  it('#deleteUsuario should delete an usuario', (done: DoneFn) => {
    service.deleteUsuario(4).subscribe(usuario => {
      expect(usuario.id).toBe(4);
      done();
    });
  });

  it('#getLastId should return the last id', (done: DoneFn) => {
    let users: User[];
    service.getUsuarios().subscribe(usuarios => {
      users = usuarios;
      expect(service.getLastId()).toBe(users.length);
      done();
    });
  });
});
