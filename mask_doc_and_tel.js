$(document).ready(function() {

   var maskBehavior = function(val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
   },
   options = {
      onKeyPress: function(val, e, field, options) {
         field.mask(maskBehavior.apply({}, arguments), options);
      }
   };

   var options_doc = {
      onKeyPress : function(documento, e, field, options) {
         var masks = ['000.000.000-000', '00.000.000/0000-00'];
         var mask = (documento.length > 14) ? masks[1] : masks[0];
         $('#documento').mask(mask,options);
      }
   };
   $('#documento').mask('999.999.999-99',options_doc);
   $('#telefone').mask(maskBehavior,options);

});
