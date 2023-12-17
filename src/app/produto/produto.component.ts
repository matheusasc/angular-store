import { Component } from '@angular/core';
import {Item} from "../model/item.model";
import {ItemService} from "../service/item.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent {
  item: Item = new Item(0, '', '', 0);

  constructor(
    private itemService: ItemService,
    private router: Router) {}

  cadastrarItem() {
    this.itemService.cadastrarItem(this.item).subscribe(
      (response) => {
        console.log('Item cadastrado com sucesso:', response);
        // Adicione qualquer lógica adicional após o cadastro
      },
      (error) => {
        console.error('Erro ao cadastrar item:', error);
        // Trate o erro conforme necessário
      }
    );
    this.router.navigate(['/home']);
  }


}
