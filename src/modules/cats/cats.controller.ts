import { Controller, Get } from "@nestjs/common";

@Controller('gatos')
class CatsController{
    @Get('/todos')
    findAll(): string{
        return 'Gatofóbicos'
    }
}

export {CatsController}