import http from "http";
import app from "@/app";
import { server } from "@config/config";

export let httpServer: ReturnType<typeof http.createServer>;

export const Main = () => {
  logging.log("----------------------------------------");
  logging.log("Starting Server");
  logging.log("----------------------------------------");

  httpServer = http.createServer(app);
  httpServer.listen(server.SERVER_PORT, () => {
    logging.log("----------------------------------------");
    logging.log(
      `Server started on ${server.SERVER_HOSTNAME}:${server.SERVER_PORT}`,
    );
    logging.log("----------------------------------------");
  });
};

export const Shutdown = (callback: any) =>
  httpServer && httpServer.close(callback);

Main();
