// ---- Products ----
// cat is "syrup" or "churan". To add a product, copy one line below and change its values.
// Images are in the imgdet/ folder. Optional: add price:"Rs 000" to show a price on the card.
const products=[
  {"cat": "syrup", "name": "Risho-Liv Syrup", "img": "imgdet/risho.jpeg", "type": "Ayurvedic liver syrup", "pack": "200 ml", "points": ["Protects and supports the liver (liver protective)", "Helps improve digestion", "Boosts appetite and helps reduce weakness", "Herbal formula, 100% natural"]},
  {"cat": "syrup", "name": "Risho Liv Ds Syrup", "img": "imgdet/rishods.jpeg", "type": "Ayurvedic liver syrup", "pack": "200 ml", "points": ["Protects the liver and helps maintain healthy liver function", "Improves digestion and boosts natural appetite", "Supports in fatty liver and weakness, aids overall strength", "Sugar free, 100% natural Ayurvedic formulation"]},
  {"cat": "syrup", "name": "Abhayristha Syrup", "img": "imgdet/abhay.jpeg", "type": "Ayurvedic syrup", "pack": "200 ml", "points": ["Helpful in constipation and piles", "Helps dry up piles (lumps) and reduce pain", "Supportive in stomach disorders and ulcers", "100% sugar free Ayurvedic, natural herbal formula"]},
  {"cat": "syrup", "name": "Stono Rish Syrup", "img": "imgdet/stono.jpeg", "type": "Ayurvedic stone syrup", "pack": "200 ml", "points": ["Helpful in dissolving kidney stones", "Relieves pain and burning sensation", "Supports healthy, free urine flow", "Sugar free Ayurvedic, natural formula"]},
  {"cat": "syrup", "name": "Ortho Rish Syrup", "img": "imgdet/ortho.jpeg", "type": "Ayurvedic joint pain syrup", "pack": "200 ml", "points": ["Relief from joint pain and swelling", "Helpful for arthritis and lower back pain", "Beneficial for muscle stiffness and tightness", "100% sugar free, natural Ayurvedic care"]},
  {"cat": "syrup", "name": "Blood Purrish Syrup", "img": "imgdet/blood.jpeg", "type": "Ayurvedic blood purifier syrup", "pack": "200 ml", "points": ["Natural blood purifier that helps remove toxins and impurities from the blood", "Helps reduce pimples, acne and boils, and promotes clear, healthy skin", "Beneficial in itching, skin disorders and allergies, and soothes skin irritation", "Sugar free, made with 100% natural Ayurvedic herbs"]},
  {"cat": "syrup", "name": "Hemorish Syrup", "img": "imgdet/hemo.jpeg", "type": "Restorative and haematinic syrup", "pack": "", "points": ["Helpful in anemia (low blood): restorative and haematinic action", "Helps remove weakness and fatigue", "Helps with loss of appetite", "Fortified with natural vitamins and minerals, made with natural fruits and herbs"]},
  {"cat": "syrup", "name": "Femorish Syrup", "img": "imgdet/femo.jpeg", "type": "Haematinic feminine syrup with Ashoka", "pack": "200 ml", "points": ["Special health tonic for women", "With Ashoka: supports uterine health", "Helps in anemia and weakness", "Ayurvedic, herbal and 100% natural"]},
  {"cat": "syrup", "name": "Cofrish Expectorant", "img": "imgdet/cof.jpeg", "type": "Herbal expectorant syrup", "pack": "100 ml", "points": ["Relief from cough and cold", "Relieves sore throat and irritation", "Expectorant: helps expel phlegm", "Eases breathing. Anti-allergic, decongestant, herbal formula"]},
  {"cat": "syrup", "name": "Aloevera Swaras", "img": "imgdet/aloe.jpeg", "type": "Aloe vera swaras (juice)", "pack": "200 ml", "points": ["Helps manage diabetes and blood sugar levels", "Relieves constipation and improves digestion", "Beneficial in blood disorders and high blood pressure", "Energy drink for all age groups: no added water, sugar free, 100% natural"]},
  {"cat": "syrup", "name": "Zonyl Herbal Mixture", "img": "imgdet/zonyl.jpeg", "type": "Ayurvedic herbal mixture", "pack": "", "points": ["Relief in sciatic pain (pain from the lower back down to the leg)", "Helpful in joint and muscle pain", "Herbal mixture, 100% natural", "Makes walking and moving around easier"]}
];
const WA="919431873287";
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function card(p){
  const msg=encodeURIComponent("Hello, I would like information about "+p.name+".");
  return `<article class="card">
    <button class="pic" type="button" data-zoom="${esc(p.img)}" data-alt="${esc(p.name)}" aria-label="View ${esc(p.name)} picture full size"><img src="${esc(p.img)}" alt="${esc(p.name)}: pack and benefits" loading="lazy"></button>
    <div class="body">
      <span class="tag">${esc(p.type)}${p.pack?" &middot; "+esc(p.pack):""}</span>
      <h3>${esc(p.name)}</h3>
      <ul class="points">${p.points.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
      ${p.price?`<p class="meta"><strong>Price:</strong> ${esc(p.price)}</p>`:""}
      <a class="btn green" href="https://wa.me/${WA}?text=${msg}" target="_blank" rel="noopener">Ask about this product</a>
    </div></article>`;
}
// home page: first few products (only if a #grid exists on the page)
const g=document.getElementById("grid");
if(g)g.innerHTML=(g.dataset.limit?products.slice(0,+g.dataset.limit):products).map(card).join("");
// products page: one section per category
["syrup","churan"].forEach(c=>{
  const el=document.getElementById("grid-"+c);if(!el)return;
  const list=products.filter(p=>p.cat===c);
  el.innerHTML=list.length?list.map(card).join(""):
    `<div class="empty"><p>Our churan range will be added here soon. Message us on WhatsApp to know what is available.</p><a class="btn green" href="https://wa.me/${WA}?text=${encodeURIComponent("Hello, I would like to know about your churan products.")}" target="_blank" rel="noopener">Ask on WhatsApp</a></div>`;
  const n=document.getElementById("count-"+c);if(n)n.textContent=list.length;
});
// tap a product picture to see it full size
(function(){
  let box=null;
  function close(){if(box){box.remove();box=null;document.body.style.overflow=""}}
  document.addEventListener("click",e=>{
    const b=e.target.closest("[data-zoom]");
    if(!b){if(box&&e.target.closest(".lightbox"))close();return}
    box=document.createElement("div");box.className="lightbox";box.setAttribute("role","dialog");box.setAttribute("aria-label",b.dataset.alt);
    const img=document.createElement("img");img.src=b.dataset.zoom;img.alt=b.dataset.alt;
    const x=document.createElement("button");x.type="button";x.className="lb-close";x.setAttribute("aria-label","Close");x.textContent="\u00d7";
    box.append(x,img);document.body.appendChild(box);document.body.style.overflow="hidden";x.focus();
  });
  document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
})();

