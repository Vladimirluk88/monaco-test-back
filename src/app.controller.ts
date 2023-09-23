import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { RunPythonCodePayload } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/run-python-code')
  runPythonCode(@Body() payload: RunPythonCodePayload): Promise<any> {
    return this.appService.runPythonCode(payload);
  }
}
