var titulo = d3.select("h2")
                .style("color", "blue")
                .text("Deferença de votos no primeiro e segundo turno / votos a um mesmo cargo (candidatos a presidência)");
        

        
d3.csv("presidente.csv").then(function(data){  // Open file
    
    var total = 0; // JOSÉ MARIA DE ALMEIDA
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 16 && parseInt(data[counter].num_turn) == 1){
            //console.log(data[counter].num_votes)
            total = total + parseInt(data[counter].num_votes);         
        }
    }

    var total2 = 0; // JOSÉ LEVY FIDELIX DA CRUZ
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 28 && parseInt(data[counter].num_turn) == 1){
            total2 = total2 + parseInt(data[counter].num_votes);         
        }
    }   

    var total3 = 0; // MAURO LUÍS IASI
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 21 && parseInt(data[counter].num_turn) == 1){
            total3 = total3 + parseInt(data[counter].num_votes);         
        }
    }   

    var total4 = 0; // LUCIANA KREBS GENRO
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 50 && parseInt(data[counter].num_turn) == 1){
            total4 = total4 + parseInt(data[counter].num_votes);         
        }
    }   

    var total5 = 0; // EDUARDO JORGE MARTINS ALVES SOBRINHO
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 43 && parseInt(data[counter].num_turn) == 1){
            total5 = total5 + parseInt(data[counter].num_votes);         
        }
    }   

    var total6 = 0; // EVERALDO DIAS PEREIRA
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 20 && parseInt(data[counter].num_turn) == 1){
            total6 = total6 + parseInt(data[counter].num_votes);         
        }
    }   

    var total7 = 0; //JOSE MARIA EYMAEL
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 27 && parseInt(data[counter].num_turn) == 1){
            total7 = total7 + parseInt(data[counter].num_votes);         
        }
    }   

    var total8 = 0; //RUI COSTA PIMENTA
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 29 && parseInt(data[counter].num_turn) == 1){
            total8 = total8 + parseInt(data[counter].num_votes);         
        }
    }   

    var total9 = 0; //DILMA VANA ROUSSEFF
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 13 && parseInt(data[counter].num_turn) == 1){
            total9 = total9 + parseInt(data[counter].num_votes);         
        }
    }   

    var total10 = 0; //AÉCIO NEVES DA CUNHA
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 45 && parseInt(data[counter].num_turn) == 1){
            total10 = total10 + parseInt(data[counter].num_votes);         
        }
    }   
    
    var total11 = 0; //MARIA OSMARINA MARINA DA SILVA VAZ DE LIMA
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 40 && parseInt(data[counter].num_turn) == 1){
            total11 = total11 + parseInt(data[counter].num_votes);         
        }
    }   

    //Segundo Turno
    var segundo1 = 0; //DILMA VANA ROUSSEFF
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 13 && parseInt(data[counter].num_turn) == 2){
            segundo1 = segundo1 + parseInt(data[counter].num_votes);         
        }
    }   
    
    var segundo2 = 0; //AÉCIO NEVES DA CUNHA
    for(var counter = 0; counter < data.length; counter++){
        if(data[counter].id_candidate_num == 45 && parseInt(data[counter].num_turn) == 2){
            segundo2 = segundo2 + parseInt(data[counter].num_votes);         
        }
    }   

    var segundo_turno = [segundo1, segundo2];

    var nomes = ["JOSÉ MARIA", "LEVY FIDELIX", "MAURO LUÍS", "LUCIANA GENRO", "EDUARDO JORGE",
                    "EVERALDO DIAS", "JOSE MARIA EYMAEL", "RUI COSTA PIMENTA", "DILMA VANA ROUSSEFF", "DILMA **SEGUNDO TURNO**",
                    "AÉCIO NEVES DA CUNHA", "AÉCIO **SEGUNDO TURNO**", "MARINA DA SILVA"];

    var totais = [total, total2, total3, total4, total5, total6, total7, total8, total9, segundo1, total10, segundo2, 
                    total11];

    var total_segundo_turno = [segundo1, segundo2];

    var nomes_segundo_turno = ["DILMA VANA ROUSSEFF", "AÉCIO NEVES DA CUNHA"];

    var width = 1000;
    var height = 860;
                
    var canvas = d3.select("body")
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height);
    
    var widthScale = d3.scaleLinear()
                        .domain([0, 54501118])
                        .range([0, width]);

    var colorScale = d3.scaleLinear()
                        .domain([0, 54501118])
                        .range(["red", "blue"]);
                
    var bars = canvas.selectAll("rect")
                    .data(totais)
                    .enter()
                        .append("rect")
                        .attr("width", 0)
                        .attr("height", 40)
                        .attr("fill", "#000")
                        .attr("y", function(d, i){ return i * 60 });

    bars.transition()
            .delay(2000)
            .duration(1500)
            .attr("width", function(d) {return widthScale(d); })
            .attr("fill", function(d) { return colorScale(d); });

    var nomes_dos_candidatos = canvas.selectAll("text")
                                    .data(nomes)
                                    .enter()
                                        .append("text")
                                        .attr("width", 50)
                                        .attr("x", 20)
                                        .attr("y", function(d, i) {return i * 60 + 25;})
                                        .attr("fill", "black")
                                        .text(" ");
    
    nomes_dos_candidatos.transition()
                            .delay(4000)
                            .text(function (d) {return d;});

    var coloca_numero_votos = canvas.selectAll("i")
                                    .data(totais)
                                    .enter()
                                        .append("text")
                                        .attr("width", 50)
                                        .attr("x", 250)
                                        .attr("y", function(d, i) {return i * 60 + 25;})
                                        .attr("fill", "red")
                                        .text(" ");

    coloca_numero_votos.transition()
                        .delay(4500)
                        .text(function (d) {return d;});
                 
})