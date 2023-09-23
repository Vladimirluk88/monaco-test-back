import { Injectable } from '@nestjs/common';

import { PythonShell } from 'python-shell';
import { RunPythonCodePayload } from './types';

@Injectable()
export class AppService {
  async runPythonCode(payload: RunPythonCodePayload) {
    return await PythonShell.runString(payload.code, null);
  }
}
