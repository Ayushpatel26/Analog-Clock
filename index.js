
setInterval(() => {
    let d=new Date();
    let htime=d.getHours();
    let mtime=d.getMinutes();
    let stime=d.getSeconds();

    // let hrotation=30*htime + mtime/2;
    let hrotation=30*htime + mtime/2 + stime/120;//for more accuracy
    // let mrotation=6*mtime;
    let mrotation=6*mtime + stime/10;//for more accuracy
    let srotation=6*stime;
    
    hour.style.transform=`rotate(${hrotation}deg)`;
    min.style.transform=`rotate(${mrotation}deg)`;
    sec.style.transform=`rotate(${srotation}deg)`;
}, 1000);