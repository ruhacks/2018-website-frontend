var timetable = new Timetable();

      timetable.setScope(0,23)

      timetable.addLocations(['Friday', '', '  ', 'Saturday', 'Sunday', '   ']);

      timetable.addEvent('Early Registration', 'Friday', new Date(2015,7,17,17,00), new Date(2015,7,17,18,00), { url: '#' });
      timetable.addEvent('Registration', 'Friday', new Date(2015,7,17,18,00), new Date(2015,7,17,23,00), { url: '#' });
      timetable.addEvent('Hacker-Sponsor Mingle', '', new Date(2015,7,17,17,00), new Date(2015,7,17,19,00), { url: '#' });
      timetable.addEvent('Dinner', '  ', new Date(2015,7,17,20,30), new Date(2015,7,17,23,30), { url: '#' });
      timetable.addEvent('Opening Ceremony', '  ', new Date(2015,7,17,19,00), new Date(2015,7,17,20,30), { url: '#' });
      timetable.addEvent('Mentor Meeting', '', new Date(2015,7,17,20,00), new Date(2015,7,17,21,00)); 
      timetable.addEvent('Team Formation', '', new Date(2015,7,17,21,00), new Date(2015,7,17,22,00)); 
      timetable.addEvent('Workshop #1', '', new Date(2015,7,17,23,00), new Date(2015,7,18,0,00), { url: '#' });
      
      timetable.addEvent('Midnight Snack', 'Saturday', new Date(2015,7,17,00,00), new Date(2015,7,17,2,00), { url: '#' });
      timetable.addEvent('Breakfast', 'Saturday', new Date(2015,7,17,7,00), new Date(2015,7,17,9,00), { url: '#' });
      timetable.addEvent('Lunch', 'Saturday', new Date(2015,7,17,13,00), new Date(2015,7,17,15,00), { url: '#' });
      timetable.addEvent('Dinner', 'Saturday', new Date(2015,7,17,19,00), new Date(2015,7,17,21,30), { url: '#'});

      timetable.addEvent('Midnight Snack', 'Sunday', new Date(2015,7,17,00,00), new Date(2015,7,17,2,00), { url: '#' });
      timetable.addEvent('Project Submission', 'Sunday', new Date(2015,7,17,8,00), new Date(2015,7,17,9,00), { url: '#' });
      timetable.addEvent('Brunch', 'Sunday', new Date(2015,7,17,9,00), new Date(2015,7,17,12,00), { url: '#' });
      timetable.addEvent('Room Allocation for Demos', '   ', new Date(2015,7,17,8,00), new Date(2015,7,17,10,00), { url: '#' });
      timetable.addEvent('Project Demos to Judges', '   ', new Date(2015,7,17,10,00), new Date(2015,7,17,12,00), { url: '#' });
      timetable.addEvent('CLosing Ceromony', 'Sunday', new Date(2015,7,17,13,00), new Date(2015,7,17,16,00), { url: '#' });

      var renderer = new Timetable.Renderer(timetable);
      renderer.draw('.timetable');