import { Component, Vue } from 'vue-property-decorator'
import home from './home/index.vue'

@Component({
    components:{
        'im-home':home
    }
})
export default class container extends Vue {
    msg:string='131'
}