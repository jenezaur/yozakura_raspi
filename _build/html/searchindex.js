Search.setIndex({envversion:47,filenames:["common","index","modules","opstn","rpi","setup","tutorial"],objects:{"":{common:[0,0,0,"-"],opstn:[3,0,0,"-"],rpi:[4,0,0,"-"]},"common.exceptions":{BadArgError:[0,2,1,""],BadDataError:[0,2,1,""],I2CSlotBusyError:[0,2,1,""],I2CSlotEmptyError:[0,2,1,""],MotorCountError:[0,2,1,""],NoConnectionError:[0,2,1,""],NoControllerError:[0,2,1,""],NoDriversError:[0,2,1,""],NoMbedError:[0,2,1,""],NotCalibratedError:[0,2,1,""],UnknownControllerError:[0,2,1,""],UnknownIPError:[0,2,1,""],UnknownMbedError:[0,2,1,""],YozakuraException:[0,2,1,""],YozakuraExit:[0,2,1,""],YozakuraRuntimeError:[0,2,1,""],YozakuraTimeoutError:[0,2,1,""]},"common.functions":{add_logging_level:[0,5,1,""],get_ip_address:[0,5,1,""],interrupted:[0,5,1,""]},"opstn.controller":{Buttons:[3,4,1,""],Controller:[3,4,1,""],Position:[3,4,1,""],State:[3,4,1,""]},"opstn.controller.Buttons":{all_pressed:[3,3,1,""],any_pressed:[3,3,1,""],buttons:[3,1,1,""],is_pressed:[3,3,1,""],known_makes:[3,1,1,""],pressed_buttons:[3,1,1,""]},"opstn.controller.Controller":{controller:[3,1,1,""],controllers:[3,1,1,""],make:[3,1,1,""],name:[3,1,1,""],shutdown:[3,3,1,""],shutdown_all:[3,6,1,""],state:[3,1,1,""],stick_id:[3,1,1,""]},"opstn.controller.Position":{direction:[3,1,1,""],inverted:[3,1,1,""],x:[3,1,1,""],y:[3,1,1,""]},"opstn.controller.State":{"__str__":[3,3,1,""],buttons:[3,1,1,""],data:[3,1,1,""],dpad:[3,1,1,""],lstick:[3,1,1,""],rstick:[3,1,1,""]},"opstn.server":{Handler:[3,4,1,""],Server:[3,4,1,""]},"opstn.server.Handler":{handle:[3,3,1,""],request:[3,1,1,""],reverse_mode:[3,1,1,""],wheels_single_stick:[3,1,1,""]},"opstn.server.Server":{add_controller:[3,3,1,""],controllers:[3,1,1,""],remove_controller:[3,3,1,""],serve_forever:[3,3,1,""]},"rpi.bitfields":{ArmPacket:[4,4,1,""],CurrentAlerts:[4,4,1,""],CurrentConfiguration:[4,4,1,""],MotorPacket:[4,4,1,""]},"rpi.bitfields.ArmPacket":{linear:[4,1,1,""],mode:[4,1,1,""],pitch:[4,1,1,""],yaw:[4,1,1,""]},"rpi.bitfields.CurrentAlerts":{alert_func:[4,1,1,""],bus_ol:[4,1,1,""],bus_ul:[4,1,1,""],conv_flag:[4,1,1,""],conv_watch:[4,1,1,""],empty:[4,1,1,""],invert:[4,1,1,""],latch:[4,1,1,""],overflow:[4,1,1,""],power_ol:[4,1,1,""],shunt_ol:[4,1,1,""],shunt_ul:[4,1,1,""]},"rpi.bitfields.CurrentConfiguration":{avg:[4,1,1,""],bus_ct:[4,1,1,""],empty:[4,1,1,""],mode:[4,1,1,""],reset:[4,1,1,""],shunt_ct:[4,1,1,""]},"rpi.bitfields.MotorPacket":{motor_id:[4,1,1,""],negative:[4,1,1,""],speed:[4,1,1,""]},"rpi.client":{Client:[4,4,1,""]},"rpi.client.Client":{add_current_sensor:[4,3,1,""],add_imu:[4,3,1,""],add_mbed:[4,3,1,""],add_motor:[4,3,1,""],current_sensors:[4,1,1,""],imus:[4,1,1,""],mbeds:[4,1,1,""],motors:[4,1,1,""],request:[4,1,1,""],run:[4,3,1,""],server_address:[4,1,1,""],shutdown:[4,3,1,""]},"rpi.devices":{CurrentSensor:[4,4,1,""],I2CDevice:[4,4,1,""],IMU:[4,4,1,""]},"rpi.devices.CurrentSensor":{address:[4,1,1,""],calibrate:[4,3,1,""],get_alerts:[4,3,1,""],get_configuration:[4,3,1,""],get_measurement:[4,3,1,""],iv:[4,1,1,""],lsbs:[4,1,1,""],name:[4,1,1,""],pin_alert:[4,1,1,""],registers:[4,1,1,""],reset:[4,3,1,""],set_alerts:[4,3,1,""],set_configuration:[4,3,1,""]},"rpi.devices.I2CDevice":{address:[4,1,1,""],devices:[4,1,1,""],name:[4,1,1,""],remove:[4,3,1,""]},"rpi.devices.IMU":{address:[4,1,1,""],name:[4,1,1,""],poll_interval:[4,1,1,""],rpy:[4,1,1,""]},"rpi.motor":{Motor:[4,4,1,""]},"rpi.motor.Motor":{drive:[4,3,1,""],enable_serial:[4,3,1,""],enable_soft_pwm:[4,3,1,""],has_pwm:[4,1,1,""],has_serial:[4,1,1,""],max_speed:[4,1,1,""],motor_id:[4,1,1,""],motors:[4,1,1,""],name:[4,1,1,""],pin_dir:[4,1,1,""],pin_fault_1:[4,1,1,""],pin_fault_2:[4,1,1,""],pin_pwm:[4,1,1,""],pin_reset:[4,1,1,""],reset_driver:[4,3,1,""],ser:[4,1,1,""],shutdown:[4,3,1,""],shutdown_all:[4,6,1,""],start_input:[4,1,1,""]},common:{exceptions:[0,0,0,"-"],functions:[0,0,0,"-"]},opstn:{controller:[3,0,0,"-"],server:[3,0,0,"-"]},rpi:{bitfields:[4,0,0,"-"],client:[4,0,0,"-"],devices:[4,0,0,"-"],motor:[4,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","exception","Python exception"],"3":["py","method","Python method"],"4":["py","class","Python class"],"5":["py","function","Python function"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:exception","3":"py:method","4":"py:class","5":"py:function","6":"py:classmethod"},terms:{"00v4_3":4,"02sensor":5,"07scanner":5,"0b01":4,"0b01110000":4,"0b11111":4,"10lx":[],"10lx_spec":5,"11n":5,"18v15":4,"4x4":4,"9150a":4,"__str__":3,"_ctype":4,"_fields_":4,"_motorpacketbit":4,"byte":4,"case":4,"class":[0,3,4],"default":[0,4],"float":[0,3,4],"import":0,"int":[0,3,4],"long":[0,4],"new":[0,3,4],"return":[0,3,4],"static":5,"true":[3,4],"try":[0,3],"while":[3,5],abl:0,about:[3,4],access:[],accordingli:3,activ:4,activest:0,adc:5,add:[0,4],add_control:3,add_current_sensor:4,add_imu:4,add_logging_level:0,add_mb:4,add_motor:4,addit:[0,3,4],address:[],admin:5,advanc:0,aff:4,affect:4,after:[0,3,4],alert:4,alert_func:4,alert_lim:4,alert_reg:4,all:[0,3,4],all_press:3,allot:0,allow:[0,3,4],alreadi:4,also:[3,4,5],amount:0,amper:4,analog:3,ani:[3,4,5],anonym:4,anoth:4,any_press:3,apol:4,appropri:3,argument:0,arm:[3,4,5],armpacket:4,as_byt:4,ascii:4,assign:4,associ:[0,4],assum:5,asynchron:4,attach:4,attempt:[0,4],aut:5,authent:5,automat:[3,4],avail:[0,4],averag:4,avg:4,axi:[3,4],back:[3,4],bad:4,badargerror:[0,4],baddataerror:0,ball:[],base:[],baserequesthandl:3,basicconfig:0,batteri:5,becom:4,been:[0,3,4],befor:4,behaviour:4,below:4,between:[0,4],beyond:4,big:4,bit:4,bitfield:[],blank:5,bodi:[3,4],bol:4,bool:[3,4],both:[0,3,4],bul:4,bus_ct:4,bus_ol:4,bus_ul:4,busi:0,button:[0,3],cabl:4,calcul:3,calib:4,calibr:[0,4],call:[0,3,4],camera:[],can:[0,3,4],cannon:0,cannot:[0,4],capabl:[3,4],carri:0,carriag:3,caus:0,cffi:5,chang:[0,4],charact:3,check:[0,3,4],choos:4,chr:4,classmethod:[3,4],cleanli:0,clear:4,client:[],client_address:[3,4],clone:5,cnvr:4,code:0,com:[0,4],command:[3,4],commun:[3,4],compar:[3,4],compat:5,compil:5,complet:[0,4],condit:4,config:4,configur:[3,4],connect:[],contain:[0,3,4],contec:[],continu:4,control:[],conv_flag:4,conv_watch:4,convers:4,correct:4,could:[0,4],count:0,creat:0,critic:0,current:[3,4,5],current_sensor:4,currentalert:4,currentconfigur:4,currentsensor:4,custom:0,cvrf:4,d11:4,d15:4,d3f474:5,danger:0,data:[0,3,4,5],datasheet:4,debug:0,declar:0,decor:0,def:0,defin:[0,4],deregist:[3,4],deregistr:4,deriv:0,detail:4,detect:3,determin:[0,3,4],devic:[],dict:[3,4],dictionari:[3,4],did:4,die:4,dir:[4,5],direct:[3,4],directli:4,disconnect:3,doe:[0,4],dot:0,down:[3,4],download:5,dpad:3,drive:4,driver:[0,4],durat:0,each:[0,3,4],easi:4,echo:3,eight:4,either:[0,3,4],elecom2g:5,elecom:[],element:[3,4],emerg:4,empti:4,enabl:[0,4],enable_seri:4,enable_soft_pwm:4,encod:4,end:[0,3],endian:4,engag:3,enough:0,ensur:[3,4],entir:0,entri:4,environ:[],equival:4,errno:0,error:0,error_messag:0,essid:5,establish:4,eth0:0,eth1:0,ethernet:4,even:4,exactli:4,exampl:[0,3,4],exist:0,exit:[0,3],expect:4,explicit:3,extens:4,extern:4,fals:[3,4],fast_funct:0,fatal:0,fault:4,fault_1:4,fault_2:4,fewer:4,ff1:[4,5],ff2:[4,5],field:4,file:4,fill:4,filter:0,find:[0,3],finder:5,first:[0,5],fit:4,five:4,flag:4,flavour:5,flipper:[3,4,5],fly:0,follow:[3,4],forev:4,fork:3,forkingmixin:3,format:[3,4],forward:3,found:[0,4],four:[0,4],frequenc:4,from:[0,3,4,5],front:[4,5],full:[3,4],further:0,fusion:4,gener:[3,4],get:[0,3,4],get_alert:4,get_configur:4,get_ip_address:0,get_measur:4,get_nam:3,get_stat:3,ghz:5,github:4,give:0,given:[0,3,4],goe:[0,4],gpio:[0,4,5],ground:5,gui:3,guid:5,gyro:4,halt:4,handl:[3,4],handler:3,handler_class:3,happen:0,hardwar:[],has_pwm:4,has_seri:4,have:[0,3,4],help:4,here:4,high:4,higher:3,highest:4,hokuyo:5,hold:4,horizont:3,how:4,htm:5,html:5,http:[0,4,5],human:3,i2c:[0,4,5],i2cdevic:4,i2cslotbusyerror:[0,4],i2cslotemptyerror:[0,4],ieee:5,ignor:4,illustr:4,impact:4,implement:3,imu:4,imu_set:4,ina226:4,ina226モジュール説明書:4,ina:4,index:1,individu:4,info:0,inform:[3,4],infrastructur:5,ini:4,initi:[0,4],input:[3,4],instal:[0,5],instanc:[0,4],instrument:4,inter:0,interfac:0,intermedi:3,interrupt:[0,4],interv:[3,4],invalid:0,invenens:4,invensens:4,invert:[3,4],ioctl:0,is_press:3,item:[0,4],itself:3,japanes:4,joystick:3,keep:[0,3],keyboardinterrupt:[0,3,4],know:4,known_mak:3,laser:5,last:0,latch:4,least:[3,4],left:[3,5],len:4,length:3,level:0,librari:4,like:0,limit:[0,4],line:[3,4],linear:4,linux:[0,4,5],list:[0,3,4],listen:[3,4],lit:4,local:[0,4,5],locat:4,log:[0,3],logger:0,loop:[3,4],lost:4,lsb:4,lstick:3,made:4,magnitud:4,mai:4,make:[0,3,4],manag:4,manipul:4,manual:4,map:[0,3],mask:4,math:4,matric:4,max_curr:4,max_spe:4,maximum:[0,3,4],mbed:[],measur:[3,4],mem:4,messag:0,method:[0,4],microcontrol:[0,4],might:[4,5],millisecond:4,minimum:4,mistak:4,mode:[3,4,5],monitor:4,more:[0,3,4],most:0,motiontrack:4,motor:[],motor_id:4,motorcounterror:[0,4],motorpacket:[0,4],move:[0,4],mpu:4,much:3,multipl:[3,4],must:4,name:[0,3,4],natur:4,need:[0,4,5],neg:4,neighbour:4,neither:4,network:0,never:0,next:4,noconnectionerror:[0,4],nocontrollererror:0,nodriverserror:[0,4],nombederror:[0,4],none:[0,3,4],nor:4,notcalibratederror:[0,4],note:4,number:[3,4],object:[3,4],obtain:[3,4],occur:0,ohm:4,onc:3,onli:[0,3,4],open:4,oper:4,oppos:0,opstn:[],option:[0,3,4],order:[0,3,4],oserror:0,other:[0,4],otherwis:[0,3],out:[0,3],output:4,over:4,overflow:4,overrid:4,overview:5,ovf:4,p19:5,p20:5,p23:5,p24:5,p25:5,p26:5,p27:5,p28:5,p29:5,p30:5,pack:4,packet:4,page:[1,4],paramet:[0,3,4],parent:4,pass:5,paul:0,pdf:[4,5],per:0,perform:[3,4],peripher:[],pickl:3,pin:[0,4,5],pin_alert:4,pin_dir:4,pin_fault_1:4,pin_fault_2:4,pin_pwm:4,pin_reset:4,pip3:5,pitch:4,pleas:3,point:[],pol:4,polar:4,poll:[3,4],poll_interv:[3,4],pololu:4,port:[3,4],portion:4,pose:[3,4],posit:[3,4,5],possibl:4,potentiomet:4,power:4,power_ol:4,prefer:0,press:3,pressed_button:3,prevent:4,previous:3,print:[0,3],prioriti:4,process:3,product:4,program:[0,4],progress:4,project:0,properli:0,provid:[0,3,4],psk:5,pub:4,pwm:[0,4,5],pwm_pin:4,pygam:[3,5],pyseri:5,python:[3,5],quad:0,quit:3,r_shunt:4,radian:4,rais:[0,3,4],rang:[4,5],raspberri:[],raspbian:[],rate:3,raw:3,read:[3,4],readabl:3,readi:4,rear:[4,5],receiv:[0,3,4],recent:0,recip:0,recommend:4,refer:[0,4,5],regist:[0,3,4],registr:4,relai:4,remain:4,remov:4,remove_control:3,reopen:3,repli:3,repres:[3,4],represent:3,request:[3,4],requir:3,reset:4,reset_driv:4,resist:4,resistor:4,resolut:4,respect:[3,4],respond:[3,4],result:[0,4],revers:[3,4],reverse_mod:3,richard:4,right:[3,5],robot:[0,3,4],roll:4,root:0,router:[4,5],rpi:[],rpy:4,rrl10_shinobi_tele_yozakura_44ch:5,rst:5,rstick:3,rtimu:4,rtimulib:[4,5],run:[0,3,4,5],runtim:0,runtimeerror:0,safe:3,sai:0,said:3,same:0,scale:4,sda:5,sdc:5,search:1,second:[0,3],secur:5,see:4,select:[4,5],send:[3,4],sensor:[3,4,5],sent:[3,4],separ:[3,4],sequenc:4,ser:4,serial:[0,4],serve_forev:3,server:[],server_address:[3,4],servo:4,set:[0,4,5],set_alert:4,set_configur:4,settings_fil:4,setup:[],should:4,show:3,shown:4,shunt:4,shunt_ct:4,shunt_ol:4,shunt_ul:4,shut:4,shutdown:[3,4],shutdown_al:[3,4],side:3,signal:4,signific:4,simpl:4,simpli:0,simplifi:4,simultan:[3,4],sinc:4,singl:[3,4],siocgifaddr:0,size:4,sleep:0,slept:0,slot:0,slow_funct:0,small:4,smbu:5,socket:[3,4],socketserv:3,soft:4,softwar:[],sol:4,some:0,someth:0,sourc:[0,3,4,5],specif:4,specifi:[0,4],speed:[3,4],start:[3,4],start_input:4,state:[3,4],station:[],statu:4,stdout:3,stick:3,stick_bodi:3,stick_id:3,store:4,str:[0,3,4],strawberri:4,string:[0,3],structur:[0,4],successfulli:0,sul:4,support:4,sure:3,symlink:4,systemexit:[0,3],take:4,task:0,tcp:3,tcpserver:3,tech:4,technic:[],temperatur:4,termin:3,test:0,texa:4,than:[0,4],thei:[3,4,5],them:[3,4],themselv:4,thi:[0,3,4,5],third:4,three:4,through:0,throughout:0,thu:4,time:[0,4],timeout:0,timeouterror:0,too:[0,4],took:0,traceback:0,track:3,transfer:3,transmit:4,trigger:[0,4],tupl:[3,4],turn:4,tutori:[],two:4,type:[3,4],typic:4,ubuntu:[],udp:[3,4],unabl:0,uncalibr:0,uncertainti:4,unchang:4,under:4,union:4,unit:4,unknown:[0,3],unknowncontrollererror:[0,3],unknowniperror:0,unknownmbederror:0,until:[3,4],upon:3,urg:[],urgbenri_ja:5,usabl:4,usag:4,usb:4,ust:[],ust_10lx_20lx:5,ust_protocol_ja:5,v_bu:4,v_shunt:4,valid:[0,4],valu:4,variabl:3,variou:4,verbiag:0,verbos:0,veri:0,version:4,vertic:3,via:[3,4],voltag:4,wai:0,warn:0,well:[3,4],were:4,what:[3,4],wheel:3,wheels_single_stick:3,when:[0,3,4],whenev:3,where:4,whether:[3,4],which:[0,3,4],whose:3,wide:3,wire:[],wireless:5,wirelessli:5,within:0,without:4,wlan0:0,wlan1:0,word:4,work:[4,5],workstat:0,would:[0,4],wpa2:5,wrap:3,wrapper:4,write:4,www:[4,5],yaw:4,yet:4,you:[0,4,5],your:[0,3],yozakura:[],yozakuraexcept:0,yozakuraexit:0,yozakuraruntimeerror:[0,4],yozakuratimeouterror:0,zero:[3,4]},titles:["common package","Welcome to Yozakura&#8217;s documentation!","Technical Documentation","opstn package","rpi package","Hardware and Software Setup","Tutorial"],titleterms:{"10lx":5,"function":0,access:5,address:5,ball:5,base:5,bitfield:4,camera:5,client:4,common:0,connect:5,contec:5,content:[0,3,4],control:3,devic:4,document:[1,2],elecom:5,environ:5,except:0,hardwar:5,indic:1,mbed:[4,5],modul:[0,3,4],motor:4,opstn:3,packag:[0,3,4],peripher:5,point:5,raspberri:5,raspbian:5,rpi:[4,5],server:3,setup:5,softwar:5,station:5,tabl:1,technic:2,tutori:6,ubuntu:5,urg:5,ust:5,welcom:1,wire:5,yozakura:1}})