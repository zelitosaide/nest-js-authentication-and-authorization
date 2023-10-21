import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from "@nestjs/common";
import { Redis } from "ioredis";

@Injectable()
export class RefreshTokenIdsStorage
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private redisClient: Redis;

  onApplicationBootstrap() {
    // TODO: Ideally, we should move this to the dedicated "RedisModule"
    // instead of initiating the connection here.
    this.redisClient = new Redis({
      host: "localhost", // NOTE: According to best practices, we should use the environment variables here instead.
      port: 6379, // 👆
    });
  }

  onApplicationShutdown(signal?: string) {}
}
