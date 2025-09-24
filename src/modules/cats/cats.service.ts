import { Injectable } from '@nestjs/comon';


@Injectable()
class CatsService {
    private cats: Cat[] = [];

    findAll(): Cat[] {
        return this.cats;
    }
}

export { CatsService };