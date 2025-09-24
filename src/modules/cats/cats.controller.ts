import { Controller, Get } from "@nestjs/common";

@Controller('gatos')
class CatsController{
    @Get('/todos')
    findAll(): string{
        return this.catsService.findAll();
    }
}

export {CatsController}