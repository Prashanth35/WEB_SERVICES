sap.ui.controller("show-details-countrywise.VIEW1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf show-details-countrywise.VIEW1
*/
	onInit: function() {
		var Omodel1=new sap.ui.model.json.JSONModel();
	    Omodel1.loadData("model/model.json");
	    this.getView().setModel(Omodel1)

	},

	onChange:function(oEvent){
	       var zipcode = this.getView().byId("idzip").getValue();
	       debugger;
	       var Vcountry=this.getView().byId("idCountry").getSelectedItem().getText();
	         
	        if(zipcode.length < 5 || zipcode.length > 5 ){
	        	// this.getView().byId("idcity").bindProperty("text",""); 
	        		// this.getView().byId("idcity").bindProperty("text",""); 
	        	        	this.getView().byId("idcity").bindProperty("value",""); 
	               //this.getView().byId("idstate").bindProperty("text",""); 
	               	this.getView().byId("idstate").bindProperty("value",""); 
	        		sap.m.MessageToast.show("Please Enter Valid 5 Digit Zip Code");
	        	
	        }else if(Vcountry != "US" ){
	         
	        	
	        	  this.getView().byId("idcity").getValue().destroy
	  	      	this.getView().byId("idstate").getValue().destroy
	  	      	this.getView().byId("idzip").getValue().destroy
	        	
	        	
	        			// this.getView().byId("idcity").bindProperty("text",""); 
	        		/*	this.getView().byId("idcity").bindProperty("value",""); 
	        				this.getView().byId("idcity").setEditable(true);
	        					this.getView().byId("idstate").setEditable(true);
	               //this.getView().byId("idstate").bindProperty("text",""); 
	               this.getView().byId("idstate").bindProperty("value","");*/
	        		sap.m.MessageToast.show("Please Enter Country as US");
	        }
	      else if(Vcountry === "india"){
	       this.getView().byId("idcity").getValue().setEditable(true);
	      	this.getView().byId("idstate").getValue().setEditable(true);
	      	this.getView().byId("idzip").getValue().setEditable(true);
	      }
	         
	        	  
	        
	        else{
	       if(zipcode.length == 5){
	       	     debugger;
	       	if(Vcountry==="US" || Vcountry==="us"){
	    //   	var request = "<Your input xml to the webservice>”;
	                            var response = "";
	              $.ajax({
	                     url : "proxy/http/www.webservicex.net/uszip.asmx/GetInfoByZIP?USZip="+zipcode,
	                     type : "GET",
	                     dataType : "text",
	                     contentType : "text/xml; charset=\"utf-8\"",
	                     success : function(data, textStatus, jqXHR) {
	                           response = data;
	                     },
	                     error: function(xhr, status)
	                     {
	                           console.log("ERROR");     
	                     },
	                     complete : function(xhr,status) {
	                           uicontrols();
	                     }
	              });
	var oModel = new sap.ui.model.xml.XMLModel(); 
	                           function uicontrols(){
	                     oModel.setXML(response);
	                

	                           	
	                           	
	                           }
	              this.getView().setModel(oModel, "m2");
	              this.getView().byId("idcity").bindProperty("value","m2>/Table/CITY"); 
	               this.getView().byId("idstate").bindProperty("value","m2>/Table/STATE"); 
	 
	       /*	var oModel = new sap.ui.model.xml.XMLModel();
	       	oModel.loadData("proxy/http/www.webservicex.net/uszip.asmx/GetInfoByZIP?USZip=49002");
	       	oModel.attachRequestCompleted(function(oEvent){
	       		debugger;
	       	});*/
	       	
	       }
	       else{
	       	sap.m.MessageToast.show("Please Enter Country as US");

	       }
	       
	       }
	       
	       	
	        }

		},
		onSelect:function(){
			debugger;
			 var Vcountry=this.getView().byId("idCountry").getSelectedItem().getText();
			if(Vcountry === "india"){

	        	  this.getView().byId("idcity").setValue().setEditable(true);
	  	      	this.getView().byId("idstate").setValue().setEditable(true);
	  	      	this.getView().byId("idzip").setValue().setEditable(true);
			      }
			
		}

});