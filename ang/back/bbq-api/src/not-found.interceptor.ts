import { CallHandler, ExecutionContext, Injectable, NestInterceptor, NotFoundException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {

  // https://stackoverflow.com/questions/49709429/decorator-to-return-a-404-in-a-nest-controller
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    // throw new Error("Method not implemented.");
    return next.handle()
      .pipe(tap(data => {
        if (data === undefined) {
          throw new NotFoundException();
        }
      }));
  }

}
