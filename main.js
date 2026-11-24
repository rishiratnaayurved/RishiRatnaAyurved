(function(){
  const scriptUrl=document.currentScript.src;
  const loader=document.createElement("div");
  loader.className="page-loader";
  loader.setAttribute("role","status");
  loader.setAttribute("aria-label","Loading");

  const spinner=document.createElement("span");
  spinner.className="page-loader-spinner";

  const logo=document.createElement("img");
  logo.className="page-loader-logo";
  logo.src=new URL("logo/rra.png",scriptUrl).href;
  logo.alt="";

  const ring=document.createElement("span");
  ring.className="page-loader-ring";
  ring.setAttribute("aria-hidden","true");

  spinner.append(logo,ring);
  loader.append(spinner);
  loader.addEventListener("animationend",()=>loader.remove(),{once:true});
  document.body.appendChild(loader);
})();

// ---- Products (With PDF Details & Correct List) ----
const products=[
  {
    "cat": "syrup", "slug": "risho-liv-syrup", "name": "Risho-Liv Syrup", "img": "imgdet/risho.jpeg", "type": "Ayurvedic liver syrup", "pack": "200 ml", 
    "points": ["Protects and supports the liver", "Helps improve digestion", "Boosts appetite and helps reduce weakness", "Herbal formula, 100% natural"], 
    "dosage": "रोज 15ml सुबह-शाम या चिकित्सक के परामर्श अनुसार।",
    "ingredients": "Bhau Amla, Bhringraj, Kasni, Fumaria, Arjun, Harad, Black bhatkoya, Bajradanti, Deodar, Kutki, Vidang."
  },
  {
    "cat": "syrup", "slug": "risho-liv-ds-syrup", "name": "Risho Liv Ds Syrup", "img": "imgdet/rishods.jpeg", "type": "Ayurvedic liver syrup", "pack": "200 ml", 
    "points": ["Protects the liver and helps maintain healthy liver function", "Improves digestion and boosts natural appetite", "Supports in fatty liver and weakness", "Sugar free, 100% natural Ayurvedic formulation"]
  },
  {
    "cat": "syrup", "slug": "abhayristha-syrup", "name": "Abhayristha Syrup", "img": "imgdet/abhay.jpeg", "type": "Ayurvedic syrup", "pack": "200 ml", 
    "points": ["Helpful in constipation and piles", "Helps dry up piles (lumps) and reduce pain", "Supportive in stomach disorders and ulcers", "100% sugar free Ayurvedic, natural herbal formula"]
  },
  {
    "cat": "syrup", "slug": "stono-rish-syrup", "name": "Stono Rish Syrup", "img": "imgdet/stono.jpeg", "type": "Ayurvedic stone syrup", "pack": "200 ml", 
    "points": ["Helpful in dissolving kidney stones", "Relieves pain and burning sensation", "Supports healthy, free urine flow", "Sugar free Ayurvedic, natural formula"]
  },
  {
    "cat": "syrup", "slug": "ortho-rish-syrup", "name": "Ortho Rish Syrup", "img": "imgdet/ortho.jpeg", "type": "Ayurvedic joint pain syrup", "pack": "200 ml", 
    "points": ["Relief from joint pain and swelling", "Helpful for arthritis and lower back pain", "Beneficial for muscle stiffness and tightness", "100% sugar free, natural Ayurvedic care"], 
    "dosage": "रोज 10ml सुबह-शाम या चिकित्सक के परामर्श अनुसार।",
    "ingredients": "Ashwagandha, Salai, Haldi, Suranjan, Sounth, Nirgundi, Febrifuge, Khurasni Ajwain, Sounf, Shilajit, Rasna, Lahsuna."
  },
  {
    "cat": "syrup", "slug": "blood-purrish-syrup", "name": "Blood Purrish Syrup", "img": "imgdet/blood.jpeg", "type": "Ayurvedic blood purifier syrup", "pack": "200 ml", 
    "points": ["Natural blood purifier that helps remove toxins", "Helps reduce pimples, acne and boils", "Beneficial in itching and skin disorders", "Sugar free, made with 100% natural herbs"], 
    "dosage": "रोज 15ml सुबह-शाम या चिकित्सक के परामर्श अनुसार।",
    "ingredients": "Majith, Khadir chhal, Daruhaldi, Chirayata, Kalmegh, Pitapapada, Gorakhmundi, Vasa, Raktachandan, Anantmool, Neem, Chopchini, Gulab."
  },
  {
    "cat": "syrup", "slug": "hemorish-syrup", "name": "Hemorish Syrup", "img": "imgdet/hemo.jpeg", "type": "Restorative and haematinic syrup", "pack": "", 
    "points": ["Helpful in anemia (low blood)", "Helps remove weakness and fatigue", "Helps with loss of appetite", "Fortified with natural vitamins and minerals"], 
    "dosage": "रोज 15ml सुबह-शाम या चिकित्सक के परामर्श अनुसार।",
    "ingredients": "Bhuchank, Ashwagandha, Tulsi, Amla, Mulethi, Pippali, Elaichi, Lauh Bhasma."
  },
  {
    "cat": "syrup", "slug": "femorish-syrup", "name": "Femorish Syrup", "img": "imgdet/femo.jpeg", "type": "Haematinic feminine syrup", "pack": "200 ml", 
    "points": ["Special health tonic for women", "With Ashoka: supports uterine health", "Helps in anemia and weakness", "Ayurvedic, herbal and 100% natural"], 
    "dosage": "रोज 15ml सुबह-शाम या चिकित्सक के परामर्श अनुसार।",
    "ingredients": "Ashoka, Lodhra, Giloy, Shatavari, Arjun, Gular, Mulethi, Ashwagandha, Deodar, Adrak, Arandi, Vatkambal, Pippali."
  },
  {
    "cat": "syrup", "slug": "cofrish-expectorant", "name": "Cofrish Expectorant", "img": "imgdet/cof.jpeg", "type": "Herbal expectorant syrup", "pack": "100 ml", 
    "points": ["Relief from cough and cold", "Relieves sore throat and irritation", "Expectorant: helps expel phlegm", "Anti-allergic, decongestant"], 
    "dosage": "रोज 10ml सुबह-शाम या चिकित्सक के परामर्श अनुसार।",
    "ingredients": "Adhatoda vasica, Adrak, Tulsi, Baheda, Sariva, Mulethi, Pippali, Kalimirch, Mentha, Voila Odorata, Haldi."
  },
  {
    "cat": "syrup", "slug": "aloevera-swaras", "name": "Aloevera Swaras", "img": "imgdet/aloe.jpeg", "type": "Aloe vera swaras (juice)", "pack": "200 ml", 
    "points": ["Helps manage diabetes and blood sugar", "Relieves constipation and improves digestion", "Beneficial in blood disorders", "Energy drink for all age groups"], 
    "dosage": "रोज 20ml सुबह-शाम या चिकित्सक के परामर्श अनुसार।",
    "ingredients": "Aloevera (55%), Dhania, Jamun, Kalmegh, Neem, Chhoti Dudhi, Giloy, Nirgundi, Gokhru, Makoya, Haldi."
  },
  {
    "cat": "syrup", "slug": "zonyl-herbal-mixture", "name": "Zonyl Herbal Mixture", "img": "imgdet/zonyl.jpeg", "type": "Ayurvedic herbal mixture", "pack": "", 
    "points": ["Relief in sciatic pain", "Helpful in joint and muscle pain", "Herbal mixture, 100% natural", "Makes walking and moving around easier"]
  }
];

