import { Module } from "@nestjs/common";
import { HashingService } from "./hashing.service";
import { BcryptService } from "./bcrypt.service";

@Module({
  providers: [HashingService, BcryptService],
})
export class IamModule {}
