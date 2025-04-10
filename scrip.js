// Função de login (simulando a validação de CPF)
function login() {
    const cpf = document.getElementById('cpf').value;
    
    if (validateCPF(cpf)) {
        alert("Login bem-sucedido!");
        document.querySelector('.login-form').classList.add('hidden');
        document.getElementById('payment-section').classList.remove('hidden');
    } else {
        alert("CPF inválido!");
    }
}

// Função fictícia para validar o CPF (realmente precisaria de uma validação real)
function validateCPF(cpf) {
    return cpf.length === 11; // Simples verificação de comprimento
}

// Função para confirmar o pagamento via PIX
function confirmPayment() {
    alert("Pagamento confirmado! Agora você pode apostar.");
    document.getElementById('payment-section').classList.add('hidden');
    document.getElementById('betting-section').classList.remove('hidden');
}

// Função para realizar apostas
function bet(amount) {
    alert(`Você apostou R$${amount}! Boa sorte!`);
}
