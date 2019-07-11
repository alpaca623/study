/**
 * 문제 : 록 페스티벌
 * 난이도 : 하
 * ID : FESTIVAL
 * https://algospot.com/judge/problem/read/FESTIVAL
 *
 * >> 풀이
 * 문제 : 공연장을 하루 빌리는데 드는 평균 비용을 최소화 하려면 어떻게 공연장을 빌려야 할까요?
 *
 * 무슨소린지 이해를 못했다. 공연장을 빌리는데 드는 비용이 {3, 1, 2, 3, 1, 2}라고 했을 때,
 * 이미 세 팀을 섭외한 경우, 3일대신 4일동안 공연을 진행해서 평균 비용을 더 저렴하게 할 수 있다.
 * 이말이 이해가 안됐다..
 *
 * 근데 생각해보면 3팀이 섭외가 된거고, 몇개의 팀을 더 섭외할 수도 있는 것이고,
 * 그렇게 생각하면 4일까지 빌려도 된다는 말 같다.
 *
 * 이런건 설명이 안되어 있으니 이해를 해야되는데.. 어려웠다.
 * 3팀을 섭외 햇는데 4일째까지 공연장을 대여한다는것은 섣불리 이해가 되지 않았다.
 *
 * 예제가 입력되면
 * 2
 * 6 3
 * 1 2 3 1 2 3
 * 6 2
 * 1 2 3 1 2 3
 *
 * 첫번째 테스트케이스
 * 우선 최소 빌려야하는 일수가 정해지기때문에, 그 단위로 모든 경우의 수를 구해야 한다.
 * case 1 - 3일인 경우 : [1, 2, 3], [2, 3, 1], [3, 1, 2], [1, 2, 3]
 * case 2 - 4일인 경우 : [1, 2, 3, 1], [2, 3, 1, 2], [3, 1, 2, 3]
 * case 3 - 5일인 경우 : [1, 2, 3, 1, 2], [2, 3, 1, 2, 3]
 * case 4 - 6일인 경우 : [1, 2, 3, 1, 2, 3]
 *
 * 이렇게 구한 경우의 수에서 평균을 구해주고, 가장 최소의 평균을 구하면 답이 나올 것이다.
 *
 *
 */
package algorithm.ps;

public class Festival{
  public static void main(String[] args){
    System.out.println("풀이 준비중 - 못풀음");
  }
}