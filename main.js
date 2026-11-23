// ---- Products ----
// cat is "syrup" or "churan". To add a product, copy one line below and change its values.
// slug = product page ka naam (product/<slug>.html). Images are in the imgdet/ folder. Optional: add price:"Rs 000" to show a price on the card.
const products=[
  {"cat": "syrup", "slug": "risho-liv-syrup", "name": "Risho-Liv Syrup", "img": "imgdet/risho.jpeg", "type": "Ayurvedic liver syrup", "pack": "200 ml", "points": ["Protects and supports the liver (liver protective)", "Helps improve digestion", "Boosts appetite and helps reduce weakness", "Herbal formula, 100% natural"]},
  {"cat": "syrup", "slug": "risho-liv-ds-syrup", "name": "Risho Liv Ds Syrup", "img": "imgdet/rishods.jpeg", "type": "Ayurvedic liver syrup", "pack": "200 ml", "points": ["Protects the liver and helps maintain healthy liver function", "Improves digestion and boosts natural appetite", "Supports in fatty liver and weakness, aids overall strength", "Sugar free, 100% natural Ayurvedic formulation"]},
  {"cat": "syrup", "slug": "abhayristha-syrup", "name": "Abhayristha Syrup", "img": "imgdet/abhay.jpeg", "type": "Ayurvedic syrup", "pack": "200 ml", "points": ["Helpful in constipation and piles", "Helps dry up piles (lumps) and reduce pain", "Supportive in stomach disorders and ulcers", "100% sugar free Ayurvedic, natural herbal formula"]},
  {"cat": "syrup", "slug": "stono-rish-syrup", "name": "Stono Rish Syrup", "img": "imgdet/stono.jpeg", "type": "Ayurvedic stone syrup", "pack": "200 ml", "points": ["Helpful in dissolving kidney stones", "Relieves pain and burning sensation", "Supports healthy, free urine flow", "Sugar free Ayurvedic, natural formula"]},
  {"cat": "syrup", "slug": "ortho-rish-syrup", "name": "Ortho Rish Syrup", "img": "imgdet/ortho.jpeg", "type": "Ayurvedic joint pain syrup", "pack": "200 ml", "points": ["Relief from joint pain and swelling", "Helpful for arthritis and lower back pain", "Beneficial for muscle stiffness and tightness", "100% sugar free, natural Ayurvedic care"]},
  {"cat": "syrup", "slug": "blood-purrish-syrup", "name": "Blood Purrish Syrup", "img": "imgdet/blood.jpeg", "type": "Ayurvedic blood purifier syrup", "pack": "200 ml", "points": ["Natural blood purifier that helps remove toxins and impurities from the blood", "Helps reduce pimples, acne and boils, and promotes clear, healthy skin", "Beneficial in itching, skin disorders and allergies, and soothes skin irritation", "Sugar free, made with 100% natural Ayurvedic herbs"]},
  {"cat": "syrup", "slug": "hemorish-syrup", "name": "Hemorish Syrup", "img": "imgdet/hemo.jpeg", "type": "Restorative and haematinic syrup", "pack": "", "points": ["Helpful in anemia (low blood): restorative and haematinic action", "Helps remove weakness and fatigue", "Helps with loss of appetite", "Fortified with natural vitamins and minerals, made with natural fruits and herbs"]},
  {"cat": "syrup", "slug": "femorish-syrup", "name": "Femorish Syrup", "img": "imgdet/femo.jpeg", "type": "Haematinic feminine syrup with Ashoka", "pack": "200 ml", "points": ["Special health tonic for women", "With Ashoka: supports uterine health", "Helps in anemia and weakness", "Ayurvedic, herbal and 100% natural"]},
  {"cat": "syrup", "slug": "cofrish-expectorant", "name": "Cofrish Expectorant", "img": "imgdet/cof.jpeg", "type": "Herbal expectorant syrup", "pack": "100 ml", "points": ["Relief from cough and cold", "Relieves sore throat and irritation", "Expectorant: helps expel phlegm", "Eases breathing. Anti-allergic, decongestant, herbal formula"]},
  {"cat": "syrup", "slug": "aloevera-swaras", "name": "Aloevera Swaras", "img": "imgdet/aloe.jpeg", "type": "Aloe vera swaras (juice)", "pack": "200 ml", "points": ["Helps manage diabetes and blood sugar levels", "Relieves constipation and improves digestion", "Beneficial in blood disorders and high blood pressure", "Energy drink for all age groups: no added water, sugar free, 100% natural"]},
  {"cat": "syrup", "slug": "zonyl-herbal-mixture", "name": "Zonyl Herbal Mixture", "img": "imgdet/zonyl.jpeg", "type": "Ayurvedic herbal mixture", "pack": "", "points": ["Relief in sciatic pain (pain from the lower back down to the leg)", "Helpful in joint and muscle pain", "Herbal mixture, 100% natural", "Makes walking and moving around easier"]}
];
const WA="919431873287";
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function card(p){
  const msg=encodeURIComponent("Hello, I would like information about "+p.name+".");
  const page="product/"+esc(p.slug)+".html";
  return `<article class="card">
    <a class="pic" href="${page}" aria-label="Open ${esc(p.name)} full details"><img src="${esc(p.img)}" alt="${esc(p.name)}: pack and benefits" loading="lazy"></a>
    <div class="body">
      <span class="tag">${esc(p.type)}${p.pack?" &middot; "+esc(p.pack):""}</span>
      <h3><a href="${page}">${esc(p.name)}</a></h3>
      <ul class="points">${p.points.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
      ${p.price?`<p class="meta"><strong>Price:</strong> ${esc(p.price)}</p>`:""}
      <div class="card-actions">
        <a class="btn outline" href="${page}">View details</a>
        <a class="btn green" href="https://wa.me/${WA}?text=${msg}" target="_blank" rel="noopener">Ask on WhatsApp</a>
      </div>
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

// ---- Home banner slider (images imgsld/ folder me hain) ----
// d = laptop image, m = mobile image (same file bhi chalegi). Nayi image add karni ho to ek line copy karo.
// href = slide pe click karne par kaunsa product page khule (optional).
// fix:true = sirf us slide pe naya side-colour fix lagega (abhi Risho, Ortho aur Femo). Pehli banner slide pehle jaisi hi rahegi.
// l / r = us slide ke left / right edge ka backup colour (canvas na chale tab use hota hai).
const SLIDES=[
  {d:"imgsld/lptp.png",m:"imgsld/mob.png",alt:"Rishi Ratna Ayurved banner"},
  {d:"imgsld/risho.jpeg",m:"imgsld/rishomob.png",alt:"Risho-Liv Syrup",href:"product/risho-liv-syrup.html",fix:true,l:"#000000",r:"#F6EDC8"},
  {d:"imgsld/ortho.jpeg",m:"imgsld/orthomob.png",alt:"Ortho Rish Syrup",href:"product/ortho-rish-syrup.html",fix:true,l:"#000000",r:"#F4F1EA"},
  {d:"imgsld/femo.jpeg",m:"imgsld/femomob.png",alt:"Femorish Syrup",href:"product/femorish-syrup.html",fix:true,l:"#000000",r:"#FAF7F0"}
];
(function(){
  const box=document.querySelector(".bn");if(!box)return;
  const track=box.querySelector(".bn-track"),dotsEl=box.querySelector(".bn-dots");
  track.innerHTML=SLIDES.map((s,i)=>`<div class="bn-slide" style="--bg:url('${s.d}')" role="group" aria-roledescription="slide" aria-label="${i+1} of ${SLIDES.length}">${s.href?`<a class="bn-link" href="${s.href}" aria-label="${s.alt}: view full details">`:""}<picture><source media="(max-width:700px)" srcset="${s.m}"><img src="${s.d}" alt="${s.alt}" decoding="async"></picture>${s.href?"</a>":""}</div>`).join("");

  // ---- side space: picture ke left / right edge ka colour copy karo ----

  // PEHLE WALA (original) tareeka: sirf pehli banner slide isi se chalti hai, koi badlav nahi.
  function edges(img,slide){
    try{
      const c=document.createElement("canvas");c.width=40;c.height=12;
      const ctx=c.getContext("2d");ctx.drawImage(img,0,0,40,12);
      const px=ctx.getImageData(0,0,40,12).data;
      const col=x=>Array.from({length:12},(_,y)=>{const k=(y*40+x)*4;return "rgb("+px[k]+","+px[k+1]+","+px[k+2]+") "+Math.round(y/11*100)+"%"}).join(",");
      slide.style.setProperty("--gl",col(0));slide.style.setProperty("--gr",col(39));slide.classList.add("ed");
    }catch(e){/* keeps the blurred fallback */}
  }

  // NAYA tareeka: fix:true wali slides (Risho, Ortho, Femo) ke liye
  const SAMPLE=12;
  const solid=c=>c+" 0%,"+c+" 100%";
  function setSides(slide,l,r){
    slide.style.setProperty("--gl",l);
    slide.style.setProperty("--gr",r);
    slide.classList.add("ed");
  }
  function edgesFix(img,slide,s){
    if(!img.naturalWidth)return;
    slide.style.setProperty("--bg","url('"+img.currentSrc+"')");
    try{
      const w=img.naturalWidth,h=img.naturalHeight;
      const c=document.createElement("canvas");c.width=2;c.height=SAMPLE;
      const ctx=c.getContext("2d",{willReadFrequently:true});
      ctx.drawImage(img,0,0,3,h,0,0,1,SAMPLE);
      ctx.drawImage(img,w-3,0,3,h,1,0,1,SAMPLE);
      const px=ctx.getImageData(0,0,2,SAMPLE).data;
      const col=x=>Array.from({length:SAMPLE},(_,y)=>{
        const k=(y*2+x)*4;
        return "rgb("+px[k]+","+px[k+1]+","+px[k+2]+") "+Math.round(y/(SAMPLE-1)*100)+"%";
      }).join(",");
      setSides(slide,col(0),col(1));
    }catch(e){
      if(s.l&&s.r)setSides(slide,solid(s.l),solid(s.r));
      else slide.classList.remove("ed");
    }
  }

  [...track.children].forEach((sl,n)=>{
    const im=sl.querySelector("img"),s=SLIDES[n];
    if(s.fix){
      const run=()=>edgesFix(im,sl,s);
      im.addEventListener("load",run);
      if(im.complete&&im.naturalWidth)run();
    }else{
      const run=()=>edges(im,sl);
      im.complete&&im.naturalWidth?run():im.addEventListener("load",run);
    }
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

// ---- Floating Call + WhatsApp buttons (har page pe, bottom-left) ----
// Number upar wale WA se aata hai (call aur WhatsApp dono ke liye same).
// CSS: style.css ke section 28 me (.float-cta, .fc-call, .fc-wa).
(function(){
  function addFloat(){
    if(document.querySelector(".float-cta"))return;
    const msg=encodeURIComponent("Namaste, mujhe Rishi Ratna Ayurved ke baare me jaankari chahiye.");
    const box=document.createElement("div");
    box.className="float-cta";
    box.innerHTML=
      '<a class="fc-call" href="tel:+'+WA+'" aria-label="Call Rishi Ratna Ayurved">'+
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>'+
      '</a>'+
      '<a class="fc-wa" href="https://wa.me/'+WA+'?text='+msg+'" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">'+
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>'+
      '</a>';
    document.body.appendChild(box);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",addFloat);
  else addFloat();
})();
