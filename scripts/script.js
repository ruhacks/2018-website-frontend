google.charts.load("current", {packages:["timeline"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {

    var container = document.getElementById('example5.2');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'Category' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'string', role: 'des'});
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
      [ 'Main Events', 'Early Registration', 'TDB', new Date(2018,5,25,17,00), new Date(2018,5,25,18,00) ],
      [ 'Main Events', 'Registration', 'TDB', new Date(2018,5,25,18,00), new Date(2018,5,25,23,00) ],
      [ 'Food', 'Dinner', 'TDB', new Date(2018,5,25,20,30), new Date(2018,5,25,23,30) ],
      [ 'Activities', 'Hacker-Sponsor Mingle', 'TDB', new Date(2018,5,25,17,00), new Date(2018,5,25,19,00) ],
      [ 'Workshops', 'Workshop #1', 'TDB', new Date(2018,5,25,23,00), new Date(2018,5,26,0,00) ],
      [ 'Workshops', 'AI + Android Workshop', 'TDB', new Date(2018,5,26,18,30), new Date(2018,5,26,19,30) ],
      [ 'Food', 'Midnight Snack', 'TDB', new Date(2018,5,26,00,00), new Date(2018,5,26,2,00) ],
      [ 'Food', 'Breakfast', 'TDB', new Date(2018,5,26,7,00), new Date(2018,5,26,9,00) ], 
      [ 'Food','Lunch', 'TDB', new Date(2018,5,26,13,00), new Date(2018,5,26,15,00) ], 
      [ 'Food', 'Dinner',  'TDB', new Date(2018,5,26,19,00), new Date(2018,5,26,21,30) ], 
      [ 'Food', 'Midnight Snack', 'TDB', new Date(2018,5,27,00,00), new Date(2018,5,27,2,00) ],
      [ 'Food', 'Brunch', 'TDB', new Date(2018,5,27,9,00), new Date(2018,5,27,12,00) ],
      [ 'Main Events', 'Room Allocation for Demos', 'TDB', new Date(2018,5,27,8,00), new Date(2018,5,27,10,00) ],
      [ 'Main Events', 'Project Demos to Judges', 'TDB', new Date(2018,5,27,10,00), new Date(2018,5,27,12,00) ],      
      [ 'Main Events', 'Closing Ceromony','Ryerson Theatre', new Date(2018,5,27,13,00), new Date(2018,5,27,16,00) ]]);
    dataTable.addRows([
      [ 'Main Events', 'Hacking Begins', 'TDB', new Date(2018,5,25,22,00), new Date(2018,5,26,00,00) ],
      [ 'Main Events', 'Opening Ceremony', 'Ryerson Theatre', new Date(2018,5,25,19,00), new Date(2018,5,25,20,30) ],
      [ 'Main Events', 'Team Formation', 'TDB', new Date(2018,5,25,21,00), new Date(2018,5,25,22,00) ],
      [ 'Main Events', 'Project Submission', 'TDB', new Date(2018,5,27,8,00), new Date(2018,5,27,10,00) ]]);

    var options = { timeline: { colorByRowLabel: true}, width: 5000, height: 300, barLabelStyle: {
        fontSize: 80}
    };

    chart.draw(dataTable, options);

    google.visualization.events.addListener(chart, 'onmouseover', function(e) {
        setTooltipContent(dataTable,e.row);
    });
}


function setTooltipContent(dataTable,row) {
    var duration = Math.abs(dataTable.getValue(row, 4) - dataTable.getValue(row, 3))/ 36e5;
    if (row != null) {
        var content = '<br><div class="custom-tooltip"><b>' +dataTable.getValue(row, 1)+ '<br><br>Location:</b> ' + dataTable.getValue(row, 2) +'<br>'+'<b>Duration:</b> '+ duration+ ' Hours'+ '</div>'; //generate tooltip content
        var tooltip = document.getElementsByClassName("google-visualization-tooltip")[0];
        tooltip.innerHTML = content;
    }
}
