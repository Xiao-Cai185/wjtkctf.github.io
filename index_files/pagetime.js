var hasPageTime=1,maxTimer=null,minTimer=null,hasMaxtime=!1,hasSurveyTime=!1,isCtj=-1<location.href.indexOf("ctj=1"),hasAnswer=(0<leftSeconds&&(maxSurveyTime?maxSurveyTime=Math.min(leftSeconds,maxSurveyTime):leftSeconds<14400&&(maxSurveyTime=leftSeconds)),maxSurveyTime&&(hasSurveyTime=!0),!1);function getMaxTimeStr(e){var i="",t=parseInt(e/3600),t=(t?(t<10&&(i+="0"),i+=t+":",e%=3600):i="00:",parseInt(e/60));return t?(t<10&&(i+="0"),i+=t+":",e%=60):i+="00:",e?(e<10&&(i+="0"),i+=e):i+="00",i}var initCounterDate=null,clientnowTime=new Date;function processMinMax(){var e=document.getElementById("divMaxTime");if(e&&(e.style.display="none"),!(window.joinIdnew&&0<joinIdnew)&&(maxTimer&&clearInterval(maxTimer),minTimer&&clearInterval(minTimer),!window.needSkipPageTime)&&window.isRunning&&!window.isCtj&&!(window.waitfenmian||window.waitinformed||window.waitytyy)){try{if(0==$(pageHolder[cur_page]).find(".field:visible,.cutfield:visible").length&&!window.isChuangGuan&&!window.isinterview)return}catch(e){}initCounterDate=initCounterDate||new Date;var n,i,t,a,r,o,s=$(pageHolder[cur_page]).attr("maxtime"),m=s,d=new Date,l=document.getElementById("spanTimeTip"),u=(hasSurveyTime&&(i=parseInt((new Date-new Date(clientnowTime))/1e3),window.leftSeconds&&0<i&&window.maxSurveyTime&&!window.hasCountClientresiduetime&&(leftSeconds-=i,0<window.expectPromoteCount?maxSurveyTime=Math.min(window.expectPromoteCount,leftSeconds):maxSurveyTime-=i,maxSurveyTime<=0&&(maxSurveyTime=1),window.hasCountClientresiduetime=!0),window.initMaxSurveyTime||(window.initMaxSurveyTime=window.maxSurveyTime),0==(m=!m||maxSurveyTime&&maxSurveyTime<m?maxSurveyTime||1:m)&&(m=1),l)&&(l.innerHTML=""),"time"==$(pageHolder[cur_page]).attr("iszhenbie")),w=(m&&!window.isInterview2&&(1==langVer&&3!=isChuangGuan&&4!=isChuangGuan&&(l.innerHTML="Remaining "),hasMaxtime=!0,window.isMobile&&($("#headsplitdiv").css("height","32px").show(),2<isChuangGuan)&&0<$("#toplogo").height()&&$("#toplogo").css("margin-top",$("#divMaxTime").height()+"px"),n=document.getElementById("spanMaxTime"),e.style.display="",u&&(e.style.display="none"),(i=document.getElementById("voteend_residue_time")||document.getElementById("vote_residue_time"))&&"none"!=i.style.display&&(e.style.display="none"),(l=e.getElementsByTagName("b")[0])&&(l.innerHTML=""),n.innerHTML&&!s||(n.innerHTML=getMaxTimeStr(m)),maxTimer=setInterval(function(){var e=new Date,i=parseInt((e-d)/1e3),t=m-i,i=parseInt((e-initCounterDate)/1e3);window.initMaxSurveyTime&&!s&&(t=initMaxSurveyTime-i),window.initMaxSurveyTime&&(maxSurveyTime=initMaxSurveyTime-i),n.innerHTML=getMaxTimeStr(t),t<=0&&(clearInterval(maxTimer),window.amt=1,window.hasHeatMap&&window.hasSplicing?pageHolder[cur_page].hasGetHeatmapAndSplicingdata||getHeatmapAns(function(){getSplicingAns(function(){pageHolder[cur_page].hasGetHeatmapAndSplicingdata=!0,autoSubmit(null,!0)})}):window.hasHeatMap&&!pageHolder[cur_page].hasGetHeatmapdata?getHeatmapAns(function(){pageHolder[cur_page].hasGetHeatmapdata=!0,autoSubmit(null,!0)}):window.hasSplicing&&!pageHolder[cur_page].hasGetSplicingdata?getSplicingAns(function(){pageHolder[cur_page].hasGetSplicingdata=!0,autoSubmit(null,!0)}):autoSubmit(null,!0))},100)),$(pageHolder[cur_page]).attr("mintime"));w&&(t=$("#ctlNext")[0],a=$("#divNext a")[0],r=$("#divPrev")[0],3!=isChuangGuan&&4!=isChuangGuan||(a=$("#lxNextBtn")[0]),window.isinterview&&(a=$(pageHolder[cur_page]).find(".interviewEnsureBtn")[0]),1==window.isytyy&&(a=$("#ytyyNextBtn")[0]),window.reachMaxCheatCount||(t.disabled=!0),a&&(a.disabled=!0),r&&(r.disabled=!0),a&&!a.initVal&&(a.initVal=a.innerHTML),t.initVal||(t.initVal=t.innerHTML),cur_page==pageHolder.length-1&&(t.innerHTML=w+minTimeTip),a&&(a.innerHTML=w+minTimeTip),o=w,minTimer=setInterval(function(){var e=new Date,e=parseInt((e-d)/1e3);o=w-e,window.isinterview&&(window.pageMinTime=o),a&&(a.innerHTML=o+minTimeTip),t.innerHTML=o+minTimeTip,(o<=0||u&&o<=1)&&(window.isinterview&&(window.pageMinTime=0),clearInterval(minTimer),t.disabled=!1,a&&(a.disabled=!1),r&&(r.disabled=!1),a&&(a.innerHTML=a.initVal),t.innerHTML=t.initVal)},100))}}var sl_totalSeconds=startLeftTotalSeconds=0,startLeftTimeout=null,startLeftEnterPageDate=new Date;function startTimeRemain(e){e||(e=new Date,e=parseInt((e-startLeftEnterPageDate)/1e3),sl_totalSeconds=startLeftTotalSeconds-e),days=parseInt(sl_totalSeconds/60/60/24,10),hours=parseInt(sl_totalSeconds/60/60%24,10),minutes=parseInt(sl_totalSeconds/60%60,10),seconds=parseInt(sl_totalSeconds%60,10);var e="距离开始还有"+days+"天"+hours+"时"+minutes+"分"+seconds+"秒",i="立即开始",t=(0!=langVer&&(n=1<hours?" hours ":" hour ",t=1<days?" days ":" day ",e="Remaining Start："+days+t+hours+n+minutes+" m "+seconds+" s ",i="Start"),"<a href='javascript:' onclick='refreshWin();' class='button mainBgColor' style='color:#fff;margin:0 auto;width:200px;'>"+i+"</a>"),n=$("#divWorkError #countdownHtml");n.length||(n=$("#countdownHtml")),0<sl_totalSeconds?n.html("<div id='divStartTimeTip'>"+e+"</div>"):(n.html(t),clearInterval(startLeftTimeout))}function refreshWin(){0<sl_totalSeconds?alertNew($("#divStartTimeTip").html()):window.location.href=window.location.href.replace(/#/gi,"")}$(function(){sl_totalSeconds=startLeftTotalSeconds=parseInt($("#divstarttime").attr("left")),startLeftTotalSeconds&&(2<startLeftTotalSeconds&&startTimeRemain(!0),startLeftTimeout=setInterval(startTimeRemain,1e3))});