const WA="919431873287";
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

function card(p){
  const msg=encodeURIComponent("Hello, I would like information about "+p.name+".");
  const page="product/"+esc(p.slug)+".html";
  
  const dosageHtml = p.dosage ? `<div style="font-size:0.9rem; color:#A8D9B6; margin:10px 0; background:rgba(0,0,0,0.2); padding:10px; border-left:3px solid #4EBB7B; border-radius:4px;"><b>खुराक:</b> ${esc(p.dosage)}</div>` : "";
  
  const ingredientsHtml = p.ingredients ? `
    <details style="font-size:0.85rem; margin-bottom:15px; color:#B7CDBD;">
      <summary style="cursor:pointer; color:#4EBB7B; font-weight:600;">View Ingredients (Composition)</summary>
      <p style="margin-top:8px; background:rgba(0,0,0,0.1); padding:8px; border-radius:4px;">${esc(p.ingredients)}</p>
    </details>` : "";

  return `<article class="card">
    <a class="pic" href="${page}" aria-label="Open ${esc(p.name)} full details"><img src="${esc(p.img)}" alt="${esc(p.name)}: pack and benefits" loading="lazy"></a>
    <div class="body">
      <span class="tag">${esc(p.type)}${p.pack?" &middot; "+esc(p.pack):""}</span>
      <h3><a href="${page}">${esc(p.name)}</a></h3>
      <ul class="points">${p.points.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
      ${dosageHtml}
      ${ingredientsHtml}
      ${p.price?`<p class="meta"><strong>Price:</strong> ${esc(p.price)}</p>`:""}
      <div class="card-actions">
        <a class="btn outline" href="${page}">View details</a>
        <a class="btn green" href="https://wa.me/${WA}?text=${msg}" target="_blank" rel="noopener">Ask on WhatsApp</a>
      </div>
    </div></article>`;
}

