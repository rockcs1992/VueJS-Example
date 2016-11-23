new Vue({
	el : '#events',
	data : {
		event: { name: '', description: '', date: '' },
  		events: []
	},
	
	methods : {
		addEvent: function() {
		    if(this.event.name) {
		      this.events.push(this.event);
		      this.event = { name: '', description: '', date: '' };
		    }
  		},

  		deleteEvent: function(index) {
		  if(confirm("Are you sure you want to delete this event?")) {
		  	//Here is a warning, need to fix it in the future
		    this.events.splice(index,1);      
		  }
}
	}
});