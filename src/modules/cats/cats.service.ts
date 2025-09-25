import { BadRequestException, Injectable } from '@nestjs/common';
import {  }
import { CreateCatDto } from './dtos/create-cat.dto.ts';


@Injectable()
class CatsService {
    private cats: Cat[] = [];

    findAll(): Cat[] {
        return this.cats;
    }

    create(cat: CreateCatDto) Cat {
        //verificar se o gato existe
        const existCat = this.cats.find((c) => c.nome === catch.nome);

        if (existCat) {
            throw new BadRequestException('Este gato já existe');
        }

        //insere o gato no array
        this.cats.push(cat);
        return cat;
    }
}

export { CatsService };