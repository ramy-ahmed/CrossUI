xui.Class("xui.UI.Label", "xui.UI",{
    Initialize:function(){
        // compitable
        xui.UI.SLabel = xui.UI.Label;
        var key="xui.UI.SLabel";
        xui.absBox.$type[key.replace("xui.UI.","")]=xui.absBox.$type[key]=key;
    },    
    Instance:{
        fireClickEvent:function(){
            this.getRoot().onClick();
            return this;
        },
        // calculate the formula, and apply to the control
        _applyExcelFormula:function(cellsMap){
            var profile=this.get(0), prop=profile.properties,f,value;
            if(f = prop.excelCellFormula){
                value = xui.ExcelFormula.calculate(f, cellsMap);
                if(xui.isSet(value)){
                    if(profile.beforeApplyExcelFormula && false===profile.beforeApplyExcelFormula(profile, prop.excelCellFormula, value)){}else{
                        this.setCaption(value, true);
                        if(profile.afterApplyExcelFormula)profile.afterApplyExcelFormula(profile, prop.excelCellFormula, value);
                    }
                }
           }
        }
    },
    Static:{
        Templates:{
            tagName:"label",
            className:'{_className}',
            style:'{_style};text-align:{hAlign}',
            ICON:{
                $order:0,
                className:'xuicon {imageClass}  {picClass}',
                style:'{backgroundImage}{backgroundPosition}{backgroundSize}{backgroundRepeat}{iconFontSize}{imageDisplay}{iconStyle}',
                text:'{iconFontCode}'
            },
            CAPTION:{
                text : '{caption}',
                style:'{_fc}{_fw}{_fs}{_ff}',
                'font-size':'1em',
                $order:1
            }
        },
        Appearances:{
        },
        DataModel:{
            selectable:true,
            caption:{
                ini:undefined,
                action: function(v){
                    var prf=this;
                    if(!prf.properties.clock){
                        v=(xui.isSet(v)?v:"")+"";
                        prf.getSubNode("CAPTION").html(xui.adjustRes(v,true));
                    }
                }
            },
            clock:{
                ini:'',
                combobox:['hh : mm : ss','hh - mm : ss'],
                action:function(v){
                    var prf=this,timer;
                    if(v && !prf._timer){
                        timer = prf._timer=new xui.Timer();
                        var f = timer.get(0).$onTime=function(){
                            if(!prf.destroyed)
                                prf.getSubNode("CAPTION").html(xui.Date.format(new Date,prf.properties.clock));
                        };
                        f();
                    }else if(!v &&prf._timer){
                        prf._timer.destroy();
                        prf._timer=null;
                        prf.boxing().setCaption(prf.properties.caption,true);
                    }
                }
            },
            image:{
                format:'image',
                action: function(v){
                    xui.UI.$iconAction(this);
                }
            },
            imagePos:{
                action: function(value){
                    this.getSubNode('ICON').css('backgroundPosition', value||'center');
                }
            },
            imageBgSize:{
                action: function(value){
                    this.getSubNode('ICON').css('backgroundSize', value||'');
                }
            },
            imageClass: {
                ini:'',
                action:function(v,ov){
                    xui.UI.$iconAction(this, 'ICON', ov);
                }
            },
            iconFontCode:{
                action:function(v){
                    xui.UI.$iconAction(this);
                }
            },
            hAlign:{
                ini:'right',
                listbox:['left','center','right'],
                action: function(v){
                    this.getRoot().css('textAlign',v);
                }
            },
            vAlign:{
                hidden:true
            },
            fontColor:xui.UI.Button.$DataModel.fontColor,
            fontSize:xui.UI.Button.$DataModel.fontSize,
            fontWeight:xui.UI.Button.$DataModel.fontWeight,
            fontFamily:xui.UI.Button.$DataModel.fontFamily,
            excelCellFormula:{
                ini:"",
                action:function(v){
                    var prf=this,m,
                        prop=prf.properties;
                    if(v && xui.ExcelFormula.validate(v)){
                        if(prf.host && (m=prf.host['xui.Module'])){
                            m.applyExcelFormula(prf);
                        }
                   }
                }
            }
        },
        Behaviors:{
            HoverEffected:{KEY:'KEY',ICON:'ICON'},
            onClick:function(profile, e, src){
                var p=profile.properties;
                if(p.disabled)return false;
                if(profile.onClick)
                    return profile.boxing().onClick(profile, e, src);
            }
        },
        EventHandlers:{
            onClick:function(profile, e, src){},
            beforeApplyExcelFormula:function(profile, excelCellFormula, value){},
            afterApplyExcelFormula:function(profile, excelCellFormula, value){}
        },
        RenderTrigger:function(){
            var prf=this,t;
            (prf.$beforeDestroy=(prf.$beforeDestroy||{}))["timerClear"]=function(){
                if(prf._timer){
                    prf._timer.destroy();
                    delete prf._timer;
                }
            };
            if(t=prf.properties.clock){
                prf.boxing().setClock(t,true);
            }
        },
        _prepareData:function(profile, data){
            data=arguments.callee.upper.call(this, profile,data);
            if(data.clock)data.caption='';
            data._fs = 'font-size:' + data.fontSize + ';';
            data._fw = 'font-weight:' + data.fontWeight + ';';
            data._fc = 'color:' + data.fontColor + ';';
            data._ff = 'font-family:' + data.fontFamily + ';';
            return data;
        }        
    }
});
