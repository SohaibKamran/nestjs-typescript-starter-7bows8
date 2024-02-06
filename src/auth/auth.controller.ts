// auth.controller.ts
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  getHelloController(): string {
    return this.authService.getControllerHrllo();
  }
  @UseGuards(LocalAuthGuard) // Use the LocalAuthGuard here
  @Post('login')
  async login(@Request() req) {
    return this.authService.generateToken(req.user);
  }
}
