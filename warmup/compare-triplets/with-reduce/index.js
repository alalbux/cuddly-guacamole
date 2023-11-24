function compareTriplets(a, b) {
    const [aliceScore, bobScore] = a.reduce(
        ([alice, bob], ratingA, i) => {
            const ratingB = b[i];
            if (ratingA > ratingB) {
                alice++;
            } else if (ratingA < ratingB) {
                bob++;
            }
            return [alice, bob];
        },
        [0, 0]
    );

    return [aliceScore, bobScore];
}