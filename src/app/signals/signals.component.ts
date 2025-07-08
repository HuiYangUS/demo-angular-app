import { ChangeDetectionStrategy, Component, effect, signal, WritableSignal } from '@angular/core';

/**
 * <Writable Signal> contains updated values
 * <0, '0'> primitive
 * [] array
 * {} object
 */
@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {

  // counter = signal(0);
  counter: WritableSignal<number> = signal(0);
  minCount: number = 0;
  maxCount: number = 25;

  regularCount: number = 0;

  /**
   * This is really a constructor.
   */
  constructor() {
    this.counter.set(10);
    setTimeout(() => {
      // this.regularCount = 50;
      // console.log("Regular count = " + this.regularCount)
      // this.counter.set(25);
      // console.log("Count using signal = " + this.counter())
    }, 0);

    // Warning: must callback at least one signal value
    effect(() => console.log("Current counter = " + this.counter()));
  }

  increaseCount() {
    let currentCount: number = this.counter();
    if (currentCount < this.maxCount) {
      currentCount = currentCount + 1;
    }
    this.counter.set(currentCount);
  }

  decreaseCount() {
    let currentCount: number = this.counter();
    if (currentCount > this.minCount) {
      this.counter.update(targetValue => targetValue - 1);
    }
  }

}
