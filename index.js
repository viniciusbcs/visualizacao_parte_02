var titulo = d3.select("h2")
                .style("color", "blue")
                .text("Deferença de votos no primeiro e segundo turno (candidatos a presidência)");
        

        
d3.csv("presidente.csv").then(function(data){  // Open file
    
    /*for(var counter = 0; counter < data.length; counter++){
        //console.log(data[counter].num_votes)
        if(data[counter].cat_eletion_result.localeCompare("NÃO ELEITO") == 0)
            console.log(data[counter].cat_candidate_name);
    }*/

    var total = 0; // JOSÉ MARIA DE ALMEIDA
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 16 && parseInt(data[counter].num_turn) == 1){
            //console.log(data[counter].num_votes)
            total = total + parseInt(data[counter].num_votes);         
        }
    }
    console.log(total)

    var total2 = 0; // JOSÉ LEVY FIDELIX DA CRUZ
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 28 && parseInt(data[counter].num_turn) == 1){
            total2 = total2 + parseInt(data[counter].num_votes);         
        }
    }   
    console.log(total2)

    var total3 = 0; // MAURO LUÍS IASI
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 21 && parseInt(data[counter].num_turn) == 1){
            total3 = total3 + parseInt(data[counter].num_votes);         
        }
    }   
    console.log(total3)

    var total4 = 0; // LUCIANA KREBS GENRO
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 50 && parseInt(data[counter].num_turn) == 1){
            total4 = total4 + parseInt(data[counter].num_votes);         
        }
    }   
    console.log(total4)

    
    var total5 = 0; // EDUARDO JORGE MARTINS ALVES SOBRINHO
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 43 && parseInt(data[counter].num_turn) == 1){
            total5 = total5 + parseInt(data[counter].num_votes);         
        }
    }   
    console.log(total5)

    var total6 = 0; // EVERALDO DIAS PEREIRA
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 20 && parseInt(data[counter].num_turn) == 1){
            total6 = total6 + parseInt(data[counter].num_votes);         
        }
    }   
    console.log(total6)

    
    var total7 = 0; //JOSE MARIA EYMAEL
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 27 && parseInt(data[counter].num_turn) == 1){
            total7 = total7 + parseInt(data[counter].num_votes);         
        }
    }   
    console.log(total7)

    
    var total8 = 0; //RUI COSTA PIMENTA
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 29 && parseInt(data[counter].num_turn) == 1){
            total8 = total8 + parseInt(data[counter].num_votes);         
        }
    }   
    console.log(total8)

    var total9 = 0; //DILMA VANA ROUSSEFF
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 13 && parseInt(data[counter].num_turn) == 1){
            total9 = total9 + parseInt(data[counter].num_votes);         
        }
    }   
    console.log(total9)

    
    var total10 = 0; //AÉCIO NEVES DA CUNHA
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 45 && parseInt(data[counter].num_turn) == 1){
            total10 = total10 + parseInt(data[counter].num_votes);         
        }
    }   
    console.log(total10)

    
    var total11 = 0; //MARIA OSMARINA MARINA DA SILVA VAZ DE LIMA
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 40 && parseInt(data[counter].num_turn) == 1){
            total11 = total11 + parseInt(data[counter].num_votes);         
        }
    }   
    console.log(total11)

    var width = 1000;
    var height = 860;
                
    var canvas = d3.select("body")
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height);

    var bars = canvas.selectAll("rect")
                    .data(data)
                    .enter()
                        .append("rect")
                        .attr("width", 60)
                        .attr("height", 10)
                        .attr("y", function(data, i){ return i * 20 });
                 
})
           
var aviso = d3.select("body")
                .append("p")
                .text("Click Refresh (or Reload) to run the script again.");   