"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmesService = void 0;
const common_1 = require("@nestjs/common");
const filmes = [
    {
        nome: 'Deadpool',
        imagem: 'https://ogimg.infoglobo.com.br/rioshow/24884446-8f3-e73/FT1086A/deadpool-primeiro-filme.jpeg.jpg',
    },
    {
        nome: 'Vigadores Ultimato',
        imagem: 'https://lumiere-a.akamaihd.net/v1/images/690x0w_br_9e5801a5.jpeg?region=0%2C0%2C690%2C1035',
    },
];
let FilmesService = class FilmesService {
    getAll() {
        return filmes;
    }
    createFilme(filme) {
        return filmes.push(filme);
    }
};
FilmesService = __decorate([
    (0, common_1.Injectable)()
], FilmesService);
exports.FilmesService = FilmesService;
//# sourceMappingURL=filmes.service.js.map