(function(window) {
    function init() {
        var ProtocolJS = {

        };
        ProtocolJS.hdr_char_start="+";
        ProtocolJS.hdr_char_end="+";
        ProtocolJS.hdr_char_fill_odd="+" ;
        ProtocolJS.hdr_char_fill_even="-" ;
        ProtocolJS.hdr_char_sep="|" ;
        ProtocolJS.bits_per_line=32 ;
        ProtocolJS.do_print_top_tens=true;
        ProtocolJS.do_print_top_units=true;
        ProtocolJS.field_list=[];
        ProtocolJS.fromCStruct = function(code) {
            alert("TODO");
        };

        ProtocolJS.fromPyConstruct = function(code) {
            alert("TODO");
        };

        ProtocolJS.fromPyStruct = function(code) {
            alert("TODO");
        };

        ProtocolJS.parse = function(spec) {
            var fields;
            var opts;
            if(spec.indexOf("?") !== -1) {
                var _spec = spec.split("?");
                fields = _spec[0];
                opts = _spec[1];
            }else{
                fields = spec;
            }
            if(spec.indexOf("?", spec.indexOf("?")+1) !== -1){
                throw "FATAL: Character \"?\" may only be used as an option separator.";
            }
            var items = fields.split(",");
            this.field_list = [];
            items.forEach(function(item, index){
                [text, bits] = item.split(":");
                bits = parseInt(bits);
                this.field_list.push({"text": text, "len": bits});
            },this);
            if(opts !== undefined){
                var _opts = opts.split(",");
                _opts.forEach(function(opt, index){
                    [k,v] = opt.split("=");
                    if(k.toLowerCase() === "bits"){
                        if(v <= 0){
                            throw "FATAL: Invalid value for 'bits' option (" + v + ")";
                        }
                        this.bits_per_line = parseInt(v);
                    }else if(k.toLowerCase() === "numbers"){
                        if(["0", "n", "no", "none", "false"].indexOf(v.toLowerCase()) !== -1){
                            this.do_print_top_tens = false;
                            this.do_print_top_units = false;
                        }else if(["1", "y", "yes", "none", "true"].indexOf(v.toLowerCase()) !== -1){
                            this.do_print_top_tens = true;
                            this.do_print_top_units = true;
                        }else{
                            throw "FATAL: Invalid value for 'numbers' option (" + v + ")";
                        }
                    }else if(["oddchar", "evenchar", "startchar", "endchar", "sepchar"].indexOf(k.toLowerCase()) !== -1){
                        if(v.length !== 1){
                            throw "FATAL: Invalid value for '" + k +"' option (" + v + ")";
                        }
                        if(k.toLowerCase() === "oddchar"){
                            this.hdr_char_fill_odd = v;
                        }else if(k.toLowerCase() === "evenchar"){
                            this.hdr_char_fill_even = v;
                        }else if(k.toLowerCase() === "startchar"){
                            this.hdr_char_start = v;
                        }else if(k.toLowerCase() === "endchar"){
                            this.hdr_char_end = v;
                        }else if(k.toLowerCase() === "sepchar"){
                            this.hdr_char_sep = v;
                        }
                    }else{
                        throw "FATAL: Unknown option '" + k + "'";
                    }
                },this);
            }
        };

        ProtocolJS.toString = function(){
            var proto_fields = this._process_field_list();
            var lines = [];
            numbers = this._get_top_numbers();
            if(numbers != ""){
                lines.push(numbers);
            }
            lines.push(this._get_horizontal());
            var bits_in_line=0;
            var cur_line="";
            var fields_done=0;
            var p=-1;
            while(p < proto_fields.length - 1){
                p++;

                var cur_field = proto_fields[p];
                var field_text = cur_field["text"];
                var field_len = cur_field["len"];
                var field_mf = cur_field["MF"];

                if(field_text.length > field_len*2 - 1){
                    field_text = field_text.slice(0,field_len*2-1);
                    if(field_text.length > 1){
                        field_text = field_text.slice(0,-1) + ".";
                    }
                }

                if(this.bits_per_line - bits_in_line >= field_len){
                    if(bits_in_line == 0){
                        cur_line += this._get_separator();
                    }
                    cur_line += this._center(field_text, field_len*2 - 1);
                    bits_in_line += field_len;
                    fields_done++;
                    
                    if(bits_in_line == this.bits_per_line){
                        cur_line += this._get_separator();
                        lines.push(cur_line);
                        cur_line = "";
                        bits_in_line = 0;
                        if(field_mf === true){
                            if(proto_fields[p+1]['len'] > this.bits_per_line - field_len){
                                var line_right, line_center;
                                var line_left = this._get_horizontal(this.bits_per_line - field_len);
                                if(line_left.length === 0){
                                    line_left = this.hdr_char_start;
                                }
                                if(proto_fields[p+1]['len'] >= this.bits_per_line){
                                    line_center = " ".repeat(2*field_len-1);
                                    line_right = this.hdr_char_end;
                                }else{
                                    line_center = " ".repeat(2*(proto_fields[p+1]['len'] - (this.bits_per_line - field_len)) - 1);
                                    line_right = this._get_horizontal(this.bits_per_line - proto_fields[p+1]['len']);
                                }
                                lines.push(line_left + line_center + line_right);
                            }else{
                                lines.push(this._get_horizontal());
                            }
                        }else{
                            lines.push(this._get_horizontal());
                        }
                    }else if(fields_done == proto_fields.length){
                        cur_line += this._get_separator();
                        lines.push(cur_line);
                        lines.push(this._get_horizontal(bits_in_line));
                    }else{
                        cur_line += this._get_separator();//diff
                    }
                }else{
                    if(bits_in_line === 0){
                        if(field_len % this.bits_per_line === 0){
                            var lines_to_print = parseInt((field_len/this.bits_per_line)*2-1);
                            var central_line = parseInt(lines_to_print/2);
                            for (var i=0;i < lines_to_print;i++){
                                var start_line, end_line;
                                if((i%2) === 1){
                                    start_line = this.hdr_char_start;
                                    end_line = this.hdr_char_end;
                                }else{
                                    start_line = this.hdr_char_sep;
                                    end_line = this.hdr_char_sep;
                                }

                                if(i === central_line){
                                    lines.push(start_line + this._center(field_text, this.bits_per_line*2-1) + end_line);
                                }else{
                                    lines.push(start_line + " ".repeat(this.bits_per_line*2-1) + end_line);
                                }

                                if(i === (lines_to_print-1)){
                                    lines.push(this._get_horizontal());
                                }
                            }
                        }
                    }else{
                        throw "interesting";
                    }
                }
            }
            result = lines.join("\n");
            return result;
        };
        ProtocolJS._center = function(instr,tolen){
            if(instr.length>= tolen){
                return instr;
            }
            var llen = parseInt((tolen - instr.length)/2);
            var rlen = tolen - instr.length - llen;
            return " ".repeat(llen) + instr + " ".repeat(rlen);
            
        };

        ProtocolJS._get_top_numbers = function(){
            var lines = ["",""];
            if(this.do_print_top_tens === true){
                for(var i = 0; i < this.bits_per_line; i++){
                    if(i.toString().slice(-1)=="0"){
                        lines[0] += " " + i.toString().slice(0,1);
                    }else{
                        lines[0] += "  ";
                    }
                }
            }
            if(this.do_print_top_units === true){
                for(var i = 0; i < this.bits_per_line; i++){
                    lines[1] += " " + i.toString().slice(-1);
                }
                return lines.join("\n");
            }
        };
        
        ProtocolJS._get_horizontal = function(width){
            if (width === undefined){
                width = this.bits_per_line
            }
            if (width <= 0){
                return "";
            }else{
                return this.hdr_char_start + (this.hdr_char_fill_even+this.hdr_char_fill_odd).repeat(width-1) + this.hdr_char_fill_even + this.hdr_char_end;
            }
        }

        ProtocolJS._get_separator = function(line_end){
            if(line_end === undefined){
                line_end = "";
            }
            return this.hdr_char_sep;
        }

        ProtocolJS._process_field_list = function(){
            var new_field = [];
            var bits_in_line = 0;
            var i = 0;
            var cur_field, available_in_line;
            var new_fields = [];
            while(i<this.field_list.length){
                cur_field = this.field_list[i];
                cur_field["MF"] = false;
                available_in_line = this.bits_per_line - bits_in_line;
                // enough bits left
                if(available_in_line >= cur_field["len"]){
                    new_fields.push(cur_field);
                    bits_in_line += cur_field["len"];
                    i++;
                    if(bits_in_line == this.bits_per_line){
                        bits_in_line = 0;
                    }
                }else{// not enough bits 
                    if(bits_in_line === 0 && ((cur_field["len"]%this.bits_per_line) == 0)){
                        new_fields.push(cur_field);
                        i++;
                        bits_in_line = 0;
                    }else{
                        if(available_in_line >= cur_field["len"] - available_in_line){
                            new_fields.push({"text" : cur_field["text"], "len" : available_in_line, "MF" : true}) ;
                            cur_field["text"] = "";
                            cur_field["len"] = cur_field["len"] - available_in_line;
                            cur_field["MF"] = false;
                        }else{
                            new_fields.push({"text" : "", "len": available_in_line, "MF" : true});
                            cur_field["len"] = cur_field["len"] - available_in_line;
                            cur_field["MF"] = false;
                        }
                        bits_in_line = 0;
                        continue;
                    }
                }
            }
            return new_fields;
        }
        
        return ProtocolJS;
    }
    
    if (typeof(ProtocolJS) === "undefined") {
        window.protocoljs = init();
    } else {
        console.log("double initialization");
    }
})(window); 