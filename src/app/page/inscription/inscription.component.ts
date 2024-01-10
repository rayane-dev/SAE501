import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LightModeService } from 'src/app/light-mode.service';
// import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css',],
})
export class InscriptionComponent  {
  illustration: string = "../../assets/ressources/illustration.png";
  logo: string = "../../assets/images/IUT GUSTAVE EIFFEL.png";
  

  constructor(private LightModeService: LightModeService) {}

  toggleDarkMode() {
    this.LightModeService.toggleDarkMode();
  }

  isDarkMode: boolean = false;
  private subscription: Subscription = new Subscription();


  ngOnInit() {
    this.subscription = this.LightModeService.getDarkModeStatus().subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  // ngOnDestroy() {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }

  // username: string;
  // password: string;

  // constructor(private http: HttpClient) {}

  // onSubmit() {
  //   const formData = new FormData();
  //   formData.append('username', this.username);
  //   formData.append('password', this.password);

  //   this.http.post('http://localhost/backend/login.php', formData)
  //     .subscribe((response) => {
  //       console.log(response);
  //       // Gérer la réponse du serveur ici
  //     });
  // }

}
