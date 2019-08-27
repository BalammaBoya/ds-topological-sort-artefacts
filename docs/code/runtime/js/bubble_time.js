class Bubble_sort{
  constructor(){
    this.iterator1 = 0;
    //iteratro1 -> Used to keep track while traversing the array
    this.iterator2 = 0;
    //iterator2 -> Used to keep track while traversing the array(iterator1 + 1)
    this.finished = false;
    //finished -> Determines whether or not the sort is finished
    this.action = 0;
    //action -> Determines the current action being performed
    this.fn_name = "";
    //fn_name -> Name of the function (Bubble sort here)
    this.card;
    //card -> Variable that corresponds to DOM elements that represent the array
    this.comparisons = 0;
    //comparisons -> Counts the number of comparisons
    this.swaps = 0;
    //swaps -> Counts the number of swaps
    this.operation = "";
    //operation -> Determined current operation
    this.interval = 0;
    //interval -> Varialble corresponding to setting and unsetting the slider time interval
    this.interval = 0;
    this.num = new Array();
    //num -> Variable that stores the array
    for (var i = 0; i < 10; i++)
      this.num[i] = 0;
    // Array has been initialized to contain all zero values to allocate the memory at the start itse
    this.flag = 0;
    this.randomcounter = 2;
    // decides which type of array will be displayed
    // 0 -> sorted, 1 -> reverse sorted, 2 -> random
  };
};
// Creating an object of the Bubble_sort using "let"
let bubble_artefact = new Bubble_sort();


function randomise()
{ 
  if(bubble_artefact.randomcounter == 2){
      for (var i = 0; i < 6; i++) 
            bubble_artefact.num[i] = Math.floor(Math.random() * 90 + 10);
    }else
    if(bubble_artefact.randomcounter == 0)
    {
      var ran = Math.floor(Math.random() * 90 + 10);
      bubble_artefact.num[0] = ran;
      for (var i = 1; i < 6; i++) 
            bubble_artefact.num[i] = bubble_artefact.num[i-1] + Math.floor(Math.random() * 90 + 10);
    }else
    if(bubble_artefact.randomcounter == 1)
    {
      var ran = Math.floor(Math.random() * 400 + 400);
      bubble_artefact.num[0] = ran;
      for (var i = 1; i < 6; i++) 
            bubble_artefact.num[i] = bubble_artefact.num[i-1] - Math.floor(Math.random() * 90 + 10);
    }
    bubble_artefact.card = document.querySelectorAll('.card');
  for(var i=0;i<6;i++)
  {
    bubble_artefact.card[i].innerHTML = bubble_artefact.num[i];
    bubble_artefact.card[i].style.fontStyle = "normal";
    bubble_artefact.card[i].style.color = "white";
    bubble_artefact.card[i].style.backgroundColor = "#288ec8";
  }
  bubble_artefact.flag=0;
};

function change_interval()
{
  if(bubble_artefact.interval != 0) { clearInterval(bubble_artefact.interval); }
  
  if(document.getElementById("interval").value != 100)
  {
    if(bubble_artefact.fn_name > "") { bubble_artefact.interval = setInterval(next_step, 2600-document.getElementById("interval").value); }
    document.getElementById("pause").style.backgroundColor = "#288ec8";
  }
  else
    document.getElementById("pause").style.backgroundColor = "grey";
};
function compare(i, j)
{
  bubble_artefact.comparisons++;
  for(var n = 0; n < 6; n++)
  {
    if(n == i || n == j) 
    {
      if(bubble_artefact.card[n].style.backgroundColor != "grey" || !bubble_artefact.flag) 
        bubble_artefact.card[n].style.backgroundColor = "#a4c652";
    }else 
    { 
      if(bubble_artefact.card[n].style.backgroundColor != "grey" && !bubble_artefact.flag)
        bubble_artefact.card[n].style.backgroundColor = "#288ec8"; 
    }
  }
  document.getElementById("ins").innerHTML = "<p><strong>Comparisons: " + bubble_artefact.comparisons ;
  
  if(eval(bubble_artefact.card[j].innerHTML) < eval(bubble_artefact.card[i].innerHTML))
    return true;
  else
    return false;
};

