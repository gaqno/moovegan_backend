"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const app_logger_1 = require("./app.logger");
async function App() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useLogger(app.get(app_logger_1.AppLogger));
    const options = new swagger_1.DocumentBuilder()
        .setTitle('MooVegan services')
        .setDescription('The MooVegan API Rules')
        .setVersion('1.0')
        .build();
    app.setGlobalPrefix('/v1');
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('v1/docs', app, document);
    await app.listen(3001);
    console.log('runing on port 3001');
}
App();
//# sourceMappingURL=main.js.map