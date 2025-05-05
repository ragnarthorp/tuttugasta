// Bíddu eftir að allt HTML sé hlaðið inn
document.addEventListener('DOMContentLoaded', function() {

    // --- Virkni fyrir Upphafsskjá (Þraut 1: Titanic) ---
    const initialPassInput = document.getElementById('pass-initial');
    const initialSubmitBtn = document.getElementById('submit-initial');
    const initialErrorMsg = document.getElementById('error-initial');
    const hackerTerminal = document.getElementById('hacker-terminal');
    const mainContent = document.getElementById('main-content');
    const content1Section = document.getElementById('content-1'); // Titanic efnið er nú hluti af main-content

    function checkInitialPassword() {
        const correctPassword = 'titanic';
        const userGuess = initialPassInput.value.trim().toLowerCase();

        if (userGuess === correctPassword) {
            // Rétt lykilorð:
            // 1. Fela hakkaraskjáinn
            hackerTerminal.style.display = 'none';
            // 2. Sýna aðal innihaldið
            mainContent.style.display = 'block';
            // 3. Fjarlægja 'hacker-mode' klasann af body til að breyta útliti
            document.body.classList.remove('hacker-mode');
            // 4. Sýna Titanic efnið strax (þar sem það er fyrsta efnið eftir innskráningu)
            content1Section.style.display = 'block'; // Þetta er líklega óþarfi ef það er ekki falið sérstaklega

        } else {
            // Rangt lykilorð: Sýna villuskilaboð
            initialErrorMsg.style.display = 'block';
            initialPassInput.value = ''; // Hreinsa inntaksreitinn
            initialPassInput.focus(); // Setja fókus aftur
             // Láta villuskilaboð hverfa eftir smá stund? (Valfrjálst)
             setTimeout(() => { initialErrorMsg.style.display = 'none'; }, 3000);
        }
    }

    // Keyra athugun við smell á takka
    initialSubmitBtn.addEventListener('click', checkInitialPassword);

    // Keyra athugun við Enter í lykilorðsreit
    initialPassInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            // Koma í veg fyrir sjálfgefna Enter virkni (eins og form submit)
            event.preventDefault();
            checkInitialPassword();
        }
    });

    // --- Virkni fyrir Þraut 2 (Princip) ---
    const pass2Input = document.getElementById('pass2');
    const submit2Button = document.getElementById('submit2');
    const error2Message = document.getElementById('error2');
    const puzzle2Section = document.getElementById('puzzle-2'); // Þrautin sjálf
    const content2Section = document.getElementById('content-2'); // Efnið sem kemur á eftir

    function checkPassword2() {
        const correctPassword2 = 'princip'; // Eftirnafnið, lágstafir
        const userGuess2 = pass2Input.value.trim().toLowerCase();

        if (userGuess2 === correctPassword2) {
            // Rétt lykilorð:
            // Sýna næsta efniskafla
            content2Section.style.display = 'block';
            // Fela þessa þraut (valfrjálst, en getur gert síðuna snyrtilegri)
            puzzle2Section.querySelector('.password-entry').style.display = 'none'; // Fela bara inntak/takka
            error2Message.style.display = 'none';
        } else {
            // Rangt lykilorð:
            error2Message.style.display = 'block';
            pass2Input.value = '';
            pass2Input.focus();
            setTimeout(() => { error2Message.style.display = 'none'; }, 3000);
        }
    }

    submit2Button.addEventListener('click', checkPassword2);

    pass2Input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkPassword2();
        }
    });


    // --- Virkni fyrir Þraut 3 (og fleiri) kemur hér síðar ---
    const pass3Input = document.getElementById('pass3');
    const submit3Button = document.getElementById('submit3');
    const error3Message = document.getElementById('error3');
    const puzzle3Section = document.getElementById('puzzle-3');
    const content3Section = document.getElementById('content-3');

    function checkPassword3() {
        // const correctPassword3 = '...';
        // ... virkni ...
        alert('Virkni fyrir Þraut 3 er ekki tilbúin!');
    }

     submit3Button.addEventListener('click', checkPassword3);

     pass3Input.addEventListener('keypress', function(event) {
         if (event.key === 'Enter') {
             event.preventDefault();
             checkPassword3();
         }
     });


}); // Lokar á 'DOMContentLoaded'