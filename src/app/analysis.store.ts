
import { Store } from './store';
import { widget } from './models/interfaces';

export interface DashboardStoreState {

  current_dashboard: widget[]
}

class AnalysisStore extends Store<DashboardStoreState> {
  constructor() {
    super({
      current_dashboard: []
    });
  }
}

export const analysisStore = new AnalysisStore();
