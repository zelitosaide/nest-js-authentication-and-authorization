import { Injectable } from "@nestjs/common";
import { HashingService } from "./hashing.service";

@Injectable()
export class BcryptService implements HashingService {
  hash(data: string | Buffer): Promise<string> {
    throw new Error();
  }

  compare(data: string | Buffer, encrypted: string): Promise<boolean> {
    throw new Error();
  }
}
