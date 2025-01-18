import { Component } from '@angular/core';
import { UserCardComponent } from "../user-card/user-card.component";

@Component({
  selector: 'app-users-list',
  imports: [UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
   users = [
    {
      id: 1,
      username: 'Alice Johnson',
      email: 'alice.johnson@gmail.com',
      phone: '+20-202-555-0123',
      userType: 'Admin',
      image: 'https://www.shutterstock.com/image-photo/crossed-arms-happy-business-asian-600nw-2422947585.jpg',
      birthdate: '1990-05-15',
    },
    {
      id: 2,
      username: 'Bob Smith',
      email: 'bob.smith@gmail.com',
      phone: '+20-303-555-0145',
      userType: 'User',
      image: 'https://plus.unsplash.com/premium_photo-1722682239201-21c8173e776b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWElMjBtYW58ZW58MHx8MHx8fDA%3D',
      birthdate: '1985-12-22',
    },
    {
      id: 3,
      username: 'Charlie Brown',
      email: 'charlie.brown@gmail.com',
      phone: '+20-404-555-0192',
      userType: 'Moderator',
      image: 'https://media.istockphoto.com/id/2099408907/photo/smiling-young-businessman-standing-with-his-arms-crossed-against-an-office-wall.jpg?s=612x612&w=0&k=20&c=ETpGH0ZqJ3DrtgTApzZsyanpFefbvQ_9_3OlKn5ii-4=',
      birthdate: '1992-03-10',
    },
    {
      id: 4,
      username: 'Diana Ross',
      email: 'diana.ross@gmail.com',
      phone: '+20-505-555-0234',
      userType: 'User',
      image: 'https://st3.depositphotos.com/3776273/31836/i/450/depositphotos_318367382-stock-photo-portrait-of-a-handsome-young.jpg',
      birthdate: '1997-07-18',
    },
    {
      id: 5,
      username: 'Eve Torres',
      email: 'eve.torres@gmail.com',
      phone: '+20-606-555-0345',
      userType: 'Admin',
      image: 'https://t4.ftcdn.net/jpg/01/34/51/81/360_F_134518129_vyuGuRtwwnnlrlZyr5cvasLjkI5BWJPH.jpg',
      birthdate: '1988-11-25',
    },
    {
      id: 6,
      username: 'Frank Castle',
      email: 'frank.castle@gmail.com',
      phone: '+20-707-555-0456',
      userType: 'Moderator',
      image: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yX3Bob3RvX29mX2FfYmxhY2tfYnVzaW5lc3NtYW5faXNvbGF0ZWRfb25fb2ZmX19lZmMxZDllNC1iNzQ5LTQ2NzMtYjRmMS1lYjI0NTBiYzNiOGRfMS5qcGc.jpg',
      birthdate: '1991-09-02',
    },
    {
      id: 7,
      username: 'Grace Hopper',
      email: 'grace.hopper@gmail.com',
      phone: '+20-808-555-0567',
      userType: 'User',
      image: 'https://media.istockphoto.com/id/1392528328/photo/portrait-of-smiling-handsome-man-in-white-t-shirt-standing-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=6vUtfKvHhNsK9kdNWb7EJlksBDhBBok1bNjNRULsAYs=',
      birthdate: '1994-04-09',
    },
    {
      id: 8,
      username: 'Hank Pym',
      email: 'hank.pym@gmail.com',
      phone: '+20-909-555-0678',
      userType: 'Moderator',
      image: 'https://t3.ftcdn.net/jpg/02/42/00/04/360_F_242000451_i5W8qBEWBw5hthTWgPTogYYl8qxIX4f5.jpg',
      birthdate: '1980-06-01',
    },
    {
      id: 9,
      username: 'Ivy League',
      email: 'ivy.league@gmail.com',
      phone: '+20-101-555-0789',
      userType: 'Admin',
      image: 'https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=',
      birthdate: '1993-01-20',
    },
  ];
    
}
