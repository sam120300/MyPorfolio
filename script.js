    var translations = [
      "Hello", // English
      "Hola", // Spanish
      "안녕하세요", // Korean
      "Bonjour", // French
      "Ciao", // Italian
      "你好", // Chinese
      "Hallo", // German
      "Namaste", // Hindi
      "こんにちは", // Japanese
      "Kumusta", //Filipino
    ];

    var currentIndex = 0;
    function changeHeadingLanguage() {
        var heading = document.getElementById("dynamicHeading");
        heading.innerText = translations[currentIndex];
        currentIndex = (currentIndex + 1) % translations.length;
    }
    setInterval(changeHeadingLanguage, 800);
