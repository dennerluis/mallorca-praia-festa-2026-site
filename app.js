const trip = {
  title: 'Mallorca Praia & Festa 2026',
  dateRange: '27–31 ago · 18 viajantes',
  paidTotal: 415,
  days: [
    { date:'Qui · 27 ago', city:'Palma', title:'Chegada à ilha', image:'./assets/palma.jpg', items:[
      {time:'18:40',title:'Voo Dublin → Palma',description:'Voo de ida já pago. Chegada prevista em Palma por volta de 22h30.',category:'transporte',image:'./assets/palma.jpg',maps:'Palma de Mallorca Airport',cost:'€49,00 já pago'},
      {time:'22:30',title:'Chegada, check-in e mercado',description:'Ir à hospedagem em Palma, acomodar o grupo e comprar o básico no mercado.',category:'hospedagem',image:'./assets/palma.jpg',maps:'Carrer de la Mar 15, Palma de Mallorca',cost:'Hospedagem: €176,00 já paga'},
    ]},
    { date:'Sex · 28 ago', city:'Costa sul', title:'Calas e AMØK', image:'./assets/calo-des-moro.jpg', items:[
      {time:'09:00',title:'Caló des Moro',description:'Primeira cala do dia. Saia cedo para aproveitar a praia antes do pico de lotação.',category:'experiência',image:'./assets/calo-des-moro.jpg',maps:'Caló des Moro, Mallorca',cost:'Transporte estimado: €20–35'},
      {time:'12:00',title:"Cala s'Almunia",description:'Enseada rochosa e águas claras, próxima do Caló des Moro.',category:'experiência',image:'./assets/cala-salmunia.jpg',maps:"Cala s'Almunia, Mallorca",cost:'Sem ingresso previsto'},
      {time:'15:30',title:'Cala Llombards',description:'Última praia do roteiro de sexta, com faixa de areia e mar calmo.',category:'experiência',image:'./assets/cala-llombards.jpg',maps:'Cala Llombards, Mallorca',cost:'Sem ingresso previsto'},
      {time:'20:30',title:'Jantar e preparação',description:'Volta a Palma, jantar e tempo para se preparar para a balada.',category:'refeição',image:'./assets/palma.jpg',maps:'Palma de Mallorca',cost:'Refeições estimadas: €35–45'},
      {time:'23:45',title:'AMØK Mallorca',description:'Entrada confirmada às 23h45. Chegue com antecedência para não perder a janela planejada.',category:'festa',image:'./assets/boat-night.jpg',maps:'AMOK Mallorca',cost:'Ingresso: €35,00 já pago'},
    ]},
    { date:'Sáb · 29 ago', city:'Palma e Magaluf', title:'Praia, aniversário e BCM/Titos', image:'./assets/cala-llombards.jpg', items:[
      {time:'10:00',title:'Acordar sem pressa',description:'Manhã mais lenta após AMØK.',category:'tempo livre',image:'./assets/palma.jpg',maps:'Palma de Mallorca',cost:'Livre'},
      {time:'12:00',title:'Illetes e Cala Comtessa',description:'Praias próximas de Palma para um dia mais prático de sol e mar.',category:'experiência',image:'./assets/cala-llombards.jpg',maps:'Cala Comtessa, Illetes, Mallorca',cost:'Transporte estimado: €10–20'},
      {time:'20:30',title:'Jantar de aniversário',description:'Reserva feita. O depósito será convertido em consumo no local.',category:'refeição',image:'./assets/palma.jpg',maps:'Palma de Mallorca',cost:'Depósito: €10,00 já pago'},
      {time:'23:15',title:'BCM ou Titos',description:'Saída para a balada. A entrada deve ocorrer antes da meia-noite.',category:'festa',image:'./assets/boat-night.jpg',maps:'BCM Planet Dance Magaluf',cost:'Ingresso: €16,00 já pago'},
    ]},
    { date:'Dom · 30 ago', city:'Palma', title:'Centro, barco e jantar', image:'./assets/palma.jpg', items:[
      {time:'10:30',title:'Brunch em Palma',description:'Café tardio para recuperar energia antes do centro histórico.',category:'refeição',image:'./assets/palma.jpg',maps:'Palma de Mallorca Old Town',cost:'Refeições estimadas: €35–50'},
      {time:'12:00',title:'Centro de Palma',description:'Passeio leve pelo centro antes do barco.',category:'experiência',image:'./assets/palma.jpg',maps:'Palma de Mallorca Old Town',cost:'Livre'},
      {time:'15:00',title:'Encontro no porto',description:'Apresente-se no cais em frente ao Auditorium de Palma, Passeig Marítim. Procure o barco identificado como Magic Catamarans.',category:'transporte',image:'./assets/boat-night.jpg',maps:'Port of Palma Auditorium Palma Passeig Maritim',cost:'Chegar 30 min antes'},
      {time:'15:30',title:'Magic Catamarans',description:'Passeio de barco já pago. Leve proteção solar, água e toalha.',category:'experiência',image:'./assets/boat-night.jpg',maps:'Port of Palma, Palma de Mallorca',cost:'€59,00 já pago'},
      {time:'20:00',title:'Jantar de despedida',description:'Jantar em Palma após o barco e organização para a saída de madrugada.',category:'refeição',image:'./assets/palma.jpg',maps:'Palma de Mallorca',cost:'Estimativa dentro do orçamento de refeições'},
    ]},
    { date:'Seg · 31 ago', city:'Aeroporto', title:'Volta para Dublin', image:'./assets/palma.jpg', items:[
      {time:'03:30',title:'Saída para o aeroporto',description:'Deixar a hospedagem e seguir ao Aeroporto de Palma. Separe documentos e bagagem na noite anterior.',category:'transporte',image:'./assets/palma.jpg',maps:'Palma de Mallorca Airport',cost:'Transporte extra conforme escolhido'},
      {time:'06:10',title:'Voo Palma → Dublin',description:'Voo de retorno já pago.',category:'transporte',image:'./assets/palma.jpg',maps:'Palma de Mallorca Airport',cost:'€70,00 já pago'},
    ]},
  ],
  costs: [
    {id:'flight-out',category:'Voos',title:'Dublin → Palma',note:'Voo de ida, já pago',amount:49},
    {id:'flight-back',category:'Voos',title:'Palma → Dublin',note:'Voo de volta, já pago',amount:70},
    {id:'stay',category:'Hospedagem',title:'Hospedagem em Palma',note:'Sua parte, 27–31 ago',amount:176},
    {id:'amok',category:'Experiências',title:'AMØK Mallorca',note:'Ingresso, entrada às 23h45',amount:35},
    {id:'club',category:'Experiências',title:'BCM/Titos',note:'Ingresso, entrada antes de 00h',amount:16},
    {id:'boat',category:'Experiências',title:'Magic Catamarans',note:'Passeio de domingo às 15h30',amount:59},
    {id:'birthday',category:'Experiências',title:'Reserva do aniversário',note:'Depósito convertido em consumo',amount:10},
  ],
  checklist:[
    {id:'passports',title:'Passaporte e documentos',note:'Separar antes de sair para o aeroporto.'},
    {id:'airport',title:'Transporte ao aeroporto',note:'Definir a saída de 03h30 da segunda.'},
    {id:'boat',title:'Barco: encontro às 15h',note:'Auditorium de Palma, Passeig Marítim.'},
    {id:'clubs',title:'Baladas: documentos e horário',note:'AMØK 23h45; BCM/Titos antes de 00h.'},
    {id:'beaches',title:'Praias: água e proteção solar',note:'Levar roupa de banho, água e calçado adequado.'},
    {id:'bags',title:'Bagagem pronta no domingo',note:'O voo sai 06h10 na segunda.'},
    {id:'offline',title:'Abrir o site no Safari',note:'Instalar na Tela de Início e testar o salvamento.'},
    {id:'expenses',title:'Registrar gastos reais',note:'Adicionar comida, bebidas e transporte ao longo da viagem.'},
  ],
};

