import BaseService from './base.service';

export default class CreateLeagueService {

    private apiService: any;

    constructor() {
        this.apiService = new BaseService();
    }

    public AddLeague(createLeague: any) {
        return this.apiService.post('leagues/addLeague/', createLeague);
    }
}
