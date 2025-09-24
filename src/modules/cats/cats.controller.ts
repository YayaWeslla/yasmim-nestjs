import { Controller, Get } from "@nestjs/common";
import { CatsService } from './cats.service'

@Controller('gatos')
class CatsController{
    constructor(private readonly catsService: CatsService);
    @Get('/todos')
    findAll(): string{
        return this.catsService.findAll();
    }
}

export {CatsController}