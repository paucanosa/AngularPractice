import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { cloneDeep } from 'lodash-es';

export class Store<StoreState> {
  private readonly _subject: BehaviorSubject<StoreState>;
  private readonly _store: Observable<StoreState>;
  private readonly _defaultState: StoreState;

  constructor(defaultState: StoreState) {
    //storestate interface -> estat del store.
    this._defaultState = defaultState;
    this._subject = new BehaviorSubject<StoreState>(defaultState);
    this._store = this._subject.asObservable().pipe(distinctUntilChanged());
  }

  getValue<K extends keyof StoreState>(name: K): StoreState[K] {
    return this._subject.getValue()[name];
  }

  select<K extends keyof StoreState>(name: K): Observable<StoreState[K]> {
    return this._store.pipe(pluck(name));
    //docu rxjs pluck
    //el pipe en si no te una funcio principal aqui.. nomes saplica a un observable probablement no a un subject
    //utilitzar per subscriures a una variable del store, indiques quina amb "name" retorna observable!
  }

  set<K extends keyof StoreState>(name: K, state: StoreState[K]): void {
    // FIXME: To trigger angular "change detection on push", immutability is needed.
    //  Maybe it will be better to use a helper library to achieve it:
    //      - Immer (https://immerjs.github.io/immer/docs/introduction).
    //      - See this for more options: https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
    this._subject.next({ ...this._subject.getValue(), [name]: cloneDeep(state) });
  }

  destroy(): void {
    this._subject.next(this._defaultState);
  }
}
