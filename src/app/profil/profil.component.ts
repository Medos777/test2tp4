import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  profils=["Admin", "User", "Visitor"];
  sel="Visitor";
  titre:string="Liste des profils";

  constructor() { }

  ngOnInit() {
  }

}
