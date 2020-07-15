var rightconnection=false;
var datapoints1 = [];
jsPlumb.ready(function () {
var instance,
discs = [],

addDisc = function (evt) {
    var info = createDisc();
    var e = prepare(info.id);
    instance.draggable(info.id);
    discs.push(info.id);
    evt.stopPropagation();
    evt.preventDefault();
},

reset = function (e) {
    for (var i = 0; i < discs.length; i++) {
        var d = document.getElementById(discs[i]);
        if (d) d.parentNode.removeChild(d);
    }
    discs = [];
    e.stopPropagation();
    e.preventDefault();
},

initAnimation = function (elId) {
    var el = document.getElementById(elId);

    instance.on(el, 'click', function (e, ui) {
        if (el.className.indexOf("jsPlumb_dragged") > -1) {
            jsPlumb.removeClass(elId, "jsPlumb_dragged");
            return;
        }

    });
},
endpoint = {
    anchor: [0.5, 0.5, 0, -1],
    connectorStyle: { strokeWidth: 4, stroke: "rgba(0,0,255)" },
    endpointsOnTop: true,
    isSource: true,
    maxConnections: 10,
    isTarget: true,
    dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
},
prepare = function (elId) {
    initAnimation(elId);

    return instance.addEndpoint(elId, endpoint);
},

endpoint1 = {
    anchor: [0.5, 0.5, 0, -1],
    connectorStyle: { strokeWidth: 4, stroke: "rgba(0,225,0)" },
    endpointsOnTop: true,
    isSource: true,
    maxConnections: 10,
    isTarget: true,
    dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
},
prepare1 = function (elId) {
    initAnimation(elId);

    return instance.addEndpoint(elId, endpoint1);
},
endpoint2 = {
    anchor: [0.5, 0.5, 0, -1],
    connectorStyle: { strokeWidth: 4, stroke: "rgba(225,0,0)" },
    endpointsOnTop: true,
    isSource: true,
    maxConnections: 10,
    isTarget: true,
    dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
},
prepare2 = function (elId) {
    initAnimation(elId);

    return instance.addEndpoint(elId, endpoint2);
},


// this is overridden by the YUI demo.
createDisc = function () {
    var d = document.createElement("div");
    d.className = "bigdot";
    document.getElementById("animation-demo").appendChild(d);
    var id = '' + ((new Date().getTime()));
    d.setAttribute("id", id);
    var w = screen.width - 162, h = screen.height - 200;
    var x = (5 * w) + Math.floor(Math.random() * (10 * w));
    var y = (5 * h) + Math.floor(Math.random() * (10 * h));
    d.style.top = y + 'px';
    d.style.left = x + 'px';
    return {d: d, id: id};
};

// get a jsPlumb instance, setting some appropriate defaults and a Container.
instance = jsPlumb.getInstance({
    DragOptions: { cursor: 'wait', zIndex: 20 },
    Endpoint: [ "Image", { url: "littledot.png" } ],
    Connector: [ "Bezier", { curviness: 90 } ],
    Container: "canvas"
});

// suspend drawing and initialise.
instance.batch(function () {
    var e1 = prepare2("ld1"),
    e2 = prepare2("ld2"),
    e3 = prepare2("ld3"),
    e4 = prepare("ld4"),
    e5 = prepare("ld5"),
    e6 = prepare("ld6"),
    e7 = prepare("ld7"),
    e8 = prepare("ld8"),
    e9 = prepare("ld9"),
    e10 = prepare("ld10"),
    e11 = prepare("ld11"),
    e12 = prepare2("ld12"),
    e13 = prepare2("ld13"),


    clearBtn = jsPlumb.getSelector("#anim-clear"),
    addBtn = jsPlumb.getSelector("#add");

    var detachLinks = jsPlumb.getSelector(".littledot .detach");
    instance.on(detachLinks, "click", function (e) {
        instance.deleteConnectionsForElement(this.getAttribute("rel"));
        jsPlumbUtil.consume(e);
    });

    instance.on(document.getElementById("clear"), "click", function (e) {
        instance.detachEveryConnection();
        showConnectionInfo("");
        jsPlumbUtil.consume(e);
    });
});

jsPlumb.fire("jsPlumbDemoLoaded", instance);

document.getElementById("check-button").addEventListener("click", function () {
    var correct_connections_1_3 = [
    {
        "source": "ld1",
        "target": "ld3"
    },

    {
        "source": "ld3",
        "target": "ld1"
    }
    ];

    var correct_connections_2_6 = [
    {
        "source": "ld2",
        "target": "ld6"
    },

    {
        "source": "ld6",
        "target": "ld2"
    }
    ];
    var correct_connections_3_8 = [
    {
        "source": "ld8",
        "target": "ld3"
    },

    {
        "source": "ld3",
        "target": "ld8"
    }
    ];
    var correct_connections_7_11 = [
    {
        "source": "ld7",
        "target": "ld11"
    },

    {
        "source": "ld11",
        "target": "ld7"
    }
    ];
    var correct_connections_4_10 = [
    {
        "source": "ld10",
        "target": "ld4"
    },

    {
        "source": "ld4",
        "target": "ld10"
    }
    ];
    var correct_connections_9_4 =[
    {
        "source": "ld9",
        "target": "ld4"
    },
    {
        "source": "ld4",
        "target": "ld9"
    }
    ];
   
//a connection outside this will invalidate the circuit
var allowed_connections = [
{
    "source": "ld1",
    "target": "ld3"
},

{
    "source": "ld3",
    "target": "ld1"
},
{
    "source": "ld2",
    "target": "ld6"
},

{
    "source": "ld6",
    "target": "ld2"
},
{
    "source": "ld3",
    "target": "ld8"
},

{
    "source": "ld8",
    "target": "ld3"
},
{
    "source": "ld7",
    "target": "ld11"
},

{
    "source": "ld11",
    "target": "ld7"
},
{
    "source": "ld4",
    "target": "ld10"
},
{
    "source": "ld10",
    "target": "ld4"
},
{
    "source": "ld9",
    "target": "ld4"
},
{
    "source": "ld4",
    "target": "ld9"
},
];

var actual_connections = instance.getAllConnections();

var is_connected_1_3= false;
var is_connected_2_6 = false;
var is_connected_3_8 = false;
var is_connected_7_11 = false;
var is_connected_4_10 = false;
var is_connected_9_4 = false;


var unallowed_connection_present = false;

actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_1_3){
        is_connected_1_3 = correct_connections_1_3.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }

    if(!unallowed_connection_present){
        unallowed_connection_present = !(allowed_connections.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        }));
    }
});
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_2_6){
        is_connected_2_6 = correct_connections_2_6.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }

    if(!unallowed_connection_present){
        unallowed_connection_present = !(allowed_connections.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        }));
    }

});
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_3_8){
        is_connected_3_8 = correct_connections_3_8.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }

    if(!unallowed_connection_present){
        unallowed_connection_present = !(allowed_connections.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        }));
    }

});
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_7_11){
        is_connected_7_11 = correct_connections_7_11.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }

    if(!unallowed_connection_present){
        unallowed_connection_present = !(allowed_connections.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        }));
    }

});
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_4_10){
        is_connected_4_10= correct_connections_4_10.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }

    if(!unallowed_connection_present){
        unallowed_connection_present = !(allowed_connections.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        }));
    }

});
actual_connections.forEach(function (connection) {
    var this_connection = {
        "source": connection.sourceId,
        "target": connection.targetId
    };

    if(!is_connected_9_4){
        is_connected_9_4 = correct_connections_9_4.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        });
    }

    if(!unallowed_connection_present){
        unallowed_connection_present = !(allowed_connections.find(function (conn) {
            return conn.source === this_connection.source && conn.target === this_connection.target;
        }));
    }
});
// 

