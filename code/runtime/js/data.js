    var graphs = [
    function(){
    g.addNode("1");
      g.addNode("2");
      g.addNode("3");
      g.addNode("4");
      g.addNode("5");
      g.addNode("6");
      g.addNode("7");
      g.addDirectedEdge("1","2",1);
      g.addDirectedEdge("2","4",2);
      g.addDirectedEdge("4","5",3);
      g.addDirectedEdge("1","3",4);
      g.addDirectedEdge("3","4",5);
      g.addDirectedEdge("6","7",6);
      },
    function(){
    g.addNode("1");
      g.addNode("2");
      g.addNode("3");
      g.addNode("4");
      g.addNode("5");
      g.addNode("6");
      g.addDirectedEdge("4","1",1);
      g.addDirectedEdge("4","3",2);
      g.addDirectedEdge("2","4",3);
      g.addDirectedEdge("5","4",4);
      g.addDirectedEdge("6","2",5);
      g.addDirectedEdge("5","6",6);
    },

    function(){
    g.addNode("1");
      g.addNode("2");
      g.addNode("3");
      g.addNode("4");
      g.addNode("5");
      g.addNode("6");
      g.addDirectedEdge("4","1",1);
      g.addDirectedEdge("4","3",2);
      g.addDirectedEdge("1","2",3);
      g.addDirectedEdge("3","5",4);
      g.addDirectedEdge("2","6",5);
      g.addDirectedEdge("5","6",6);
    },
    function(){
    g.addNode("1");
      g.addNode("2");
      g.addNode("3");
      g.addNode("4");
      g.addNode("5");
      g.addNode("6");
      g.addDirectedEdge("1","4",1);
      g.addDirectedEdge("3","4",2);
      g.addDirectedEdge("2","4",3);
      g.addDirectedEdge("5","4",4);
      g.addDirectedEdge("3","5",5);
      g.addDirectedEdge("2","1",6);
      g.addDirectedEdge("4","6",7);
    },
    function(){
      g.addNode("a");
    g.addNode("b");
    g.addNode("c");
    g.addNode("d");
    g.addNode("e");
    g.addEdge("a", "b", 8);
    g.addEdge("b", "c", 10);
    g.addEdge("c", "d", 11);
    g.addEdge("d", "e", 12);
    },
      function(){
      g.addNode("a");
    g.addNode("b");
    g.addNode("c");
    g.addNode("d");
    g.addNode("e");
    g.addEdge("d", "b", 8);
    g.addEdge("a", "c", 13);
    g.addEdge("a", "e", 15);
    g.addEdge("d", "e", 16);
    g.addEdge("c", "b", 11);
    g.addEdge("c", "d", 12);
    },
  function(){
      g.addNode("a");
    g.addNode("b");
    g.addNode("c");
    g.addNode("d");
    g.addNode("e");
    g.addNode("f");
    g.addEdge("d", "c", 12);
    g.addEdge("d", "b", 8);
    g.addEdge("a", "c", 13);
    g.addEdge("a", "e", 15);
    g.addEdge("d", "e", 16);
    g.addEdge("c", "b", 11);
    g.addEdge("e", "f", 10);
    },
    function(){
      g.addNode("a");
    g.addNode("b");
    g.addNode("c");
    g.addNode("d");
    g.addEdge("a", "c", 12);
    g.addEdge("a", "b", 8);
    g.addEdge("b", "d", 9);
    g.addEdge("c", "d", 11);
    g.addEdge("a", "d", 10);
    },
      function(){
      g.addNode("a");
    g.addNode("b");
    g.addNode("c");
    g.addNode("d");
    g.addEdge("a", "c", 12);
    g.addEdge("a", "b", 8);
    g.addEdge("b", "d", 9);
    g.addEdge("c", "d", 11);
    },
      function(){
      g.addNode("a");
    g.addNode("b");
    g.addNode("c");
    g.addNode("d");
    g.addNode("e");
    g.addNode("f");
    g.addEdge("a", "c", 12);
    g.addEdge("a", "b", 8);
    g.addEdge("b", "d", 9);
    g.addEdge("c", "d", 11);
    g.addEdge("a", "d", 10);
    g.addEdge("a", "e", 14);
    g.addEdge("b", "f", 19);
    },
    function(){
    g.addNode("a");
    g.addNode("b");
    g.addNode("c");
    g.addNode("d");
    g.addNode("e");
    g.addNode("f");
    g.addEdge("a", "b", 1);
    g.addEdge("c", "b", 2);
    g.addEdge("b", "d", 3);
    g.addEdge("c", "d", 4);
    g.addEdge("e", "d", 6);
    g.addEdge("a", "e", 5);
    g.addEdge("a", "f", 8);
    g.addEdge("e", "f", 7);
    },

  
    ];

var graphSet=[
   [[

    {id: 1, label: ' 1'},
    {id: 2, label: ' 2'},
    {id: 3, label: ' 3'},
    {id: 4, label: ' 4'},
    {id: 5, label: ' 5'},
    
    {id: 6, label: ' 6'},
    {id: 7, label: ' 7'},  
  ],
    [
    
    {from: 1, to: 2,  id: "1"},
    {from: 2, to: 4,  id: "2"},
    {from: 4, to: 5,  id: "3"},
    {from: 1, to: 3,  id: "4"},
    {from: 3, to: 4,  id: "5"},

    {from: 3, to: 7,  id: "8",hidden:true},
    {from: 3, to: 6,  id: "7",hidden:true},
    {from: 6, to: 7,  id: "6"},

    ]
    ],
   [[

    {id: 1, label: ' 1'},
    {id: 2, label: ' 2'},
    {id: 3, label: ' 3'},
    {id: 4, label: ' 4'},
    {id: 5, label: ' 5'}, 
    {id: 6, label: ' 6'},  
  ],
    [
    
    {from: 4, to: 1,  id: "1"},
    {from: 4, to: 3,  id: "2"},
    {from: 2, to: 4,  id: "3"},
    {from: 5, to: 4,  id: "4"},
    {from: 6, to: 2,  id: "5"},
    {from: 5, to: 6,  id: "6"},

    ]
    ],
   
   [[

    {id: 1, label: ' 1'},
    {id: 2, label: ' 2'},
    {id: 3, label: ' 3'},
    {id: 4, label: ' 4'},
    {id: 5, label: ' 5'}, 
    {id: 6, label: ' 6'},  
  ],
    [
    
    {from: 4, to: 1,  id: "1"},
    {from: 4, to: 3,  id: "2"},
    {from: 1, to: 2,  id: "3"},
    {from: 3, to: 5,  id: "4"},
    {from: 2, to: 6,  id: "5"},
    {from: 5, to: 6,  id: "6"},

    ]
    ],
   [[

    {id: 1, label: ' 1'},
    {id: 2, label: ' 2'},
    {id: 3, label: ' 3'},
    {id: 4, label: ' 4'},
    {id: 5, label: ' 5'}, 
    {id: 6, label: ' 6'},  
  ],
    [
    
    {from: 1, to: 4,  id: "1"},
    {from: 3, to: 4,  id: "2"},
    {from: 2, to: 4,  id: "3"},
    {from: 5, to: 4,  id: "4"},
    {from: 3, to: 5,  id: "5"},
    {from: 2, to: 1,  id: "6"},
    {from: 4, to: 6,  id: "7"},
    ]
    ],
  ]; 
function getRandom(){
  var min=0; 
    var max=4;  
    var random =Math.floor(Math.random() * (+max - +min)) + +min; 
      console.log(random);
      return random;
    }