// contact page: enquiry form opens WhatsApp
const enq=document.getElementById("enq");
if(enq)enq.addEventListener("submit",e=>{
  e.preventDefault();
  const f=enq.elements;
  const t="Name: "+f.n.value+"\nPhone: "+f.p.value+"\nEnquiry: "+f.q.value;
  window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(t),"_blank","noopener");
});

// Home banner slider (images are in the imgsld/ folder)
// d = laptop image, m = mobile image (the same file is fine). To add a slide, copy one line.
const SLIDES=[
  {d:"imgsld/slide.png",m:"imgsld/slide.png",alt:"Rishi Ratna Ayurved banner"}
  // ,{d:"imgsld/slide2.png",m:"imgsld/slide2.png",alt:"Describe slide 2"}
];
(function(){
  const box=document.querySelector(".bn");if(!box)return;
  const track=box.querySelector(".bn-track"),dotsEl=box.querySelector(".bn-dots");
  track.innerHTML=SLIDES.map((s,i)=>`<div class="bn-slide" style="--bg:url('${s.d}')" role="group" aria-roledescription="slide" aria-label="${i+1} of ${SLIDES.length}"><picture><source media="(max-width:700px)" srcset="${s.m}"><img src="${s.d}" alt="${s.alt}"${i?' loading="lazy"':''}></picture></div>`).join("");

  // side space colours: copy the picture's left and right edge colours
  function edges(img,slide){
    try{
      const c=document.createElement("canvas");c.width=40;c.height=12;
      const ctx=c.getContext("2d");ctx.drawImage(img,0,0,40,12);
      const px=ctx.getImageData(0,0,40,12).data;
      const col=x=>Array.from({length:12},(_,y)=>{const k=(y*40+x)*4;return "rgb("+px[k]+","+px[k+1]+","+px[k+2]+") "+Math.round(y/11*100)+"%"}).join(",");
      slide.style.setProperty("--gl",col(0));slide.style.setProperty("--gr",col(39));slide.classList.add("ed");
    }catch(e){/* keeps the blurred fallback */}
  }
  [...track.children].forEach(sl=>{
    const im=sl.querySelector("img"),run=()=>edges(im,sl);
    im.complete&&im.naturalWidth?run():im.addEventListener("load",run);
  });

  if(SLIDES.length<2){box.classList.add("one");return}
  dotsEl.innerHTML=SLIDES.map((s,i)=>`<button type="button" aria-label="Go to slide ${i+1}"></button>`).join("");
  const slides=[...track.children],dots=[...dotsEl.children];let i=0,timer=null,x0=null;
  function go(k){i=(k+slides.length)%slides.length;track.style.transform="translateX(-"+(i*100)+"%)";
    slides.forEach((s,j)=>{s.inert=j!==i;s.setAttribute("aria-hidden",j!==i)});dots.forEach((d,j)=>d.setAttribute("aria-current",j===i))}
  function stop(){clearInterval(timer)}
  function play(){stop();if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;timer=setInterval(()=>go(i+1),5500)}
  box.querySelector(".prev").onclick=()=>{go(i-1);play()};
  box.querySelector(".next").onclick=()=>{go(i+1);play()};
  dots.forEach((d,j)=>d.onclick=()=>{go(j);play()});
  box.addEventListener("mouseenter",stop);box.addEventListener("mouseleave",play);
  box.addEventListener("touchstart",e=>{x0=e.touches[0].clientX},{passive:true});
  box.addEventListener("touchend",e=>{if(x0===null)return;const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50){go(d<0?i+1:i-1);play()}x0=null});
  go(0);play();
})();

// Mobile hamburger menu
(function(){
  const btn=document.querySelector(".menu-btn"),nav=document.getElementById("nav");
  if(!btn||!nav)return;
  function set(open){
    nav.classList.toggle("open",open);
    btn.setAttribute("aria-expanded",open);
    btn.setAttribute("aria-label",open?"Close menu":"Open menu");
  }
  btn.addEventListener("click",e=>{e.stopPropagation();set(!nav.classList.contains("open"))});
  nav.addEventListener("click",e=>{if(e.target.closest("a"))set(false)});
  document.addEventListener("click",e=>{if(!nav.contains(e.target))set(false)});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")set(false)});
  matchMedia("(min-width:821px)").addEventListener("change",e=>{if(e.matches)set(false)});
})();

// automatic copyright year (pages that have <span id="yr">)
const yr=document.getElementById("yr");
if(yr)yr.textContent=new Date().getFullYear();