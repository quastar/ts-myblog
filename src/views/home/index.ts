import { Component, Vue } from 'vue-property-decorator'
import {Tabbar,TabbarItem,Search,Image,Badge,Icon} from 'vant'

@Component({
    components:{
        Tabbar,
        TabbarItem,
        Search,
        'van-Image':Image,
        Badge,
        VIcon:Icon
    }
})
export default class Home extends Vue {
    searchKeyWord:string=''
    active:number=0;
    icon= {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
    }
    messageList=[
        {id:'1',avatar:'https://img01.yzcdn.cn/vant/cat.jpeg',name:'aa',message:'55555555555',tag:'2',isGroup:true,talker:'找超强'},
        {id:'2',avatar:'https://img01.yzcdn.cn/vant/cat.jpeg',name:'aa',message:'55555555555',tag:'2'},
        {id:'3',avatar:'https://img01.yzcdn.cn/vant/cat.jpeg',name:'aa',message:'55555555555',tag:'2'}
    ]
    touch_this:string='0';
    showSetting:boolean=false;
    hideSetting:boolean=false;
    created(){
        
    }

    check_message_detail(id:string){
        this.touch_this=id
    }
}