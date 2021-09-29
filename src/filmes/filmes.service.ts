import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';

export type Filme = {
  nome: string;
  imagem?: string; //undefined
};

const filmes: Filme[] = [
  {
    nome: 'Deadpool',
    imagem:
      'https://ogimg.infoglobo.com.br/rioshow/24884446-8f3-e73/FT1086A/deadpool-primeiro-filme.jpeg.jpg',
  },
  {
    nome: 'Vigadores Ultimato',
    imagem:
      'https://lumiere-a.akamaihd.net/v1/images/690x0w_br_9e5801a5.jpeg?region=0%2C0%2C690%2C1035',
  },
];

@Injectable()
export class FilmesService {
  getAll() {
    return filmes;
  }

  createFilme(filme: CreateFilmeDto) {
    return filmes.push(filme);
  }
}
