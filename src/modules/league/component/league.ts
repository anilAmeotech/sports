import { Component, Vue } from 'vue-property-decorator';
@Component
export default class league extends Vue {

    created() {
        this.$store.commit('userLogged', true)
    }

}
