Set.prototype.union = function (set) {
    // this(Set 객체)를 복사
    const result = new Set(this);

    for (const value of set) {
        // 합집합은 2개의 Set 객체의 모든 요소로 구성된 집합
        // 중복된 요소는 포함되지 않음
        result.add(value);
    }

    return result;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA와 setB의 교집합
console.log(setA.union(setB));

// setB와 setA의 교집합
console.log(setB.union(setA));