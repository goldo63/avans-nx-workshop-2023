import { ApiResponse } from '@avans-nx-workshop/shared/api';
import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiResponseInterceptor implements NestInterceptor {
    
    intercept(
        context: ExecutionContext,
        next: CallHandler
    ): Observable<ApiResponse<unknown>> {
        return next.handle().pipe(
            map((results) => {
                if (results) {
                    return {
                        info: {
                            version: '1.0',
                            type: results instanceof Array ? 'list' : 'object',
                            
                            count:
                                results instanceof Array ? results.length : 1,
                        },
                        results,
                    };
                } else {
                    return {
                        results: undefined,
                        info: {
                            version: '1.0',
                            type: 'none',
                            count: 0,
                        },
                    };
                }
            })
        );
    }
}
