import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
// to import .env file

import { Template } from 'e2b'

export const template = Template()
  .fromImage('node:21-slim')
  .setUser('root')
  .setWorkdir('/')
  .runCmd('apt-get update && apt-get install -y curl && apt-get clean && rm -rf /var/lib/apt/lists/*')
  .copy('compile_page.sh', '/compile_page.sh')
  .runCmd('chmod +x /compile_page.sh')
  .setWorkdir('/home/user/nextjs-app')
  .runCmd('npx --yes create-next-app@15.3.3 . --yes')
  .runCmd('npx --yes shadcn@latest init -d -b base --force')
  .runCmd('npx --yes shadcn@latest add --all -y')
  .runCmd('cp -a /home/user/nextjs-app/. /home/user/ && rm -rf /home/user/nextjs-app')
  .setWorkdir('/home/user')
  .setUser('user')