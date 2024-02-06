// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  getControllerHrllo() {
    return 'Hello from controller';
  }
  async generateToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }
}
