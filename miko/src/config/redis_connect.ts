import { createClient, RetryStrategy, RetryStrategyOptions } from "redis";

const retry_strategy: RetryStrategy = (options: RetryStrategyOptions) => {
  if (options.error && options.error.code === "ECONNREFUSED") {
    return new Error("The server refused the connection");
  }
  if (options.total_retry_time > 1000 * 60 * 60) {
    // End reconnecting after a specific timeout and flush all commands
    // with a individual error
    return new Error("Retry time exhausted");
  }
  if (options.attempt > 10) {
    // End reconnecting with built in error
    return undefined;
  }
  // reconnect after

  return Math.min(options.attempt * 100, 3000);
};

const redisClient = createClient({
  url: process.env.REDIS_URI,
  retry_strategy,
});

const connectRedis = () => {
  redisClient.on("connect", () => {
    console.log("redis Client Connected");
  });
};

export { redisClient, connectRedis };
