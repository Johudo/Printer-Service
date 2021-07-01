import {
    ExecutionContext,
    Injectable,
    CanActivate,
    ForbiddenException,
} from "@nestjs/common";

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();

        if (!request.isAuthenticated()) throw new ForbiddenException();

        return request.isAuthenticated();
    }
}
