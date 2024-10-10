import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {

  @Input() backgroundColor: string = 'var(--secondary-color)';
  @Input() hoverColor: string = 'var(--secondary-hover-color)';
  @Input() icone: string = '';
  @Input() disabled: boolean = false;
  @Output() clickEvent = new EventEmitter<Event>();

  onClick(event: Event) {
      this.clickEvent.emit(event);
  }

}
