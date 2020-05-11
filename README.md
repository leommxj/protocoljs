# protocolJS

javascript verison of luismartingarcia's Protcol - An ASCII Header Generator for Network Protocols with convenient GUI page

luismartingarcia's Protcol repo: [protocol](https://github.com/luismartingarcia/protocol)

## usage

### library

#### protcol description to ascii Header

```
<script src="./parser.js"></script>
<script src="./protocol.js"></script>
<script>
	protocoljs.parser("Type:8,Code:8,Checksum:16,Identifier:16,Sequence Number:16,Data:64");
	var result = protocoljs.toString();
	console.log(result);
</script>
```

#### from c string 

**WIP** 

```
> struct_str = "struct SIMPLE\
{\
    int a;\
    char b;\
    char c[20];\
};"
< "struct SIMPLE{    int a;    char b;    char c[20];};"
> protocoljs.fromCStruct(struct_str, "ILP32")
< "a:32,b:8,c:160"
```


### gui tool
[online version](https://www.leommxj.com/protocoljs/)
