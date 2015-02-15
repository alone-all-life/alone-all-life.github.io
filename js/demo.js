d3.json("https://hivelab.org/static/students.json",function(data){
        for(var i=0; i<data.length; i++){
          var BetterScore =0;
          var Participants=new Array(data.length);
          for(var k=0;k<data.length;k++){
            Participants[k]=new Array(2);
          }
          
          var position=1;
          for(var i=0;i<data.length;i++){
            var total1=data[i].GPA+data[i].GRE_V+data[i].GRE_Q+data[i].Essay+data[i].Recom;
            Participants[i][0]=total1;
          }
          }
          for(var j=0;j<data.length;j++){
            BetterScore=0;
           for(var i=0;i<data.length;i++){
            if(Participants[i][0]>BetterScore){
              BetterScore=Participants[i][0];
            }
          }
          for(var i=0;i<data.length;i++){
            if(Participants[i][0]===BetterScore){
              Participants[i][0]=0;
              Participants[i][1]=position;
            }
          }
          position++;
          }
          for(var i=0;i<data.length;i++){
            var row=d3.select("tbody").append("tr");
            row.append("td").text(data[i].Name);
            row.append("td").text(data[i].GPA);
            row.append("td").text(data[i].GRE_V);
            row.append("td").text(data[i].GRE_Q);
            row.append("td").text(data[i].Essay);
            row.append("td").text(data[i].Recom);
            row.append("td").text(data[i].GPA+data[i].GRE_V+data[i].GRE_Q+data[i].Essay+data[i].Recom);
            row.append("td").text(Participants[i][1]);
          }
        });