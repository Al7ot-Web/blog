//<![CDATA[
var maxUserNameLength=15;
var txtAuthorLine="[image] <h5> [user] </h5>نشر <b> [count] </b> [post]";
var sizeAvatar=150;
var cropAvatar=true;
var urlNoAvatar="http://lh4.googleusercontent.com/-069mnq7DV_g/TvgRrBI_JaI/AAAAAAAAAic/Iot55vywnYw/s"+sizeAvatar+"/avatar_blue_m_96.png";
function replaceAuthorVars(l,k,p){if(!k||!k.author){return l
}var r=k.author;
var o="";if(r.uri&&r.uri.$t!=""){o=r.uri.$t
}var n=urlNoAvatar;
if(r.gd$image&&r.gd$image.src){n=r.gd$image.src
}if(n=="http://img2.blogblog.com/img/b16-rounded.gif"&&urlNoAvatar!=""){n=urlNoAvatar
}var t="s"+sizeAvatar;
n=n.replace(/\/s\d\d+-c\//,"/"+t+"-c/");
if(cropAvatar){t+="-c"
}n=n.replace(/\/s\d\d+(-c){0,1}\//,"/"+t+"/");
var m=r.name.$t;
var q='<img class="author-avatar" height="'+sizeAvatar+'" width="'+sizeAvatar+'" title="'+m+'" src="'+n+'" />';
if(o!=""){q=""+q+""
}if(maxUserNameLength>3&&m.length>maxUserNameLength){m=m.substr(0,maxUserNameLength-3)+"..."
}var s=m;if(o!=""){s=""+s+""
}l=l.replace("[user]",s);
l=l.replace("[image]",q);
l=l.replace("[#]",p);
l=l.replace("[count]",k.count);
if(k.count!=1){l=l.replace("[post]","موضوع")
}else{l=l.replace("[post]","post")
}return l}var blauthors={};
var blndxbase=1;
function showAuthors(i){for(var p=0;
p<i.feed.entry.length;
p++){var m=i.feed.entry[p];
var o="";if(m.author[0].uri&&m.author[0].uri.$t!=""){o=m.author[0].uri.$t
}var n=m.author[0].name.$t;
if(blauthors[n]){blauthors[n].count++
}else{var q=new Object();
q.author=m.author[0];
q.count=1;blauthors[n]=q
}}if(i.feed.entry.length==500){blndxbase+=500;
document.write('<script type="text/javascript" src="http://'+window.location.hostname+"/feeds/posts/default?redirect=false&max-results=500&start-index="+blndxbase+'&alt=json-in-script&callback=showAuthors"><\/script>');
return}var r=[];
for(var l in blauthors){r.push([l,blauthors[l]])
}r.sort(function(a,b){if(b[1].count-a[1].count){return b[1].count-a[1].count
}return(a[1].author.name.$t.toLowerCase()<b[1].author.name.$t.toLowerCase())?-1:1
});document.write('<div class="blog-author">');
for(var p=0;
p<r.length;
p++){var k=r[p][1];
document.write('<div class="author-line">');
document.write(replaceAuthorVars(txtAuthorLine,k,p+1));
document.write("</div>")
}document.write("</div>")
}document.write('<script type="text/javascript" src="http://'+window.location.hostname+'/feeds/posts/default?redirect=false&max-results=500&alt=json-in-script&callback=showAuthors"><\/script>');
//]]>
