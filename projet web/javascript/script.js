function submitQuiz() {
    // Définir les réponses correctes pour chaque question
    const correctAnswers = {
        Q1: 'B',
        Q2: 'C',
        Q3: 'A',
        Q4: 'B',
        Q5: 'B',
        Q6: 'B',
        Q7: 'B',
        Q8: 'A',
        Q9: 'B',
        Q10: 'B',
        Q11: 'B',
        Q12: 'B',
        Q13: 'C',
        Q14: 'C',
        Q15: 'B',
        Q16: 'B'
    };

    let score = 0;
    const form = document.getElementById('quiz-form');
    const resultElement = document.createElement('div');
    resultElement.id = 'resultat';
    const answersElement = document.createElement('div');
    answersElement.id = 'reponses-correctes';
    
    // Vérifier si toutes les questions ont une réponse sélectionnée
    for (let question in correctAnswers) {
        const selectedOption = form.querySelector(`input[name="${question}"]:checked`);
        if (!selectedOption) {
            // Si une question n'a pas de réponse sélectionnée
            alert(`Veuillez répondre à la question ${question}`);
            return; // Arrêter l'exécution de la fonction
        }
    }

    // Si toutes les questions ont une réponse, on calcule le score
    for (let question in correctAnswers) {
        const selectedOption = form.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswers[question]) {
            score++;
        }
    }

    // Afficher le score
    resultElement.textContent = `Vous avez obtenu ${score} sur 16.`;
    form.appendChild(resultElement); // Afficher le résultat dans le formulaire

    // Afficher les réponses correctes (optionnel)
    answersElement.textContent = "Les réponses correctes sont : " + JSON.stringify(correctAnswers, null, 2);
    answersElement.style.display = 'block';
    form.appendChild(answersElement); // Ajouter les réponses correctes sous le formulaire
}








