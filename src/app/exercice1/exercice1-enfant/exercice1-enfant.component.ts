import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Output() compteurChange = new EventEmitter();

  @Input() public result: number;

  constructor() {}

  ngOnInit() {}

  incrementer() {
    this.result++;
    this.compteurChange.emit({
      value: this.result,
    });
  }

  decrementer() {
    this.result--;
    this.compteurChange.emit({
      value: this.result,
    });
  }
}
