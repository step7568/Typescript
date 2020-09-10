//펑터는 map을 구현하는 인터페이스이다.
//카테고리 이론에서 펑터는 엔도 펑터(endoFunctor) 라는 특별한 성질을 만족시켜야 한다.
  //엔도 펑터
  //엔도 펑터의 엔도는 일종의 접두사이다. 엔도펑터는 특정 카테고리에서 출발해도 도착 카테고리는 출발 카테고리가 되게 하는 펑터이다.
export interface IFunctor<T> {
  map<U>(fn: (x: T) => U);
}
