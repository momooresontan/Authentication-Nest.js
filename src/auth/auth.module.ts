import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from '../users/users.module';
// import { SessionSerializer } from './session.serializer';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  //Remove PassportModule.register({ session: true }) from imports
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'SECRET', //use .env variable
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy], // SessionSerializer removed from providers
  exports: [AuthService],
})
export class AuthModule {}
