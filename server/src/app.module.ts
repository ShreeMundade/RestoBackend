import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./user/user.module";
import { E1Module } from "./e1/e1.module";
import { E2Module } from "./e2/e2.module";
import { E3Module } from "./e3/e3.module";
import { E4Module } from "./e4/e4.module";
import { E5Module } from "./e5/e5.module";
import { E6Module } from "./e6/e6.module";
import { E7Module } from "./e7/e7.module";
import { E8Module } from "./e8/e8.module";
import { E9Module } from "./e9/e9.module";
import { E10Module } from "./e10/e10.module";
import { E11Module } from "./e11/e11.module";
import { E12Module } from "./e12/e12.module";
import { E13Module } from "./e13/e13.module";
import { E14Module } from "./e14/e14.module";
import { E15Module } from "./e15/e15.module";
import { E16Module } from "./e16/e16.module";
import { E17Module } from "./e17/e17.module";
import { E18Module } from "./e18/e18.module";
import { E19Module } from "./e19/e19.module";
import { E20Module } from "./e20/e20.module";
import { E21Module } from "./e21/e21.module";
import { E22Module } from "./e22/e22.module";
import { E23Module } from "./e23/e23.module";
import { E24Module } from "./e24/e24.module";
import { E25Module } from "./e25/e25.module";
import { E26Module } from "./e26/e26.module";
import { E27Module } from "./e27/e27.module";
import { E28Module } from "./e28/e28.module";
import { E29Module } from "./e29/e29.module";
import { E30Module } from "./e30/e30.module";
import { E31Module } from "./e31/e31.module";
import { E32Module } from "./e32/e32.module";
import { E33Module } from "./e33/e33.module";
import { E34Module } from "./e34/e34.module";
import { E35Module } from "./e35/e35.module";
import { E36Module } from "./e36/e36.module";
import { E37Module } from "./e37/e37.module";
import { E38Module } from "./e38/e38.module";
import { E39Module } from "./e39/e39.module";
import { E40Module } from "./e40/e40.module";
import { E41Module } from "./e41/e41.module";
import { E42Module } from "./e42/e42.module";
import { E43Module } from "./e43/e43.module";
import { E44Module } from "./e44/e44.module";
import { E45Module } from "./e45/e45.module";
import { E46Module } from "./e46/e46.module";
import { E47Module } from "./e47/e47.module";
import { E48Module } from "./e48/e48.module";
import { E49Module } from "./e49/e49.module";
import { E50Module } from "./e50/e50.module";
import { E51Module } from "./e51/e51.module";
import { E52Module } from "./e52/e52.module";
import { E53Module } from "./e53/e53.module";
import { E54Module } from "./e54/e54.module";
import { E55Module } from "./e55/e55.module";
import { E56Module } from "./e56/e56.module";
import { E57Module } from "./e57/e57.module";
import { E58Module } from "./e58/e58.module";
import { E59Module } from "./e59/e59.module";
import { E60Module } from "./e60/e60.module";
import { E61Module } from "./e61/e61.module";
import { E62Module } from "./e62/e62.module";
import { E63Module } from "./e63/e63.module";
import { E64Module } from "./e64/e64.module";
import { E65Module } from "./e65/e65.module";
import { E66Module } from "./e66/e66.module";
import { E67Module } from "./e67/e67.module";
import { E68Module } from "./e68/e68.module";
import { E69Module } from "./e69/e69.module";
import { E70Module } from "./e70/e70.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    E1Module,
    E2Module,
    E3Module,
    E4Module,
    E5Module,
    E6Module,
    E7Module,
    E8Module,
    E9Module,
    E10Module,
    E11Module,
    E12Module,
    E13Module,
    E14Module,
    E15Module,
    E16Module,
    E17Module,
    E18Module,
    E19Module,
    E20Module,
    E21Module,
    E22Module,
    E23Module,
    E24Module,
    E25Module,
    E26Module,
    E27Module,
    E28Module,
    E29Module,
    E30Module,
    E31Module,
    E32Module,
    E33Module,
    E34Module,
    E35Module,
    E36Module,
    E37Module,
    E38Module,
    E39Module,
    E40Module,
    E41Module,
    E42Module,
    E43Module,
    E44Module,
    E45Module,
    E46Module,
    E47Module,
    E48Module,
    E49Module,
    E50Module,
    E51Module,
    E52Module,
    E53Module,
    E54Module,
    E55Module,
    E56Module,
    E57Module,
    E58Module,
    E59Module,
    E60Module,
    E61Module,
    E62Module,
    E63Module,
    E64Module,
    E65Module,
    E66Module,
    E67Module,
    E68Module,
    E69Module,
    E70Module,
    ACLModule,
    AuthModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    KafkaModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