// home page: first few products
const g=document.getElementById("grid");
if(g)g.innerHTML=(g.dataset.limit?products.slice(0,+g.dataset.limit):products).map(card).join("");

// products page: one section per category
["syrup","churan"].forEach(c=>{
  const el=document.getElementById("grid-"+c);if(!el)return;
  const list=products.filter(p=>p.cat===c);
  el.innerHTML=list.length?list.map(card).join(""):
    `<div class="empty"><p>Our ${c} range will be added here soon. Message us on WhatsApp to know what is available.</p><a class="btn green" href="https://wa.me/${WA}?text=${encodeURIComponent("Hello, I would like to know about your "+c+" products.")}" target="_blank" rel="noopener">Ask on WhatsApp</a></div>`;
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

// ---- Home banner slider ----
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

  function edges(img,slide){
    try{
      const c=document.createElement("canvas");c.width=40;c.height=12;
      const ctx=c.getContext("2d");ctx.drawImage(img,0,0,40,12);
      const px=ctx.getImageData(0,0,40,12).data;
      const col=x=>Array.from({length:12},(_,y)=>{const k=(y*40+x)*4;return "rgb("+px[k]+","+px[k+1]+","+px[k+2]+") "+Math.round(y/11*100)+"%"}).join(",");
      slide.style.setProperty("--gl",col(0));slide.style.setProperty("--gr",col(39));slide.classList.add("ed");
    }catch(e){}
  }

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

// automatic copyright year
const yr=document.getElementById("yr");
if(yr)yr.textContent=new Date().getFullYear();

// ==========================================
// FLOATING CALL AND WHATSAPP BUTTONS
// ==========================================
(function(){
    const style = document.createElement("style");
    style.innerHTML = `
        .floating-contact {
            position: fixed;
            bottom: 25px;
            left: 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            z-index: 9999;
        }
        .floating-btn {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-decoration: none;
        }
        .floating-btn:hover {
            transform: scale(1.1) translateY(-3px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.4);
        }
        .floating-btn svg {
            width: 28px;
            height: 28px;
            fill: currentColor;
        }
        .btn-call {
            background-color: #34b7f1;
        }
        .btn-wa {
            background-color: #25D366;
            animation: pulse-wa 2s infinite;
        }
        @keyframes pulse-wa {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        @media(max-width: 600px) {
            .floating-contact { bottom: 15px; left: 15px; gap: 10px; }
            .floating-btn { width: 50px; height: 50px; }
            .floating-btn svg { width: 24px; height: 24px; }
        }
    `;
    document.head.appendChild(style);

    const container = document.createElement("div");
    container.className = "floating-contact";

    const phoneNumber = "919431873287";
    const message = encodeURIComponent("Hello Rishi Ratna Ayurved, I want to know more about your products.");

    container.innerHTML = `
        <a href="tel:+${phoneNumber}" class="floating-btn btn-call" aria-label="Call Us" title="Call Us">
            <svg viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.03 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
        </a>
        <a href="https://wa.me/${phoneNumber}?text=${message}" target="_blank" rel="noopener" class="floating-btn btn-wa" aria-label="Chat on WhatsApp" title="Chat on WhatsApp">
            <svg viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"/>
            </svg>
        </a>
    `;

    document.body.appendChild(container);
})();