function swap(i, j)
{
  bubble_artefact.swaps++;
  var temp;
  document.getElementById("ins").innerHTML = document.getElementById("ins").innerHTML + "<p>Swapping " + bubble_artefact.card[i].innerHTML + " and " + bubble_artefact.card[j].innerHTML + "</p>";
  temp = eval(bubble_artefact.card[j].innerHTML);
  bubble_artefact.card[j].innerHTML = eval(bubble_artefact.card[i].innerHTML);
  bubble_artefact.card[i].innerHTML = temp;
};




function opti_bubble()
{
  if(bubble_artefact.iterator1 < bubble_artefact.end)
  {
    bubble_artefact.iterator1++;
    bubble_artefact.iterator2++;
  }
  else
  {
    if(bubble_artefact.finished)
    {
      if(document.getElementById("interval").value != 100)
      {
        clearInterval(bubble_artefact.interval);
        bubble_artefact.interval = 0;
      }
      document.getElementById("ins").innerHTML = "<h3>The sort is complete - there were " + bubble_artefact.comparisons + " comparisons and " + bubble_artefact.swaps + " swaps.</h3>";
      document.getElementById("next").style.backgroundColor = "grey";
      document.getElementById("next").disabled = true;
      bubble_artefact.iterator2 = 0;
    }
    else
    {
      bubble_artefact.finished = true;
      bubble_artefact.iterator1 = 0;
      bubble_artefact.iterator2 = 1;  
      bubble_artefact.card[bubble_artefact.end+1].style.backgroundColor = "grey";
      bubble_artefact.end--;
    }
  }
};

function next_step()
{
  if(bubble_artefact.action == 1)
  {
    if(compare(bubble_artefact.iterator1, bubble_artefact.iterator2))
        bubble_artefact.action = -1;
    else
        window[bubble_artefact.fn_name]();
  }
  else
  {
    bubble_artefact.action = 1;
    if(bubble_artefact.fn_name == "opti_bubble") { swap(bubble_artefact.iterator1, bubble_artefact.iterator2); }
    bubble_artefact.finished = false;
    window[bubble_artefact.fn_name]();
  }
};

function pause(){
  document.getElementById("interval").value = 100;
  change_interval();
};


function start_sort()
{
  if(bubble_artefact.interval != 0) { clearInterval(bubble_artefact.interval); bubble_artefact.interval = 0; }
  bubble_artefact.card = document.querySelectorAll('.card');
  bubble_artefact.action = 1;
  bubble_artefact.finished = true;
  bubble_artefact.comparisons = 0;
  bubble_artefact.swaps = 0;
  bubble_artefact.fn_name = "opti_bubble";
  switch(bubble_artefact.fn_name)
  {
  case "opti_bubble":
    bubble_artefact.iterator1 = 0;
    bubble_artefact.iterator2 = 1;
    bubble_artefact.end = 4;
    bubble_artefact.operation = "Swap";
    next_step();
    break;
  }
  document.getElementById("next").onclick = function() { next_step(); };
  document.getElementById("next").value = "Next";
  if(document.getElementById("interval").value == 100)
  {
    document.getElementById("next").disabled = false;
    document.getElementById("pause").style.visibility = "hidden";
  }
  else
  {
    document.getElementById("pause").style.visibility = "visible";
    if(bubble_artefact.interval == 0)
      bubble_artefact.interval = setInterval(next_step, 2600-document.getElementById("interval").value);
    else
    {
      clearInterval(bubble_artefact.interval);
      bubble_artefact.interval = 0;
    }
  }

};

function change(){
  var text = document.getElementById("order").value;
  if(text == "sorted")
    bubble_artefact.randomcounter = 0;
  else
  if(text == "reversesorted")
    bubble_artefact.randomcounter = 1;
  else
    bubble_artefact.randomcounter = 2;
  document.getElementById("next").onclick = function() { start_sort(); };
};

function reload(){
  location.reload(true);
};
function setcounter(){
  document.getElementById("order").value = "random";
};
