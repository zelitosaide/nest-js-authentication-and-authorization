import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from "@nestjs/common";
import { CoffeesService } from "./coffees.service";
import { CreateCoffeeDto } from "./dto/create-coffee.dto";
import { UpdateCoffeeDto } from "./dto/update-coffee.dto";
import { ActiveUser } from "src/iam/decorators/active-user.decorator";
import { ActiveUserData } from "src/iam/interfaces/active-use-data";
// import { Roles } from "src/iam/authorization/decorators/role.decorator";
// import { Role } from "src/users/enums/role.enum";
import { Permission } from "src/iam/authorization/permission.type";
import { Permissions } from "src/iam/authorization/decorators/permission.decorator";

@Controller("coffees")
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  // @Roles(Role.Admin)
  @Permissions(Permission.CreateCoffee)
  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Get()
  // findAll(@Req() request) {
  findAll(@ActiveUser() user: ActiveUserData) {
    // console.log(request.user);
    console.log(user);
    return this.coffeesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.coffeesService.findOne(+id);
  }

  // @Roles(Role.Admin)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(+id, updateCoffeeDto);
  }

  // @Roles(Role.Admin)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.coffeesService.remove(+id);
  }
}
