import { UseGuards } from '@nestjs/common';
import { Resolver ,Query, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/jwt-auth.guard';
import { RegisterUserInput } from './dto/register-user-input';
import { User } from './user.entity';
import { UsersService } from './users.service';Resolver(() => User)

@Resolver(()=>User)
export class UsersResolver {
  
    constructor(private usersService: UsersService){}

    @Query(()=>[User])
    users(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Mutation(returns => User)
    registerUser(@Args('registerUserInput') registerUserInput: RegisterUserInput): Promise<User> {
        return this.usersService.registerUser(registerUserInput);
    }
}