const $=(s,p=document)=>p.querySelector(s);const $$=(s,p=document)=>[...p.querySelectorAll(s)];
let state={activeDay:0,filter:'all',paid:trip.costs.map(x=>x.id),expenses:[],checked:[]};
const fmt=v=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'EUR'}).format(v);
const maps=q=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const persist=()=>window.RotaStorage?.save(state);
const paidAmount=()=>trip.costs.filter(x=>state.paid.includes(x.id)).reduce((a,x)=>a+x.amount,0);

function nav(view){$$('.view').forEach(x=>x.classList.toggle('active',x.dataset.view===view));$$('[data-nav]').forEach(x=>x.classList.toggle('active',x.dataset.nav===view));location.hash=view;window.scrollTo({top:0,behavior:'smooth'});}
function renderOverview(){ $('#cityCards').innerHTML=trip.days.filter((_,i)=>i<4).map((d,i)=>`<button class="city-card" data-day="${i}" style="background-image:linear-gradient(180deg,transparent,rgba(2,25,35,.75)),url('${d.image}')"><span>${d.date}</span><b>${d.city}</b><small>${d.title}</small></button>`).join(''); }
function renderItinerary(){ $('#dayTabs').innerHTML=trip.days.map((d,i)=>`<button class="day-tab ${state.activeDay===i?'active':''}" data-day="${i}"><b>D${i+1}</b><span>${d.date.split('·')[1]}</span><small>${d.city}</small></button>`).join('');const d=trip.days[state.activeDay];$('#itinerary').innerHTML=`<div class="day-title"><p class="eyebrow">${d.date.toUpperCase()} · ${d.city.toUpperCase()}</p><h2>${d.title}</h2></div><div class="timeline">${d.items.map((x,i)=>`<button class="activity-card" data-activity="${i}"><span class="time">${x.time}</span><span class="dot"></span><span class="activity-copy"><small>${x.category.toUpperCase()}</small><b>${x.title}</b><em>${x.description}</em></span><img src="${x.image}" alt="${x.title}" /></button>`).join('')}</div>`; }
function renderCosts(){const list=trip.costs.filter(x=>state.filter==='all'||x.category===state.filter);$('#plannedTotal').textContent=fmt(trip.paidTotal);$('#home-budget').textContent=`${fmt(trip.paidTotal)} já pago`;const paid=paidAmount();$('#paidSummary').textContent=`${fmt(paid)} marcado como conferido`;$('#paidPercent').textContent=`${Math.round(paid/trip.paidTotal*100)}%`;$('#costList').innerHTML=list.map(x=>`<button class="cost-item ${state.paid.includes(x.id)?'paid':''}" data-cost="${x.id}"><span class="cost-check">${state.paid.includes(x.id)?'✓':''}</span><span><small>${x.category}</small><b>${x.title}</b><em>${x.note}</em></span><strong>${fmt(x.amount)}</strong></button>`).join('');$('#expenseList').innerHTML=state.expenses.length?state.expenses.map((x,i)=>`<div class="expense-row"><span><b>${x.label}</b><small>${x.category}</small></span><strong>${fmt(x.amount)}</strong><button data-expense="${i}" aria-label="Excluir gasto">×</button></div>`).join(''):'<p class="empty">Nenhum gasto real registrado ainda.</p>'; }
function renderGuide(){ $('#checkList').innerHTML=trip.checklist.map(x=>`<button class="check-item ${state.checked.includes(x.id)?'done':''}" data-check="${x.id}"><span>${state.checked.includes(x.id)?'✓':''}</span><div><b>${x.title}</b><small>${x.note}</small></div></button>`).join('');$('#checkCount').textContent=`${state.checked.length}/${trip.checklist.length}`; }
function renderAll(){renderOverview();renderItinerary();renderCosts();renderGuide();}
function openActivity(i){const x=trip.days[state.activeDay].items[i];$('#dialogContent').innerHTML=`<img class="dialog-img" src="${x.image}" alt="${x.title}"/><p class="eyebrow">${x.time} · ${x.category.toUpperCase()}</p><h2>${x.title}</h2><p>${x.description}</p><div class="dialog-meta"><span>${x.cost}</span><a class="map-button" href="${maps(x.maps)}" target="_blank" rel="noreferrer">⌖ Abrir no Google Maps</a></div>`;$('#activityDialog').showModal();}
function bind(){document.addEventListener('click',e=>{const navBtn=e.target.closest('[data-nav]');if(navBtn){e.preventDefault();nav(navBtn.dataset.nav);return}const day=e.target.closest('[data-day]');if(day){state.activeDay=+day.dataset.day;persist();renderItinerary();return}const act=e.target.closest('[data-activity]');if(act){openActivity(+act.dataset.activity);return}const c=e.target.closest('[data-cost]');if(c){const id=c.dataset.cost;state.paid=state.paid.includes(id)?state.paid.filter(x=>x!==id):[...state.paid,id];persist();renderCosts();return}const ch=e.target.closest('[data-check]');if(ch){const id=ch.dataset.check;state.checked=state.checked.includes(id)?state.checked.filter(x=>x!==id):[...state.checked,id];persist();renderGuide();return}const exp=e.target.closest('[data-expense]');if(exp){state.expenses=state.expenses.filter((_,i)=>i!==+exp.dataset.expense);persist();renderCosts();return}const seg=e.target.closest('[data-cost-filter]');if(seg){state.filter=seg.dataset.costFilter;$$('[data-cost-filter]').forEach(x=>x.classList.toggle('active',x===seg));renderCosts();}});$('#expenseForm').addEventListener('submit',e=>{e.preventDefault();const amount=Number($('#expenseAmount').value.replace(',','.'));if(!amount)return;state.expenses.push({category:$('#expenseCategory').value,label:$('#expenseLabel').value,amount});persist();e.target.reset();renderCosts();});$('#closeDialog').addEventListener('click',()=>$('#activityDialog').close());}
async function start(){const saved=await window.RotaStorage?.restore();if(saved)state={...state,...saved};renderAll();bind();if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js');const hash=location.hash.slice(1);if(['hoje','roteiro','custos','guia'].includes(hash))nav(hash);}start();
