      /* HSL START */
      
      function hitungluassegitiga() {
        let alas = parseFloat(document.getElementById("alassegitiga").value);
        let tinggi = parseFloat(document.getElementById("tinggisegitiga").value);
        if (isNaN(alas) || isNaN(tinggi)) {
          alert("HEY! TYPE THE NUMBER FIRST :)");
          return;
        }
        let luas = 0.5 * alas * tinggi;
        
        document.getElementById("rumusluassegitiga").value = "Rumus : L = 0.5 x " + alas + " x " + tinggi;
        document.getElementById("luassegitiga").value = "Hasil Perhitungan Luas Segitiga : " + luas;
      }

      /* HSL START */

      function hitungkelsegitiga() {
        let nilaia = parseFloat(document.getElementById("nilaiasegitiga").value);
        let nilaib = parseFloat(document.getElementById("nilaibsegitiga").value);
        let nilaic = parseFloat(document.getElementById("nilaicsegitiga").value);
        if (isNaN(nilaia) || isNaN(nilaib) || isNaN(nilaic)) {
          alert("HEY! TYPE THE NUMBER FIRST :)");
          return;
        }
        let keliling = nilaia + nilaib + nilaic;
        
        document.getElementById("rumuskelsegitiga").value = "Rumus : K = " + nilaia + " + " + nilaib + " + " + nilaic;
        document.getElementById("kelsegitiga").value = "Hasil Perhitungan Keliling Segitiga : " + keliling;
      }

         /* HJL START */

         function hitungluasjgenjang() {
          let alasjg = parseFloat(document.getElementById("alasjgenjang").value);
          let tinggijg = parseFloat(document.getElementById("miringjgenjang").value);
          if (isNaN(alasjg) || isNaN(tinggijg)) {
            alert("HEY! TYPE THE NUMBER FIRST :)");
            return;
          }
          let luasjg = alasjg * tinggijg;
          
          document.getElementById("rumusluasjg").value = "Rumus : L = " + alasjg + " x " + tinggijg;
          document.getElementById("luasjgg").value = "Hasil Perhitungan Luas Jajar Genjang : " + luasjg;
        }

         /* HJK START */

         function hitungkeljgenjang() {
          let alaskjg = parseFloat(document.getElementById("alaskeljgenjang").value);
          let miringkjg = parseFloat(document.getElementById("miringkeljgenjang").value);
          if (isNaN(alaskjg) || isNaN(miringkjg)) {
            alert("HEY! TYPE THE NUMBER FIRST :)");
            return;
          }
          let keljg = 2 * alaskjg + 2 * miringkjg;
          
          document.getElementById("rumuskeljg").value = "Rumus : K = 2 (" + alaskjg + " + " + miringkjg + ")";
          document.getElementById("keljgg").value = "Hasil Perhitungan Keliling Jajar Genjang : " + keljg;
        }

        /* END */

        $(document).ready(function(){
          $("#segi3").click(function(){
            $(".s1").show();
            $(".j1").hide();
          });
          $("#jajar").click(function(){
            $(".j1").show();
            $(".s1").hide();
          });
          $("#showall").click(function(){
            $(".s1").show();
            $(".j1").show();
          });
        });

        /*
        
      function luassegitiga() { 
          var ssalas = parseFloat(document.segitiga.salas.value);
          if(isNaN(ssalas)){ 
          ssalas=0.0;} 
          var sstinggi = parseFloat(document.segitiga.stinggi.value);
          if(isNaN(sstinggi)){ 
          sstinggi=0.0;} 
          var hasil = 0.5*ssalas*sstinggi; 
          alert("Rumus : L = 0.5 x " + ssalas + " x " + sstinggi + ", " + "Hasil Perhitungan Luas Segitiga : " + hasil); 
        }
        
      function kelilingsegitiga() { 
          var kksnilaia = parseFloat(document.segitigak.ksnilaia.value);
          if(isNaN(kksnilaia)){ 
          kksnilaia=0.0;} 
          var kksnilaib = parseFloat(document.segitigak.ksnilaib.value);
          if(isNaN(kksnilaib)){ 
          kksnilaib=0.0;}
          var kksnilaic = parseFloat(document.segitigak.ksnilaic.value);
          if(isNaN(kksnilaic)){ 
          kksnilaic=0.0;} 
        
          var hasil = kksnilaia+kksnilaib+kksnilaic; 
          alert("Rumus : K = " + kksnilaia + " + " + kksnilaib + " + " + kksnilaic + ", " + "Hasil Perhitungan Keliling Segitiga : " + hasil); 
        }

     

      function luasjajargenjang() { 
          var ljjalas = parseFloat(document.jajargenjang.ljalas.value);
          if(isNaN(ljjalas)){ 
          ljjalas=0.0;} 
          var ljjmiring = parseFloat(document.jajargenjang.ljmiring.value);
          if(isNaN(ljjmiring)){ 
          ljjmiring=0.0;} 
          var hasil = ljjalas*ljjmiring; 
          alert("Rumus : L = " + ljjalas + " x " + ljjmiring + ", " + "Hasil Perhitungan Luas Jajar Genjang : " + hasil); 
        }
        
      function kelilingjajargenjang() { 
          var jjalas = parseFloat(document.kjajargenjang.jalas.value);
          if(isNaN(jjalas)){ 
          jjalas=0.0;} 
          var jjmiring = parseFloat(document.kjajargenjang.jmiring.value);
          if(isNaN(jjmiring)){ 
          jjmiring=0.0;} 
          var hasil = 2*jjalas+2*jjmiring; 
          alert("Rumus : K = 2 (" + jjalas + " + " + jjmiring + "), " + "Hasil Perhitungan Keliling Jajar Genjang : " + hasil); 
        }
        
        /* SJ END */

        