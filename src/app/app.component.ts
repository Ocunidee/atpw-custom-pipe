import { Component } from '@angular/core'
import { DiscountedPipe } from './discounted.pipe'
import { FormsModule } from '@angular/forms'
import { CurrencyPipe, PercentPipe } from '@angular/common'

@Component({
  selector: 'app-root',
  imports: [
    DiscountedPipe,
    FormsModule,
    PercentPipe,
    CurrencyPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  discount?: number
  catalogue: Item[] = [
    {
      type: '👖',
      price: 30
    },
    {
      type: '👗',
      price: 40
    },
    {
      type: '👘',
      price: 60
    },
    {
      type: '👕',
      price: 20
    }
  ]
}

interface Item {
  type: string
  price: number
}
