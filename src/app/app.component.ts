import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MyFirstComponent } from './components/my-first/my-first.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyFirstService } from './services/my-first/my-first.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MyFirstComponent, FooterComponent],
  providers: [MyFirstService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-crash-course';
}
