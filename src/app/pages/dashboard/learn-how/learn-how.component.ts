import { Component } from '@angular/core';
import { BtnEnum } from './btn-enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learn-how',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learn-how.component.html',
  styleUrl: './learn-how.component.scss'
})
export class LearnHowComponent {

  btnEnum = BtnEnum;
  selectedBtn:BtnEnum = this.btnEnum.ImproveYourDiet;

}