var check = false;
if ( is_connected_1_3 && is_connected_2_6 && is_connected_3_8 && is_connected_7_11 && is_connected_4_10 && is_connected_9_4  && !unallowed_connection_present) 
{
    alert("Alert ! Correct connection proceed to take reading.");
    rightconnection=true;
    return;
} 
else 
{
    alert("Alert ! Incorrect connection.");

    return;
} 
});
});

var mcboffstate=true;
function mcbonoff()
{   
    if(rightconnection==false)
    {
        alert("Alert ! Please complete the connection first.");
    }
    else
    {
        if (mcboffstate==true)
        {
            mcboffstate=false; 
           document.getElementById('myimage1').src='images/push2.png';
            document.getElementById('myimage').src='images/Mcbon.png';
            document.getElementById("range").disabled=false;
           document.getElementById("addToTable").disabled=false;
           document.getElementById("graph").disabled=false;
        }
        else
        {
                document.getElementById('bulb').src='images/off.png'; 
                document.getElementById('myimage').src='images/Mcboff.png';
                document.getElementById('myimage1').src='images/push1.png';
                mcboffstate=true;
        }
    }   
}


    var xx = [];
    var yy = [];
    var zz =[];
    var addToTable = document.querySelector('#addToTable');
    var rangeMeter = document.querySelector('#range');
    var rangeShow = document.querySelector("#show");
    var rangeClock =  document.querySelector('.meter-clock');
    var rangeShow2 = document.querySelector("#show2");
    var rangeClock2 =  document.querySelector('.meter-clock2');
    
        // console.log(values[i]);
    function rotate(value) {

    for (var i = 0; i < 100; i++) {
      function rangeChange() {

        var rotateClock =  rangeMeter.value;
        
        rangeClock.style.transform = 'rotate(' + (-62 + ((rotateClock * 1000) / 82)) + 'deg)';
        rangeClock2.style.transform = 'rotate(' + (-62 + ((rotateClock * 1000) / 102)) + 'deg)';
        
       
        // rangeShow.value = rotateClock;
        if (rangeMeter.value <=10) {
          rangeShow.value = 220 ;
          rangeShow2.value = 0.012;
          document.getElementById('div1').style.transform="rotate(" + 340+ "deg)"; 
             

          if(rangeMeter.value <=9) {
            rangeShow.value = 200;
            rangeShow2.value = 0.010;
            document.getElementById('div1').style.transform="rotate(" + 300+ "deg)"; 
             

            if (rangeMeter.value <=8) {
              rangeShow.value = 180;
              rangeShow2.value = 0.07;
             
              document.getElementById('div1').style.transform="rotate(" + 260+ "deg)"; 
              if (rangeMeter.value  <= 7 ) {
                rangeShow.value = 140;
                rangeShow2.value = 0.004;
                document.getElementById('div1').style.transform="rotate(" + 240+ "deg)"; 
                

                if (rangeMeter.value <= 6) {
                  rangeShow.value = 120;
                  rangeShow2.value = 0.002;
                  document.getElementById('div1').style.transform="rotate(" + 200+ "deg)"; 
                 
                  if (rangeMeter.value <=  5) {
                    rangeShow.value = 100;
                    rangeShow2.value = 0.002;
                             
                            document.getElementById('div1').style.transform="rotate(" + 180+ "deg)"; 
                    if (rangeMeter.value <= 4) {
                      rangeShow.value =60;
                      rangeShow2.value = 0.001;
                            
                             document.getElementById('div1').style.transform="rotate(" + 140+ "deg)"; 
                      if (rangeMeter.value <=3) {
                        rangeShow.value = 40;
                        rangeShow2.value = 0.001;
                            
                            document.getElementById('div1').style.transform="rotate(" + 100+ "deg)"; 
                        if (rangeMeter.value <=2) {
                          rangeShow.value = 20;
                          rangeShow2.value = 0.001;
                            
                             document.getElementById('div1').style.transform="rotate(" + 50+ "deg)"; 
                          if (rangeMeter.value <=1 ) {
                            rangeShow.value = 10;
                            rangeShow2.value =0.001;
                             
                             document.getElementById('div1').style.transform="rotate(" + 0+ "deg)"; 
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          // if(rangeMeter.value <= 10) {
          //   rangeShow.value = values[0];
          // }
        }

        // else if (10 < rangeMeter.value <= 20) {
        //   rangeShow.value = values[1];
        // }
        
        // else if (20 < rangeMeter.value <= 30) {
        //   rangeShow.value = values[2];
        // }
        // rangeShow.value = values[i];
        
      }     
      rangeMeter.addEventListener('input', rangeChange);  
  }
  }
  var sno=0;
  var clickcounter=0;
  var trace1 = {
        x: [],
        y: [],
        z: [],
        type: 'scatter'
      };
function myFunction() {
    
    clickcounter++;
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(1);
 if(sno<10)
 {
sno++;
  cell1.innerHTML = sno;    
  cell2.innerHTML = rangeShow.value;
  cell3.innerHTML = rangeShow2.value;

}
else{
    alert("ONLY 10 READINGS ARE ALLOWED");
}
      
      trace1.x.push(rangeShow.value);
      trace1.y.push(rangeShow2.value);

 }    

 function drawgraph()
   {
     if(clickcounter<6)
     {
        alert("Alert ! Please take atleast 6 readings.");
     }
     else
     {
        var data = [trace1];
        var layout={
            xaxis:{
                title:{
                    text:'Voltmeter',
                    font:
                    {
                        family:'Courier New, monoscope',
                        size:18,
                        color:'#7f7f7f'
                    }
                },
            },
            yaxis:{
                title:{
                    text:'Ammeter',
                    font:
                    {
                        family:'Courier New, monoscope',
                        size:18,
                        color:'#7f7f7f'
                    }
                },
            }
        };

        Plotly.newPlot('myDiv', data, layout, {showSendToCloud: true});
     }
   }
