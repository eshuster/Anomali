app
.controller('registrationCtrl', function(){
  var vm = this;
  vm.stateUnlocked = false;

  vm.onlyNumbers = /^\d+$/;
  vm.passwordCombination = /(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])/;

  vm.user = {
    first_name: '',
    last_name: '',
    company_name: '',
    work_email: '',
    phone_number: '',
    country: '',
    state: '',
    industry: '',
    zip_postal: '',
    password: '',
    confirm_password: '',
    interested_in_partnership: ''
  };

  vm.states = [
    {stateID: 1, stateName: 'CA'},
    {stateID: 2, stateName: 'NY'},
    {stateID: 3, stateName: 'PA'}
  ]

  vm.countries = [
    {countryID: 1, countryName: 'US'},
    {countryID: 2, countryName: 'European Union'},
    {countryID: 3, countryName: 'South Africa'}
  ]

  vm.addUser = function() {
    console.log(vm.formData)
  }

  vm.unlock = function(selection) {
    console.log(selection)
    if (selection == 1) {
      vm.stateUnlocked = true;
    } else {
      vm.stateUnlocked = false;
    }
  }

  vm.formData = {};
  vm.formData.user = vm.user;

  console.log(vm.formData)

})

.directive("compareTo", function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
});