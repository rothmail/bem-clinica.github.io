function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function showOverlay(type) {
    document.getElementById(type + "Overlay").style.display = "flex";
}

function closeOverlay(type) {
    document.getElementById(type + "Overlay").style.display = "none";
}

function validateAge() {
    const birthdate = document.getElementById("birthdate").value;
    const birth = new Date(birthdate);
    const today = new Date();
    const age = today.getFullYear() - birth.getFullYear();
    const month = today.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    if (age < 18) {
        alert("Você precisa ter pelo menos 18 anos para se cadastrar.");
    } else {
        closeOverlay('login');
        alert("Cadastro realizado com sucesso!");
    }
}

function validateSubscription() {
    const name = document.getElementById('subName').value.trim();
    const email = document.getElementById('subEmail').value.trim();
    const plan = document.getElementById('subPlan').value;

    if (name === '' || email === '' || plan === '') {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    closeOverlay('subscribe');
    alert('Assinatura confirmada com sucesso!');
}

function validateContact() {
    const name = document.getElementById('input-name').value.trim();
    const email = document.getElementById('input-email').value.trim();
    const area = document.getElementById('messenge-area').value.trim();

    if (name === '' || email === '' || area === '') {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    closeOverlay('contact');
    alert('Mensagem enviada com sucesso!');
}

// ESPECIALISTAS SCRIPT

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function openModal(especialista) {
    document.getElementById('modalAgendamento').style.display = 'flex';
    document.getElementById('modalTitle').innerText = especialista;
    document.getElementById('especialistaSelecionado').value = especialista;
}

function closeModal() {
    document.getElementById('modalAgendamento').style.display = 'none';
}

function submitForm(event) {
    event.preventDefault();
    const nome = document.getElementById('nomePaciente').value;
    const data = document.getElementById('dataConsulta').value;
    const hora = document.getElementById('horaConsulta').value;
    const desc = document.getElementById('descricao').value;
    const esp = document.getElementById('especialistaSelecionado').value;

    alert(`Consulta com ${esp} marcada para ${data} às ${hora}, para: ${desc}.`);
    closeModal();
}