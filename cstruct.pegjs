struct 
= _ 'struct'_ cident* _ '{' _
	d:(declareStmt/macroExp)*
_'}'_ cident? _ ';'?{return d}

declareStmt
= _ (modifier/signtype _)* _ lentype:(lentype/typeExp)? _ ptr:ptrExp? _ name:nameExp _ len:arrayExp? _ ('=' _ value _)? ';' _
{return {'type':ptr?"*":lentype, 'name':name ,'len':len}}

ptrExp
= ("*" _)+

typeExp
= 	type:(cident _ )
	{return type[0]}

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
= "long long int" / "long long" / "long int" / "short int" / "long" /"short"

_ "whitespace"
  = $[ \t\n\r]*

cident 
= $[A-Za-z0-9_]+
//{return cident.join("")}

digest
= $[0-9]+

hex
= $('0x'[0-9a-fA-F]+)