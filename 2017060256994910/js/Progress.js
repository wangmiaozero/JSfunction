/****************************************************************
 *																*		
 * 						      代码库							*
 *                        www.dmaku.com							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
var Progress=function(){var progress={textheight:null,renderOne:function(id,length,r,percent){var canvas=document.getElementById(id);var context=canvas.getContext("2d");canvas.width=length;canvas.height=length;var i=0;var interval=setInterval(function(){i++;progress.render(context,length,r,i,percent);if(i>=percent){clearInterval(interval)}},10)},render:function(context,length,r,i,percent){context.clearRect(0,0,length,length);context.beginPath();var gradient=context.createLinearGradient(length,0,0,0);gradient.addColorStop("0","#76EEC6");gradient.addColorStop("1.0","#63B8FF");context.strokeStyle=gradient;context.lineWidth=r;context.arc(length/2,length/2,length/2-r,-0.5*Math.PI,-0.5*Math.PI+i*0.02*Math.PI,false);context.stroke();context.closePath();context.beginPath();context.strokeStyle="#8d8d8d";context.lineWidth=2;context.fillStyle="#ffffff";context.arc(length/2,r,0.6*r,0,2*Math.PI,false);context.stroke();context.fill();context.closePath();context.beginPath();var radian=percent/100*2*Math.PI-0.5*Math.PI;var x=Math.cos(radian)*(length/2-r)+length/2;var y=Math.sin(radian)*(length/2-r)+length/2;context.arc(x,y,0.6*r,0,2*Math.PI,false);context.stroke();context.fill();context.closePath();context.beginPath();context.lineWidth=1;context.strokeStyle="#54DDAF";context.fillStyle="#54DDAF";context.arc(length/2,length/2,length/2-2*r,0,2*Math.PI);context.fill();context.closePath();context.beginPath();context.font="bold "+(length/2-2.5*r)/2+"px 微软雅黑";context.fillStyle="#ffffff";var text=percent+"%";textwidth=context.measureText(text).width;if(this.textheight==null){var div=document.createElement("div");document.body.appendChild(div);div.innerHTML=text;div.style.fontSize=((length/2-2.5*r)/2)+"px";this.textheight=div.offsetHeight;div.parentNode.removeChild(div)}textheight=this.textheight;context.fillText(text,(length-textwidth)/2,length/2+textheight/4);context.fill();context.closePath()}};return progress};console.log("\u002f\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u000d\u000a\u0020\u002a\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u0009\u0009\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0020\u0020\u0020\u0020\u0020\u0020\u4ee3\u7801\u5e93\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0077\u0077\u0077\u002e\u0064\u006d\u0061\u006b\u0075\u002e\u0063\u006f\u006d\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0009\u0009\u0020\u0020\u52aa\u529b\u521b\u5efa\u5b8c\u5584\u3001\u6301\u7eed\u66f4\u65b0\u63d2\u4ef6\u4ee5\u53ca\u6a21\u677f\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002f");