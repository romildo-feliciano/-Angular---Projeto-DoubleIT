import { Produto } from './../produto/produto';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog-delete',
  templateUrl: './element-dialog-delete.component.html',
  styleUrls: ['./element-dialog-delete.component.scss']
})
export class ElementDialogDeleteComponent implements OnInit {

  produto!: Produto;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Produto,
    public dialogRef: MatDialogRef<ElementDialogDeleteComponent>,
    ) {}

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
