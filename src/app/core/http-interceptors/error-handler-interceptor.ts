import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, retryWhen } from 'rxjs/operators';

const serverErrorCodes = [500, 502, 503, 504];
const maxRetryNumber = 3;

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      retryWhen(errors => {
        let attempt = 1;
        return errors
          .pipe(
            delay(1000 * attempt),
            mergeMap( error => {
              if (attempt++ === maxRetryNumber || !serverErrorCodes.includes(error.status)) {
                attempt = 1;
                return throwError(error);
              } else {
                return of(error);
              }
            })
          );
      }),
    );
  }
}
