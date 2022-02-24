/// <reference types="node" />
import express from 'express';
import { Routes } from '@interfaces/routes.interface';
import http from 'http';
declare class App {
    app: express.Application;
    env: string;
    port: string | number;
    server: http.Server;
    private io;
    constructor(routes: Routes[]);
    listen(): void;
    getServer(): http.Server;
    private connectToDatabase;
    private connectSocket;
    private initializeMiddlewares;
    private initializeRoutes;
    private initializeSwagger;
    private initializeErrorHandling;
}
export default App;
