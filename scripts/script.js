google.charts.load("current", {packages:["timeline"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {

    var container = document.getElementById('example5.2');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'Category' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'string', role: 'longName' });
    dataTable.addColumn({ type: 'string', role: 'location'});
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addColumn({ type: 'string', role: 'description'});
    dataTable.addRows([
      [ 'Main Events', 'Early Registration', '', 'TDB', new Date(2018,5,25,17,00), new Date(2018,5,25,18,00), '' ],
      [ 'Main Events', 'Registration', '', 'TDB', new Date(2018,5,25,18,00), new Date(2018,5,25,23,00), '' ],
      [ 'Main Events', 'Opening Ceremony', '', 'Ryerson Theatre', new Date(2018,5,25,19,00), new Date(2018,5,25,20,30), '' ],
      [ 'Main Events', 'Team Formation', '', 'TDB', new Date(2018,5,25,21,00), new Date(2018,5,25,22,00), '' ],
      [ 'Main Events', 'Hacking Begins', '', 'TDB', new Date(2018,5,25,22,00), new Date(2018,5,26,00,00), '' ],
      [ 'Main Events', 'Project Submission', '', 'TDB', new Date(2018,5,27,8,00), new Date(2018,5,27,10,00), '' ],
      [ 'Main Events', 'Room Allocation for Demos', '', 'TDB', new Date(2018,5,27,8,00), new Date(2018,5,27,10,00), '' ],
      [ 'Main Events', 'Project Demos to Judges', '', 'TDB', new Date(2018,5,27,12,00), new Date(2018,5,27,14,00), '' ],      
      [ 'Main Events', 'Closing Ceromony', '', 'Ryerson Theatre', new Date(2018,5,27,14,30), new Date(2018,5,27,16,00), '' ],
      [ 'Food', 'Dinner', '', 'TDB', new Date(2018,5,25,20,30), new Date(2018,5,25,23,30), '' ],
      [ 'Food', 'Midnight Snack', '', 'TDB', new Date(2018,5,26,00,00), new Date(2018,5,26,2,00), '' ],
      [ 'Food', 'Breakfast', '', 'TDB', new Date(2018,5,26,7,00), new Date(2018,5,26,9,00), '' ], 
      [ 'Food', 'Lunch', '', 'TDB', new Date(2018,5,26,13,00), new Date(2018,5,26,15,00), '' ], 
      [ 'Food', 'Dinner',  '', 'TDB', new Date(2018,5,26,19,00), new Date(2018,5,26,21,30), '' ], 
      [ 'Food', 'Midnight Snack', '', 'TDB', new Date(2018,5,27,00,00), new Date(2018,5,27,2,00), '' ],
      [ 'Food', 'Brunch', '', 'TDB', new Date(2018,5,27,9,00), new Date(2018,5,27,12,00), '' ],
      [ 'Activities', 'Hacker-Sponsor Mingle', '', 'TDB', new Date(2018,5,25,17,00), new Date(2018,5,25,19,00), '' ],
      [ 'Activities', 'Cup Stacking', 'Cup Stacking Challenge', 'TDB', new Date(2018,5,26,14,30), new Date(2018,5,26,15,30), 'Cup Stacking is a hackathon pastime that lets hackers engage in a fun activity with their friends and fellow hackers. In teams of two, the participants attempt to create the tallest tower of cups stacked on top of each other.' ],
      [ 'Workshops', 'Dapp Dev Intro', 'Introduction to dapp development with Truffle and Metamask <br> Presented by: ConsenSys', 'TDB', new Date(2018,5,25,22,00), new Date(2018,5,25,23,00), 'We\'ll cover the basics of developing for the Ethereum blockchain, starting with running contracts in a local VM, using popular debugging tools, and interacting with deployed contracts from a simple website.  Participants should bring a laptop, and have installed nodejs, the latest version of truffle and the metamask browser extension.' ],
      [ 'Workshops', 'AI + Chatbots','AI and Chatbots - Creating Connected Customer Experience <br> Presented by: TD Canada Trust', 'TDB', new Date(2018,5,25,23,00), new Date(2018,5,26,0,00), 'Join this talk to discuss industry trends & drivers towards creating engaging human-to-AI agent experiences. Chatbots are changing the way we interact with our customers. For consumers, there\'s a growing interest in chat interactions with companies. One study found that 49 percent of cusomters would prefer to interact with companies via automated methods than any other medium.<br><br><strong>Keywords:</strong> AI and Chatbot technologies, Chatbot & customer service benefits, Bots and humans working together.' ],
      [ 'Workshops', 'AI + Android', 'AI + Android: Make Android Apps more Intelligent using TensorFlow <br> Presented by: FDM', 'TDB', new Date(2018,5,26,18,30), new Date(2018,5,26,19,30), 'Interested in Android app development? Make it even more useful using Machine Learning! The aim of this workshop is to learn to embed machine learning into Android apps enabling the apps to be more intelligent.<br><br><strong>Keywords:</strong> Native Android App development, Tensor Flow, Artificial Intelligence, Machine Learning.' ],
      [ 'Workshops', 'Open Source', 'Open Source Tools <br> Presented by: Linux User Group (LUG)', 'TDB', new Date(2018,5,26,12,00), new Date(2018,5,26,13,00), 'Joins us in this workshop to go over using the Linux terminal, Kubernetes, and Docker and how these tools can help you along the development process.' ],
      [ 'Workshops', 'CP Contest', 'Competitve Programming Contest <br> Presented by: Competitive Programming Club (CPC)', 'TDB', new Date(2018,5,26,10,00), new Date(2018,5,26,11,00), 'An introduction to Competitive Programming, and the online problem database, contest holder, and ranker Kattis. A short contest will be held at the end of the session. Participants should bring a laptop.' ],
      [ 'Workshops', 'Intro to Jupyter', 'Intro to Jupyter Notebooks: Building a basic Neural Network <br> Presented by: IEEE Ryerson Chapter', 'TDB', new Date(2018,5,26,16,30), new Date(2018,5,26,17,30), 'Learn how to use Jupyter Notebooks to create documents combining code, text, images, and more; and go through a basic example of a Neural Network fundamentals using the notebook.' ],
      [ 'Workshops', 'HackerEarth', 'How to Submit Project to HackerEarth', 'TBD', new Date(2018,5,27,0,00), new Date(2018,5,27,1,00), 'We\'ll be showing everyone how to submit their project on HackerEarth' ]]);

    var options = { timeline: { colorByRowLabel: true}, width: 5000, height: 300, barLabelStyle: {
        fontSize: 80}
    };

    chart.draw(dataTable, options);

    google.visualization.events.addListener(chart, 'onmouseover', function(e) {
        setTooltipContent(dataTable,e.row);
    });

    google.visualization.events.addListener(chart, 'select', function() {
        setDescriptionArea(dataTable, chart.getSelection());
    });
}


function setTooltipContent(dataTable,row) {    
    var tooltip = document.getElementsByClassName("google-visualization-tooltip")[0];

    if (row != null) {
        var duration = Math.abs(dataTable.getValue(row, 4) - dataTable.getValue(row, 5))/ 36e5;
        var name = dataTable.getValue(row, 2) || dataTable.getValue(row, 1);
        var content = '<br><div class="custom-tooltip"><strong>' + name + '</strong>' +
            '<br><br><strong>Location:</strong> ' + dataTable.getValue(row, 3) + '<br>' +
            '<strong>Duration:</strong> '+ duration + ' Hour' + (duration > 1 ? 's' : '') +
            (dataTable.getValue(row, 6).trim() !== '' ? '<br><br>Click to get more info<br><br>' : '<br><br>') +
            '</div>'; //generate tooltip content
        tooltip.innerHTML = content;
        tooltip.style.height = 'auto';
    }
}

function setDescriptionArea(dataTable,selected) {
    var descContainer = document.getElementById('schedule-more-details');

    if (selected.length > 0 && selected[0].row != null) {
        var row = selected[0].row;
        var duration = Math.abs(dataTable.getValue(row, 4) - dataTable.getValue(row, 5))/ 36e5;
        var name = dataTable.getValue(row, 2).trim() || dataTable.getValue(row, 1);
        var content = '<br><div class="custom-tooltip"><strong>' + name + '</strong>' +
            '<br><br><strong>Location:</strong> ' + dataTable.getValue(row, 3) + '<br>' +
            '<strong>Duration:</strong> '+ duration + ' Hour' + (duration > 1 ? 's' : '') +
            (dataTable.getValue(row, 6).trim() !== '' ? '<br><strong>Description:</strong><br>' + dataTable.getValue(row, 6) : '') +
            '</div>'; //generate tooltip content
        descContainer.innerHTML = content;
    }
}