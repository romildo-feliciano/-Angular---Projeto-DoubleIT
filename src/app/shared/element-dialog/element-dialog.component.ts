import { Produto } from './../produto/produto';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss']
})
export class ElementDialogComponent implements OnInit {

  produto!: Produto;
  isChange!: Boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Produto,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
    ) {}


  ngOnInit(): void {
    if(this.data.nome != ''){
      this.isChange = true;
    }
    else{
      this.isChange = false;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
