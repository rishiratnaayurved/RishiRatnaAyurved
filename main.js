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

// ---- Products Data (Updated with PDF Details & Trending SEO) ----
// Add or remove products here. The design will automatically adjust.
const products=[
  // --- SYRUPS ---
  {
    "cat": "syrup", "slug": "risho-liv-syrup", "name": "Risho-Liv Syrup", "img": "imgdet/risho.jpeg", "type": "Liver Care Syrup", "pack": "200 ml", 
    "points": [
      "लिवर की बीमारी के ईलाज के लिए उपयोगी।", 
      "शरीर की प्रतिरक्षा प्रणाली को बचाव करने की क्षमता प्रदान करता है।", 
      "खून में कोलेस्ट्रॉल के स्तर को नियंत्रित करता है।", 
      "पीलिया के इलाज में बहुत उपयोगी है।"
    ], 
    "dosage": "रोज 15ml सुबह-शाम या चिकित्सक के परामर्श अनुसार।",
    "ingredients": "Bhau Amla, Bhringraj, Kasni, Fumaria, Arjun, Harad, Black bhatkoya, Bajradanti, Deodar, Kutki, Vidang (each 10ml extract)."
  },
  {
    "cat": "syrup", "slug": "zymorish-syrup", "name": "Zymorish Syrup", "img": "imgdet/zymorish.jpeg", "type": "Digestive Care", "pack": "200 ml", 
    "points": [
      "हाजमे के लिए उपयोगी सिरप।", 
      "पेट, आंत और लिवर को उत्तेजित कर पाचक टॉनिक के रूप में मदद करता है।"
    ], 
    "dosage": "रोज 15ml सुबह-शाम या चिकित्सक के परामर्श अनुसार।",
    "ingredients": "Mulethi, Pudina, Adrak, Harad, Baheda, Sweetflag, Pippali, Arandi, Vidang, Kalimirch, Tulsi (each 10ml extract)."
  },
  {
    "cat": "syrup", "slug": "femorish-syrup", "name": "Femorish Syrup", "img": "imgdet/femo.jpeg", "type": "Female Health Tonic", "pack": "200 ml", 
    "points": [
      "महिलाओं के लिए स्वस्थ टॉनिक।", 
      "कमर, पेट व नलों का दर्द, श्वेत प्रदर में उपयोगी।", 
      "खून की कमी, थकावट, मानसिक व शारीरिक थकावट में लाभकारी।",
      "रक्त साफ कर सौंदर्य बढ़ाता है।"
    ], 
    "dosage": "रोज 15ml सुबह-शाम या चिकित्सक के परामर्श अनुसार।",
    "ingredients": "Ashoka, Lodhra, Giloy, Shatavari, Arjun, Gular, Mulethi, Ashwagandha, Deodar, Adrak, Arandi, Vatkambal, Pippali."
  },
  {
    "cat": "syrup", "slug": "ortho-rish-syrup", "name": "Ortho Rish Syrup", "img": "imgdet/ortho.jpeg", "type": "Joint & Muscle Care", "pack": "200 ml", 
    "points": [
      "जोड़ों के दर्द, संधीवात, न्यूरो मसक्यूलर पेन में उपयोगी।", 
      "कमर दर्द एवं हर तरह के वात रोग में लाभकारी।", 
      "हाथ पैर में भयंकर सूजन में भी अत्यंत लाभ पहुँचाता है।"
    ], 
    "dosage": "रोज 10ml सुबह-शाम या चिकित्सक के परामर्श अनुसार।",
    "ingredients": "Ashwagandha, Salai, Haldi, Suranjan, Sounth, Nirgundi, Febrifuge, Khurasni Ajwain, Sounf, Shilajit, Rasna, Lahsuna."
  },
  {
    "cat": "syrup", "slug": "blood-purrish-syrup", "name": "Blood Purish Syrup", "img": "imgdet/blood.jpeg", "type": "Skin & Blood Care", "pack": "200 ml", 
    "points": [
      "रक्त शोधक के रूप में कार्य करता है।", 
      "चेहरे पर निखार लाने में मदद करता है।", 
      "कील, मुहासों, खुजली व त्वचा रोग में उपयोगी।"
    ], 
    "dosage": "रोज 15ml सुबह-शाम या चिकित्सक के परामर्श अनुसार।",
    "ingredients": "Majith, Khadir chhal, Daruhaldi, Chirayata, Kalmegh, Pitapapada, Gorakhmundi, Vasa, Raktachandan, Anantmool, Neem, Chopchini, Gulab."
  },
  {
    "cat": "syrup", "slug": "hemorish-syrup", "name": "Hemorish Syrup", "img": "imgdet/hemo.jpeg", "type": "Multivitamin & Minerals", "pack": "200 ml", 
    "points": [
      "शरीर में खून की मात्रा को बढ़ाता है।", 
      "शरीर में मल्टी विटामिन देता है।", 
      "शरीर को ऊर्जावान रखने और थकान से लड़ने में मदद करता है।"
    ], 
    "dosage": "रोज 15ml सुबह-शाम या चिकित्सक के परामर्श अनुसार।",
    "ingredients": "Bhuchank (Ground Nut), Ashwagandha, Tulsi, Amla, Mulethi, Pippali, Elaichi, Lauh Bhasma."
  },
  {
    "cat": "syrup", "slug": "aloevera-swaras", "name": "Aloevera Swaras", "img": "imgdet/aloe.jpeg", "type": "Diabetes Care", "pack": "200 ml", 
    "points": [
      "डायबिटीज का स्तर सामान्य रखने में उपयोगी।", 
      "शरीर में शर्करा की खपत होती है।", 
      "बार-बार होने वाले संक्रमण को खत्म करता है।"
    ], 
    "dosage": "रोज 20ml सुबह-शाम या चिकित्सक के परामर्श अनुसार।",
    "ingredients": "Aloevera (55%), Dhania, Jamun, Kalmegh, Neem, Chhoti Dudhi, Giloy, Nirgundi, Gokhru, Makoya, Haldi."
  },
  {
    "cat": "syrup", "slug": "cofrish-expectorant", "name": "Cofrish Syrup", "img": "imgdet/cof.jpeg", "type": "Cough & Allergy", "pack": "100 ml", 
    "points": [
      "पुरानी एवं सुखी खाँसी में चमत्कारी लाभ।", 
      "बलगम को पतला कर बाहर निकालें।", 
      "गले का खराश और कफ की जकड़न दूर करें।"
    ], 
    "dosage": "रोज 10ml सुबह-शाम या चिकित्सक के परामर्श अनुसार।",
    "ingredients": "Adhatoda vasica, Adrak, Tulsi, Baheda, Sariva, Mulethi, Pippali, Kalimirch, Mentha, Voila Odorata, Haldi."
  },

  // --- CHURAN ---
  {
    "cat": "churan", "slug": "x-jeevani-churna", "name": "X-Jeevani Churna", "img": "imgdet/xjeevani.jpeg", "type": "Energy & Vitality", "pack": "100 gm", 
    "points": [
      "स्वास्थ्य, शक्ति, जोश, ताकत में उपयोगी।", 
      "शारीरिक कमजोरी दूर करने में मदद करता है।"
    ], 
    "dosage": "रोज 1–1 चम्मच सुबह-शाम या चिकित्सक के परामर्श अनुसार।",
    "ingredients": "Ashwagandha, Salai, Haldi, Suranjan, Sounth, Nirgundi, Febrifuge, Khurasni Ajwain, Sounf, Shilajit, Rasna, Lahsuna."
  }
];

const WA="919431873287";
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

function card(p){
  const msg=encodeURIComponent("Hello, I would like information about "+p.name+".");
  const page="product/"+esc(p.slug)+".html";
  
  // Custom CSS for dosage and details to match your dark theme
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
