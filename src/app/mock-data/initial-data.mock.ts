import { ContactModel } from '../models/contact.model';

export const contactMock: ContactModel[] = [
  {
    id: '1',
    name: 'John',
    surname: 'Doe',
    phone: '1234567890',
    dateOfBirth: new Date(1990, 1, 1),
    email: 'john.doe@example.com'
  },
  {
    id: '2',
    name: 'Jane',
    surname: 'Doe',
    phone: '0987654321',
    dateOfBirth: new Date(1992, 2, 2),
    email: 'jane.doe@example.com'
  },
  {
    id: '3',
    name: 'Bob',
    surname: 'Smith',
    phone: '1122334455',
    dateOfBirth: new Date(1985, 5, 5),
    email: 'bob.smith@example.com'
  },
  {
    id: '4',
    name: 'Alice',
    surname: 'Johnson',
    phone: '1223344556',
    dateOfBirth: new Date(1980, 4, 4),
    email: 'alice.johnson@example.com'
  },
  {
    id: '5',
    name: 'Charlie',
    surname: 'Brown',
    phone: '1334455667',
    dateOfBirth: new Date(1983, 3, 3),
    email: 'charlie.brown@example.com'
  },
  {
    id: '6',
    name: 'David',
    surname: 'Williams',
    phone: '1445566778',
    dateOfBirth: new Date(1982, 2, 2),
    email: 'david.williams@example.com'
  },
  {
    id: '7',
    name: 'Eve',
    surname: 'Davis',
    phone: '1556677889',
    dateOfBirth: new Date(1981, 1, 1),
    email: 'eve.davis@example.com'
  },
  {
    id: '8',
    name: 'Frank',
    surname: 'Miller',
    phone: '1667788990',
    dateOfBirth: new Date(1980, 12, 12),
    email: 'frank.miller@example.com'
  },
  {
    id: '9',
    name: 'Grace',
    surname: 'Wilson',
    phone: '1778899001',
    dateOfBirth: new Date(1979, 11, 11),
    email: 'grace.wilson@example.com'
  },
  {
    id: '10',
    name: 'Harry',
    surname: 'Moore',
    phone: '1889900112',
    dateOfBirth: new Date(1978, 10, 10),
    email: 'harry.moore@example.com'
  },
];
