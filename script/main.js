$(document).ready(function () {
    $('#enviar').click(function (e) {
        e.preventDefault();

        //validação campo First name
        const primeiroNome = $('#primeiro-nome');
        const mensageErrorName = '<span>First Name cannot be empty</span>'

        if (primeiroNome.val().length <= 0) {

            $(primeiroNome).css("border", "solid 4px  hsl(0, 100%, 74%)");
            $(primeiroNome).css({
                'background-image': "url('/images/icon-error.svg')",
                'background-repeat': 'no-repeat',
                'background-position': '95% 50%',
                'padding-right': '2.5rem'
            });
            $(primeiroNome).attr("placeholder", "");
            $(primeiroNome).after(mensageErrorName);
        }

        //validação segundo nome
        const segundoNome = $('#segundo-nome');
        const mensageErrorSecondName = '<span>Last Name cannot be empty</span>'

        if (segundoNome.val().length <= 0) {

            $(segundoNome).css("border", "solid 4px  hsl(0, 100%, 74%)");
            $(segundoNome).css({
                'background-image': "url('/images/icon-error.svg')",
                'background-repeat': 'no-repeat',
                'background-position': '95% 50%',
                'padding-right': '2.5rem'
            });
            $(segundoNome).attr('placeholder', '');
            $(segundoNome).after(mensageErrorSecondName);
        }

        //validação email
        const email = $('#email');
        const mensageErrorEmail = '<span>Looks like this is not an email</span>'

        if (email.val().length <= 0) {

            // const emailPlaceholder = $('#email::placeholder');

            //$(emailPlaceholder).css('::placeholder', 'color', '#f00')

            $(email).css("border", "solid 4px  hsl(0, 100%, 74%)");
            $(email).css({
                'background-image': "url('/images/icon-error.svg')",
                'background-repeat': 'no-repeat',
                'background-position': '95% 50%',
                'padding-right': '2.5rem',
            });
            $(email).attr('placeholder', 'email@example/com');
            $(email).after(mensageErrorEmail);
            $(email).addClass('placeholderError');
        }

        //validação senha
        const senha = $('#password');
        const mensageErrorSenha = '<span>Password cannot be empty</span>'

        if (senha.val().length <= 0) {

            $(senha).css("border", "solid 4px  hsl(0, 100%, 74%)");
            $(senha).css({
                'background-image': "url('/images/icon-error.svg')",
                'background-repeat': 'no-repeat',
                'background-position': '95% 50%',
                'padding-right': '2.5rem'
            });
            $(senha).attr('placeholder', '');
            $(senha).after(mensageErrorSenha);
        }


    })
})