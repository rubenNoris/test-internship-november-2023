import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent implements OnInit {
  _confirmButtonText: string = 'Da';
  _closeButtonText: string = 'Nu';

  @Input() title?: string;
  @Input() content?: string;
  @Input() confirmButtonText?: string;
  @Input() closeButtonText?: string;
  @Input() hideConfirmBtn!: boolean;
  activeModal: any;



  ngOnInit() {
    this.confirmButtonText = this.confirmButtonText ? this.confirmButtonText : this._confirmButtonText;
    this.closeButtonText = this.closeButtonText ? this.closeButtonText : this._closeButtonText;
  }
}
