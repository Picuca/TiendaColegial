'use strict';

// Define the `tienditaCOlegial` module
angular.module('tienditaColegial', [

  'ngRoute',
  'account',
  'articles',
  'books',
  'cart',
  'contact',
  'header',
  'home-page',
  'ropa',
  'sign-in'

  // 'footer-nav'
]).config(function ($mdThemingProvider) {
          $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('green');
