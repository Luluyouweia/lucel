var ApkIndex=new Array();
function Apk(val){ return AIO.value=val;}
var ApkIndexObject={
	newValue:5,
	get:function(){
		setTimeout(function(){
			if(AIO.value<AIO.newValue){
				alert("当前版本非最新版本,当前版本号："+AIO.value+"最新版本号："+AIO.newValue);
			}
		},3000)
	},
	value:0
}

const AIO=ApkIndexObject;
AIO.get();