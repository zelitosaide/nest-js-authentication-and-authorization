import { Module } from "@nestjs/common";
import { HashingService } from "./hashing.service";
import { BcryptService } from "./bcrypt.service";

@Module({
  // providers: [HashingService, BcryptService],
  providers: [
    {
      provide: HashingService,
      useClass: BcryptService,
    },
  ],
})
export class IamModule {}
