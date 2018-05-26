angular.module('todo')
.service('ListService', function(){
  this.list = {};
  this.getList = function(){ return this.list; };
  this.saveList = function(list) {
    console.log("list :", list);
    console.log("this.list", this.list);
    this.list = list;};
});

