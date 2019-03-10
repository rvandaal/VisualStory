import { AbstractControl } from '@angular/forms';
import { Verhaal } from '../models/verhaal';

export interface IBaseTransform {
    name: string;
    control: AbstractControl;
    transform(verhaal: Verhaal): Verhaal;
}
