(function(window) {
    function init() {
        var ProtocolJS = {

        };
        ProtocolJS.specs = {
            "icmp-destination": "Type:8,Code:8,Checksum:16,Unused:32,Internet Header + 64 bits of Original Data Datagram:64", 
            "udp": "Source Port:16,Destination Port:16,Length:16,Checksum:16", 
            "s7_header": "Protocol ID:8,ROSCTR:8,Reserved:16,Request ID:16,Parameter Length:16,Data Length:16,Error Code (only ROSCTR 3):16,Function Code:8,Item Count:8?bits=16", 
            "modbus_tcp": "Transaction ID:16,Protocol ID:16,Length:16,Address:8,Function Code:8,Data:64", 
            "ip": "Version:4,IHL:4,Type of Service:8,Total Length:16,Identification:16,Flags:3,Fragment Offset:13,Time to Live:8,Protocol:8,Header Checksum:16,Source Address:32,Destination Address:32,Options:24,Padding:8", 
            "icmp-time": "Type:8,Code:8,Checksum:16,Unused:32,Internet Header + 64 bits of Original Data Datagram:64", 
            "icmp-parameter": "Type:8,Code:8,Checksum:16,Pointer:8,Unused:24,Internet Header + 64 bits of Original Data Datagram:64", 
            "icmp-source": "Type:8,Code:8,Checksum:16,Unused:32,Internet Header + 64 bits of Original Data Datagram:64", 
            "icmpv6-parameter": "Type:8,Code:8,Checksum:16,Pointer:32,Invoking packet data (without exceeding minimum IPv6 MTU):64", 
            "tcp": "Source Port:16,Destination Port:16,Sequence Number:32,Acknowledgment Number:32,Offset:4,Res.:4,Flags:8,Window:16,Checksum:16,Urgent Pointer:16,Options:24,Padding:8", 
            "cotp_cr": "Length:8,PDU Type:8, Destination Reference:16, Source Reference:16,Class/Options:8,Param. Code:8,Param. Length:8,Param.:88", 
            "icmpv6-time": "Type:8,Code:8,Checksum:16,Unused:32,Invoking packet data (without exceeding minimum IPv6 MTU):64", 
            "cotp_dr": "Length:8,PDU Type:8, Destination Reference:16, Source Reference:16,Cause:8", 
            "test": "Field_1:1,Field_4:4,Field_7:7,Field_10:10,Field_13:13,Field_16:16,Field_19:19,Field_22:22,Field_25:25,Field_28:28,Field_31:31,Field_34:34,Field_37:37,Field_40:40,Field_43:43,Field_46:46,Field_49:49,Field_52:52,Field_55:55,Field_58:58,Field_61:61,Field_64:64,Field_67:67,Field_70:70,Field_73:73,Field_76:76,Field_79:79,Field_82:82,Field_85:85,Field_88:88,Field_91:91,Field_94:94,Field_97:97,Field_100:100,Field_103:103,Field_106:106,Field_109:109,Field_112:112,Field_115:115,Field_118:118,Field_121:121,Field_124:124,Field_127:127", 
            "example": "Field4:4,Field4:4,Field8:8,Field16:16,Field32:32,Field64:64?bits=16,numbers=y,startchar=*,endchar=*,evenchar=-,oddchar=-,sepchar=|", 
            "dnp3": "Start:16,Length:8,Control:8,Destination Address:16,Source Address:16,CRC:16,User Data 1:128,CRC 1:16,User Data 2:112,CRC 2:16", 
            "icmpv6-radv": "Type:8,Code:8,Checksum:16,Cur Hop Limit:8,M:1,O:1,Reserved:6,Router Lifetime:16,Reachable Time:32,Retransmission Timer:32,Options:64", 
            "dhcp": "Opcode:8,Hardware Type: 8,HW Addr Len:8,Hop Count:8,Transaction ID:32,Number of Seconds:16,Flags:16,Client IP Addr:32,Your IP Addr: 32,Server IP Addr:32,Gateway IP Addr:32,Client Hardware Addr:128,Server Host Name:512,Boot Filename:1024", 
            "icmpv6-echo": "Type:8,Code:8,Checksum:16,Identifier:16,Sequence Number:16,Data:64", 
            "icmp": "Type:8,Code:8,Checksum:16,Message Body:64", 
            "icmpv6-nadv": "Type:8,Code:8,Checksum:16,R:1,S:1,O:1,Reserved:29,Target Address:128,Options:64", 
            "icmp-timestamp": "Type:8,Code:8,Checksum:16,Identifier:16,Sequence Number:16,Originate Timestamp:32,Receive Timestamp:32,Transmit Timestamp:32", 
            "profinet_rt": "Frame ID:16,User Data:80,Cycle Counter:16,Data Status:8,Transfer Status:8", 
            "dot1q": "Destination Address:48,Source Address:48,TPID (0x8100):16,PCP:3,D:1,VLAN ID:12,EtherType:16,Payload:96?bits=48", 
            "8021q": "Destination Address:48,Source Address:48,TPID (0x8100):16,PCP:3,D:1,VLAN ID:12,EtherType:16,Payload:96?bits=48", 
            "icmp-information": "Type:8,Code:8,Checksum:16,Identifier:16,Sequence Number:16", 
            "icmpv6-redirect": "Type:8,Code:8,Checksum:16,Reserved:32,Target Address:128,Destination Address:128,Options:64", 
            "tsap": "Type:8,Slot:5,Rack:3?bits=16", 
            "icmpv6": "Type:8,Code:8,Checksum:16,Message Body:64", 
            "icmp-echo": "Type:8,Code:8,Checksum:16,Identifier:16,Sequence Number:16,Data:64", 
            "icmpv6-nsol": "Type:8,Code:8,Checksum:16,Reserved:32,Target Address:128,Options:64", 
            "icmp-redirect": "Type:8,Code:8,Checksum:16,Gateway Internet Address:32,Internet Header + 64 bits of Original Data Datagram:64", 
            "ipv6": "Version:4,Traffic Class:8,Flow Label:20,Payload Length:16,Next Header:8,Hop Limit:8, Source Address:128, Destination Address:128", 
            "icmpv6-big": "Type:8,Code:8,Checksum:16,MTU:32,Invoking packet data (without exceeding minimum IPv6 MTU):64", 
            "ethernet": "Destination Address:48,Source Address:48,EtherType:16,Payload:128?bits=48", 
            "icmpv6-destination": "Type:8,Code:8,Checksum:16,Unused:32,Invoking packet data (without exceeding minimum IPv6 MTU):64", 
            "s7_item": "Var Type:8,Var Length:8,Syntax ID:8,Transport Size:8,Length:16,DB Number:16,Area:8,Address:24", 
            "s7_data": "Return Code:8,Transport Size:8,Data Length:16", 
            "cotp_dt": "Length:8,PDU Type:8,Num. & LDU:8?bits=24", 
            "icmpv6-rsol": "Type:8,Code:8,Checksum:16,Reserved:32,Options:64"
        };

        ProtocolJS.ctype_len = {
            "ILP32":{
                "char": 8,
                "short": 16,
                "short int": 16,
                "int": 32,
                "long": 32,
                "long int": 32,
                "long long": 64,
                "long long int": 64,
                "*": 32
            },
            "LP64":{
                "char": 8,
                "short": 16,
                "short int": 16,
                "int": 32,
                "long int": 64,
                "long long": 64,
                "long long int": 64,
                "*": 64
            },
            "LLP64":{
                "char": 8,
                "short": 16,
                "short int": 16,
                "int": 32,
                "long": 32,
                "long int": 32,
                "long long": 64,
                "long long int": 64,
                "*": 64
            },
        }

        ProtocolJS.hdr_char_start="+";
        ProtocolJS.hdr_char_end="+";
        ProtocolJS.hdr_char_fill_odd="+" ;
        ProtocolJS.hdr_char_fill_even="-" ;
        ProtocolJS.hdr_char_sep="|" ;
        ProtocolJS.bits_per_line=32 ;
        ProtocolJS.do_print_top_tens=true;
        ProtocolJS.do_print_top_units=true;
        ProtocolJS.field_list=[];
        ProtocolJS.fromCStruct = function(code, platform) {
            if(this.ctype_len[platform] == null){
                return null;
            }
            var fields;
            try{
                var fields = peg.parse(code);
            }catch{
                return null;
            }
            var r = "";
            for(var i=0;i<fields.length;i++){
                r += fields[i]["name"] + ":";
                var len ,typelen = this.ctype_len[platform][fields[i]["type"]];
                if(typelen == null){
                    return null;
                }
                if(fields[i]["len"] != null){
                    len = typelen * fields[i]["len"];
                }else{
                    len = typelen;
                }
                r += len + ","
            }
            return r.slice(0,-1);
        };

        ProtocolJS.fromPyConstruct = function(code) {
            alert("TODO");
        };

        ProtocolJS.fromPyStruct = function(code) {
            alert("TODO");
        };
        
        ProtocolJS._clearCfg = function() {
            this.hdr_char_start="+";
            this.hdr_char_end="+";
            this.hdr_char_fill_odd="+" ;
            this.hdr_char_fill_even="-" ;
            this.hdr_char_sep="|" ;
            this.bits_per_line=32 ;
            this.do_print_top_tens=true;
            this.do_print_top_units=true;
            this.field_list=[];
        }

        ProtocolJS.parse = function(spec) {
            var fields;
            var opts;
            if (spec.indexOf("?") !== -1) {
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
            this._clearCfg();
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
                if((typeof(cur_field["len"]) != "number") || (cur_field["len"] !== cur_field["len"])){
                    throw "FATAL: Wrong field list";
                }
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
