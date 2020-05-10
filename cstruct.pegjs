struct 
= _ 'struct'_ cident _ '{' _
	d:(declareStmt/macroExp)*
_'}'';'? _ {return d}

declareStmt
= _ (modifier/signtype/lentype)* _ type:typeExp _ name:nameExp _ len:arrayExp? _ ('=' _ value _)? ';' _
{return {'type':type, 'name':name ,'len':len}}

typeExp
= 	type:(cident _ '*'* _)
	{return type.join("").split(" ").join("")}

arrayExp
= 	'[' _ value:digest _ ']'
	{return value}
	/ '[' _ value:hex _ ']'
	{return value}

nameExp
= cident

value
= [^;]+

macroExp 
= '#' [^\n]* ('\n')
{return null}

signtype  
= "unsigned" / "signed" 

modifier 
= "violate" / "const" / "static" 

lentype
= "short" / "long"


_ "whitespace"
  = [ \t\n\r]*

cident 
= $[A-Za-z0-9_]+
//{return cident.join("")}

digest
= $[0-9]+

hex
= $('0x'[0-9a-fA-F]+)