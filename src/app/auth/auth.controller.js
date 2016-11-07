export class AuthController {

  constructor($auth) {
    'ngInject';

    this.$auth = $auth
  }

  register() {
    this.$auth.signup({email: 'sabrina.bosco89@gmail.com'});
  }
}