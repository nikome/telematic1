import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getApiStatus(): string {
        return 'API is up and running!';
    }
}
