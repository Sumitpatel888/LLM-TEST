const nav=document.querySelector('.nav');
const toggle=document.querySelector('.menu-toggle');
const glow=document.querySelector('.cursor-glow');
const parallaxEls=document.querySelectorAll('.parallax');

window.addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled',window.scrollY>40);
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  parallaxEls.forEach(el=>{
    const speed=parseFloat(el.dataset.speed||.15);
    const y=window.scrollY*speed;
    el.style.transform=`translate3d(0,${y}px,0) scale(${el.classList.contains('hero-bg')?'1.08':'1'})`;
  });
},{passive:true});

toggle?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded',open);
});

document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.querySelectorAll('.character-card').forEach(card=>card.addEventListener('mouseenter',()=>{
  document.querySelectorAll('.character-card').forEach(c=>c.classList.remove('active'));
  card.classList.add('active');
}));

document.querySelectorAll('.arc-item').forEach(item=>item.addEventListener('click',()=>{
  document.querySelectorAll('.arc-item').forEach(i=>i.classList.remove('active'));
  item.classList.add('active');
}));

window.addEventListener('pointermove',e=>{
  if(window.matchMedia('(pointer:coarse)').matches)return;
  glow.style.left=e.clientX+'px'; glow.style.top=e.clientY+'px';
},{passive:true});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.animate([
    {opacity:0,transform:'translateY(22px)'},{opacity:1,transform:'translateY(0)'}
  ],{duration:700,easing:'cubic-bezier(.2,.8,.2,1)',fill:'forwards'});observer.unobserve(entry.target)}
}),{threshold:.12});
document.querySelectorAll('.manifesto-heading,.manifesto-copy,.character-card,.arc-item,.blade-copy,.quote blockquote,.gallery-item').forEach(el=>{el.style.opacity=0;observer.observe(el)});
