import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ItemService} from "../service/item.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itensCadastrados: any[] = [];
  constructor(
    private router: Router,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    // Ao inicializar a tela, carregue os itens cadastrados
    this.carregarItensCadastrados();
  }
  adicionarItem(): void {
    this.router.navigate(['/produto']);
  }

  carregarItensCadastrados() {
    // Use o serviço para obter os itens cadastrados
    this.itemService.getItens().subscribe((itens: any[]) => {
      this.itensCadastrados = itens;
    });
  }
}
