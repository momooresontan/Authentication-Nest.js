import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthenticatedGuard } from './auth/authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return { msg: 'Logged in!' }; //TODO: return JWT access token
  }

  // For sessions
  //@UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Request() req): string {
    //TODO: require a Bearer token, validate token
    return req.user;
  }
}
