google.charts.load("current", {packages:["timeline"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {

    var container = document.getElementById('example5.2');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'Room' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
      [ 'Main Events',  'Early Registration',    new Date(2018,5,25,17,00), new Date(2018,5,25,18,00) ],
      [ 'Main Events',  'Registration',    new Date(2018,5,25,18,00), new Date(2018,5,25,23,00) ],
      [ 'Events',  'Hacking Begins',    new Date(2018,5,25,22,00), new Date(2018,5,26,00,00) ],
      [ 'Events',  'Opening Ceremony',    new Date(2018,5,25,19,00), new Date(2018,5,25,20,30) ],
      [ 'Events',  'Team Formation',    new Date(2018,5,25,21,00), new Date(2018,5,25,22,00) ],
      [ 'Food',  'Dinner',    new Date(2018,5,25,20,30), new Date(2018,5,25,23,30) ],
      [ 'Activities',  'Hacker-Sponsor Mingle', new Date(2018,5,25,17,00), new Date(2018,5,25,19,00) ],
      [ 'Workshops', 'Workshop #1',   new Date(2018,5,25,23,00), new Date(2018,5,26,0,00) ],

      [ 'Food',  'Midnight Snack',    new Date(2018,5,26,00,00), new Date(2018,5,26,2,00) ],
      [ 'Food',  'Breakfast',    new Date(2018,5,26,7,00), new Date(2018,5,26,9,00) ], 
      [ 'Food',  'Lunch',    new Date(2018,5,26,13,00), new Date(2018,5,26,15,00) ], 
      [ 'Food',  'Dinner',    new Date(2018,5,26,19,00), new Date(2018,5,26,21,30) ], 

      [ 'Food',  'Midnight Snack',    new Date(2018,5,27,00,00), new Date(2018,5,27,2,00) ],
      [ 'Events',  'Project Submission',    new Date(2018,5,27,8,00), new Date(2018,5,27,9,00) ],
      [ 'Food',  'Brunch',    new Date(2018,5,27,9,00), new Date(2018,5,27,12,00) ],
      [ 'Main Events',  'Room Allocation for Demos',    new Date(2018,5,27,8,00), new Date(2018,5,27,10,00) ],
      [ 'Main Events',  'Project Demos to Judges',    new Date(2018,5,27,10,00), new Date(2018,5,27,12,00) ],      
      [ 'Main Events',   'CLosing Ceromony',           new Date(2018,5,27,13,00), new Date(2018,5,27,16,00) ]]);

    var options = { timeline: { colorByRowLabel: true }, width: 6000, height: 300,
    };

    chart.draw(dataTable, options);
  }

  // colorByRowLabel: true