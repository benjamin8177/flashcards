const questionIn = document.getElementById('question');
const answerIn = document.getElementById('answer');
const addBtn = document.getElementById('add-card');
const container = document.getElementById('flashcards-container');

addBtn.addEventListener('click', () => {
    const q = questionIn.value.trim();
    const a = answerIn.value.trim();
    
    if(q && a) {
        addFlashcard(q, a);
        questionIn.value = '';
        answerIn.value = '';
    } else {
        alert('Please fill out both fields');
    }
});

function addFlashcard(q, a) {
    const card = document.createElement('div');
    card.classList.add('flashcard');
    
    card.innerHTML = `
        <div class="flashcard-inner">
            <div class="flashcard-front">${q}</div>
            <div class="flashcard-back">${a}</div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        card.classList.toggle('flip');
    });
    
    container.appendChild(card);
}

// Add sample
addFlashcard('What does HTML stand for?', 'HyperText Markup Language');
addFlashcard('What is JS?', 'JavaScript - a programming language of the web.');
