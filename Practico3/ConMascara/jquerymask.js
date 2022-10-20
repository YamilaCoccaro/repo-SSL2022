$(function(){
    $("#minombre").mask('SSSSSSSSSSSSSSSSSSSSSSSSS', {placeholder: 'Juan'});
    $("#miapellido").mask("SSSSSSSSSSSSSSSSSSSSSSSSS", {placeholder: 'Perez'});
    $("#miedad").mask("000");
    $("#mifn").mask("00/00/0000");
    $("#midni").mask("00000000", {placeholder: '99999999'});
    $("#micuit").mask("00-00000000-00", {placeholder: '99-99999999-99'});
    $("#misexo").mask("A", {translation: {A: {pattern: /[F]|[M]|[I]/}}});
    $("#mitel").mask("0000-000000");
    $("#mimail").inputmask("email");
})
